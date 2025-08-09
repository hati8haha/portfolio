import * as THREE from 'three';

export interface LiquidGlassProps {
  className?: string;
}

export type ShaderUniforms = {
  [key: string]: { value: any };
} & {
  uTime: { value: number };
  uMouse: { value: THREE.Vector2 };
  uInteraction: { value: number };
};

export interface LiquidGlassMaterial extends THREE.ShaderMaterial {
  uniforms: ShaderUniforms;
}

export interface RippleMaterial extends THREE.ShaderMaterial {
  uniforms: {
    [key: string]: { value: any };
  } & {
    uTime: { value: number };
    uIntensity: { value: number };
    uColor: { value: THREE.Color };
  };
}

export interface SceneElements {
  renderer?: THREE.WebGLRenderer;
  scene?: THREE.Scene;
  camera?: THREE.PerspectiveCamera;
  liquidGlassPanels?: THREE.Mesh[];
  floatingElements?: THREE.Mesh[];
  interactiveOrbs?: THREE.Mesh[];
  backgroundField?: THREE.Points;
  glassContainer?: THREE.Group;
  animId?: number;
  mouse?: { x: number; y: number };
  targetMouse?: { x: number; y: number };
  time?: number;
  interactionIntensity?: number;
}

export interface FloatingElementUserData {
  initialPosition: THREE.Vector3;
  floatSpeed: number;
  floatRadius: number;
  phase: number;
}

export interface PerformanceMetrics {
  fps: number;
  frameTime: number;
  triangleCount: number;
  drawCalls: number;
}

export interface DeviceCapabilities {
  isMobile: boolean;
  isLowEnd: boolean;
  maxPixelRatio: number;
  maxTextureSize: number;
  supportsWebGL2: boolean;
}

export type QualityLevel = 'low' | 'medium' | 'high' | 'ultra';

export interface RenderSettings {
  particleCount: number;
  panelCount: number;
  floatingElementCount: number;
  interactiveOrbCount: number;
  geometrySegments: number;
  maxPixelRatio: number;
  enableShadows: boolean;
  antialias: boolean;
}
