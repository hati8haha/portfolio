import * as THREE from 'three';
import { LIQUID_GLASS_CONFIG, PERFORMANCE_SETTINGS } from './config';
import { DeviceCapabilities, QualityLevel, RenderSettings } from './types';

/**
 * Detects device capabilities for performance optimization
 */
export function detectDeviceCapabilities(): DeviceCapabilities {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  
  if (!gl) {
    return {
      isMobile: true,
      isLowEnd: true,
      maxPixelRatio: 1,
      maxTextureSize: 512,
      supportsWebGL2: false,
    };
  }

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const supportsWebGL2 = gl instanceof WebGL2RenderingContext;
  
  // Simple heuristic for low-end detection
  const isLowEnd = isMobile || maxTextureSize < 2048 || !supportsWebGL2;
  
  return {
    isMobile,
    isLowEnd,
    maxPixelRatio: Math.min(window.devicePixelRatio || 1, 2),
    maxTextureSize,
    supportsWebGL2,
  };
}

/**
 * Determines optimal render settings based on device capabilities
 */
export function getOptimalRenderSettings(capabilities: DeviceCapabilities): RenderSettings {
  const { isMobile, isLowEnd } = capabilities;
  
  if (isLowEnd) {
    return {
      ...LIQUID_GLASS_CONFIG.performance,
      ...PERFORMANCE_SETTINGS.lowEnd,
      enableShadows: false,
      antialias: false,
    };
  }
  
  if (isMobile) {
    return {
      ...LIQUID_GLASS_CONFIG.performance,
      ...PERFORMANCE_SETTINGS.mobile,
      enableShadows: false,
      antialias: true,
    };
  }
  
  return {
    ...LIQUID_GLASS_CONFIG.performance,
    enableShadows: false, // Keeping shadows disabled for performance
    antialias: false,
  };
}

/**
 * Creates an optimized WebGL renderer
 */
export function createOptimizedRenderer(
  canvas: HTMLCanvasElement,
  settings: RenderSettings
): THREE.WebGLRenderer {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: settings.antialias,
    powerPreference: 'high-performance',
    stencil: false,
    depth: true,
    premultipliedAlpha: false,
    precision: 'mediump',
  });

  // Performance optimizations
  renderer.shadowMap.enabled = settings.enableShadows;
  renderer.setPixelRatio(Math.min(settings.maxPixelRatio, window.devicePixelRatio || 1));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(LIQUID_GLASS_CONFIG.lighting.clearColor, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  return renderer;
}

/**
 * Creates camera with optimal settings
 */
export function createCamera(): THREE.PerspectiveCamera {
  const { camera: cameraConfig } = LIQUID_GLASS_CONFIG;
  
  const camera = new THREE.PerspectiveCamera(
    cameraConfig.fov,
    window.innerWidth / window.innerHeight,
    cameraConfig.near,
    cameraConfig.far
  );
  
  camera.position.set(
    cameraConfig.position.x,
    cameraConfig.position.y,
    cameraConfig.position.z
  );
  
  return camera;
}

/**
 * Creates scene with fog and lighting
 */
export function createScene(): THREE.Scene {
  const scene = new THREE.Scene();
  
  // Add ocean depth atmosphere with fog
  const { fog } = LIQUID_GLASS_CONFIG.lighting;
  scene.fog = new THREE.Fog(fog.color, fog.near, fog.far);
  
  return scene;
}

/**
 * Smooth interpolation utility
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Creates color from RGB array
 */
export function createColor(rgb: [number, number, number]): THREE.Color {
  return new THREE.Color(rgb[0], rgb[1], rgb[2]);
}

/**
 * Disposes of Three.js resources safely
 */
export function disposeObject3D(obj: THREE.Object3D): void {
  if (obj.parent) {
    obj.parent.remove(obj);
  }
  
  // Handle geometry disposal
  const geometry = (obj as any).geometry;
  if (geometry && typeof geometry.dispose === 'function') {
    geometry.dispose();
  }
  
  // Handle material disposal
  const material = (obj as any).material;
  if (material) {
    if (Array.isArray(material)) {
      material.forEach((mat) => {
        if (mat && typeof mat.dispose === 'function') {
          mat.dispose();
        }
      });
    } else if (typeof material.dispose === 'function') {
      material.dispose();
    }
  }
  
  obj.children.forEach(disposeObject3D);
}

/**
 * Performance monitoring utility
 */
export class PerformanceMonitor {
  private frameCount = 0;
  private lastTime = performance.now();
  private fps = 60;
  private frameTime = 16.67;
  private onLowPerformance?: () => void;

  constructor(onLowPerformance?: () => void) {
    this.onLowPerformance = onLowPerformance;
  }

  update(): void {
    this.frameCount++;
    const now = performance.now();
    
    if (now - this.lastTime >= 1000) {
      this.fps = this.frameCount;
      this.frameTime = (now - this.lastTime) / this.frameCount;
      
      if (this.fps < LIQUID_GLASS_CONFIG.performance.lowFpsThreshold) {
        this.onLowPerformance?.();
      }
      
      this.frameCount = 0;
      this.lastTime = now;
    }
  }

  getFPS(): number {
    return this.fps;
  }

  getFrameTime(): number {
    return this.frameTime;
  }
}

/**
 * Checks if reduced motion is preferred
 */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}
