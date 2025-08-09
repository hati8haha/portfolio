'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Performance configuration based on device capabilities
const getPerformanceConfig = () => {
  if (typeof window === 'undefined') return { quality: 'medium', pixelRatio: 1 };
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
  const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4;
  
  if (isMobile || isLowEnd || hasLowMemory) {
    return { quality: 'low', pixelRatio: 1 };
  } else if (window.devicePixelRatio > 2) {
    return { quality: 'high', pixelRatio: Math.min(window.devicePixelRatio, 2) };
  }
  
  return { quality: 'medium', pixelRatio: Math.min(window.devicePixelRatio, 2) };
};

// Intersection Observer hook for viewport detection
const useIntersectionObserver = (elementRef: React.RefObject<HTMLElement>, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef, hasIntersected, threshold]);

  return { isIntersecting, hasIntersected };
};

interface LiquidGlassText3DProps {
  text?: string;
  className?: string;
}

export default function LiquidGlassText3D({ 
  text = "Frontend Developer & UI Engineer",
  className = "" 
}: LiquidGlassText3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isIntersecting, hasIntersected } = useIntersectionObserver(containerRef, 0.1);
  const performanceConfig = useRef(getPerformanceConfig());
  
  const sceneRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    textMesh?: THREE.Group;
    clock?: THREE.Clock;
    animationId?: number;
    lightPosition?: THREE.Vector2;
    interactiveLight?: THREE.PointLight;
    isAnimating?: boolean;
    lastFrameTime?: number;
  }>({});

  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const fadeProgressRef = useRef(0);

  // Throttle animation based on performance and visibility
  const shouldAnimate = useCallback(() => {
    if (!isIntersecting) return false;
    
    const now = performance.now();
    const lastFrame = sceneRef.current.lastFrameTime || 0;
    const targetFPS = performanceConfig.current.quality === 'low' ? 30 : 60;
    const frameInterval = 1000 / targetFPS;
    
    if (now - lastFrame >= frameInterval) {
      sceneRef.current.lastFrameTime = now;
      return true;
    }
    
    return false;
  }, [isIntersecting]);

  const createLiquidGlassMaterial = useCallback((): THREE.ShaderMaterial => {
    const quality = performanceConfig.current.quality;
    const isLowQuality = quality === 'low';
    
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        lightPosition: { value: new THREE.Vector2(0.5, 0.5) },
        resolution: { value: new THREE.Vector2(800, 600) },
        opacity: { value: 0.95 },
        fadeInProgress: { value: 0.0 },
        gradientStart: { value: new THREE.Color(0.8, 0.4, 1.0) },
        gradientMiddle: { value: new THREE.Color(0.4, 0.8, 1.0) },
        gradientEnd: { value: new THREE.Color(1.0, 0.6, 0.8) },
        holographicColor1: { value: new THREE.Color(1.0, 0.2, 0.8) },
        holographicColor2: { value: new THREE.Color(0.2, 1.0, 0.6) },
        holographicColor3: { value: new THREE.Color(0.6, 0.2, 1.0) },
        rimColor: { value: new THREE.Color(0.0, 0.8, 1.0) },
        lightIntensity: { value: isLowQuality ? 2.0 : 3.0 },
        qualityLevel: { value: isLowQuality ? 0.0 : 1.0 }
      },
      vertexShader: `
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec3 vViewDirection;
        
        void main() {
          vPosition = position;
          vNormal = normalize(normalMatrix * normal);
          vUv = uv;
          
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          vViewDirection = normalize(-viewPosition.xyz);
          
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 lightPosition;
        uniform vec2 resolution;
        uniform float opacity;
        uniform float fadeInProgress;
        uniform vec3 gradientStart;
        uniform vec3 gradientMiddle;
        uniform vec3 gradientEnd;
        uniform vec3 holographicColor1;
        uniform vec3 holographicColor2;
        uniform vec3 holographicColor3;
        uniform vec3 rimColor;
        uniform float lightIntensity;
        uniform float qualityLevel;
        
        varying vec3 vPosition;
        varying vec3 vNormal;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying vec3 vViewDirection;
        
        void main() {
          // Simplified calculations for low-quality mode
          float complexity = mix(0.5, 1.0, qualityLevel);
          
          // Ice crystal surface distortions (simplified for low quality)
          float wave1 = sin(vWorldPosition.x * (4.0 + 4.0 * qualityLevel) + time * 0.8) * 0.015;
          float wave2 = cos(vWorldPosition.y * (3.0 + 3.0 * qualityLevel) + time * 0.6) * 0.015;
          float wave3 = sin(length(vWorldPosition.xy) * (6.0 + 6.0 * qualityLevel) - time * 1.0) * 0.01;
          
          vec3 perturbedNormal = normalize(vNormal + vec3(wave1, wave2, wave3) * complexity);
          
          // Ice-like Fresnel effect
          float cosTheta = abs(dot(vViewDirection, perturbedNormal));
          float fresnel = pow(1.0 - cosTheta, 2.5);
          
          // Cursor interaction with ice reflection
          vec2 screenPos = gl_FragCoord.xy / resolution;
          float lightDistance = distance(screenPos, lightPosition);
          float lightInfluence = 1.0 / (1.0 + lightDistance * lightDistance * 3.0);
          lightInfluence = smoothstep(0.0, 1.0, lightInfluence);
          
          // Simplified crystal patterns for low quality
          float patternMultiplier = 4.0 + 4.0 * qualityLevel;
          float crystalPattern1 = sin(vWorldPosition.x * patternMultiplier + time * 0.3) * 0.5 + 0.5;
          float crystalPattern2 = cos(vWorldPosition.y * (patternMultiplier * 0.75) + time * 0.2) * 0.5 + 0.5;
          float crystalPattern3 = mix(0.5, sin(length(vWorldPosition.xy) * (patternMultiplier * 0.5) + time * 0.1) * 0.5 + 0.5, qualityLevel);
          
          // Simplified frost texture
          float frostMultiplier = 6.0 + 6.0 * qualityLevel;
          float frostNoise1 = sin(vWorldPosition.x * frostMultiplier + vWorldPosition.y * (frostMultiplier * 0.67) + time * 0.5);
          float frostNoise2 = cos(vWorldPosition.x * (frostMultiplier * 0.83) - vWorldPosition.y * (frostMultiplier * 0.5) + time * 0.3);
          float frostTexture = (frostNoise1 * frostNoise2) * 0.2 + 0.8;
          frostTexture = smoothstep(0.3, 1.0, frostTexture);
          
          // Simplified flowing cracks
          float flowCrack1 = sin(vWorldPosition.x * 3.0 + vWorldPosition.y * 2.0 + time * 0.2);
          float flowCrack2 = mix(0.0, cos(vWorldPosition.x * 2.5 - vWorldPosition.y * 1.8 + time * 0.15), qualityLevel);
          float smoothCracks = smoothstep(0.7, 1.0, (flowCrack1 + flowCrack2) * 0.5 + 0.5) * 0.2;
          
          // Combined ice pattern
          float icePattern = crystalPattern1 * crystalPattern2 * crystalPattern3 * frostTexture;
          icePattern = smoothstep(0.2, 0.8, icePattern);
          
          // Dynamic gradient
          float gradientFactor = (vWorldPosition.y + 3.0) / 6.0;
          gradientFactor = mix(gradientFactor, icePattern, 0.2 * complexity);
          gradientFactor = clamp(gradientFactor, 0.0, 1.0);
          
          // Three-color gradient interpolation
          vec3 baseColor;
          if (gradientFactor < 0.5) {
            baseColor = mix(gradientStart, gradientMiddle, smoothstep(0.0, 0.5, gradientFactor) * 2.0);
          } else {
            baseColor = mix(gradientMiddle, gradientEnd, smoothstep(0.5, 1.0, gradientFactor - 0.5) * 2.0);
          }
          
          // Apply ice frost overlay
          baseColor = mix(baseColor, vec3(0.9, 0.95, 1.0), frostTexture * 0.25);
          
          // Simplified holographic effects for low quality
          float holo1 = sin(vWorldPosition.x * (3.0 + 3.0 * qualityLevel) + time * 1.5) * 0.3 + 0.7;
          float holo2 = cos(vWorldPosition.y * (2.5 + 2.5 * qualityLevel) + time * 1.2) * 0.3 + 0.7;
          
          vec3 holographicEffect = 
            holographicColor1 * holo1 * 0.15 * complexity +
            holographicColor2 * holo2 * 0.15 * complexity;
          
          // Simplified shimmer effect
          float shimmer = (sin(vWorldPosition.x * (4.0 + 4.0 * qualityLevel) + vWorldPosition.y * (3.0 + 3.0 * qualityLevel) + time * 2.0) * 0.3 + 0.7) * icePattern;
          shimmer = smoothstep(0.3, 1.0, shimmer);
          
          // Enhanced rim lighting
          float rimIntensity = pow(1.0 - cosTheta, 1.8);
          vec3 iceRimColor = mix(rimColor, vec3(0.6, 0.8, 1.0), 0.5);
          vec3 rimLighting = iceRimColor * rimIntensity * (2.0 + qualityLevel);
          
          // Simplified refraction effect
          float refraction = sin(vWorldPosition.x * 4.0 + vWorldPosition.y * 3.5 + time * 0.8) * 0.15;
          refraction = smoothstep(-0.5, 0.5, refraction);
          vec3 refractionEffect = vec3(
            1.0 + refraction * 0.08,
            1.0 + refraction * 0.04,
            1.0 - refraction * 0.04
          );
          
          // Combine effects with quality scaling
          vec3 finalColor = baseColor * refractionEffect;
          finalColor += holographicEffect * fresnel * 0.4;
          finalColor += vec3(shimmer * 0.25 * complexity);
          finalColor += rimLighting;
          finalColor += smoothCracks * vec3(0.8, 0.9, 1.0) * complexity;
          finalColor += baseColor * lightInfluence * lightIntensity * 0.25;
          
          // Internal glow
          float internalGlow = pow(cosTheta, 3.0) * icePattern * 0.4 * complexity;
          internalGlow = smoothstep(0.1, 0.8, internalGlow);
          finalColor += vec3(0.7, 0.85, 1.0) * internalGlow;
          
          // Saturation adjustment
          float luminance = dot(finalColor, vec3(0.299, 0.587, 0.114));
          finalColor = mix(vec3(luminance), finalColor, 1.1);
          
          // Ice-like opacity
          float iceOpacity = opacity * (0.8 + fresnel * 0.15 + icePattern * 0.08);
          iceOpacity += rimIntensity * 0.2;
          
          // Fade-in effect
          float fadeEase = smoothstep(0.0, 1.0, fadeInProgress);
          fadeEase = fadeEase * fadeEase * (3.0 - 2.0 * fadeEase);
          
          gl_FragColor = vec4(finalColor, iceOpacity * fadeEase);
        }
      `,
      transparent: true,
      blending: THREE.NormalBlending,
      side: THREE.DoubleSide,
      depthWrite: true
    });
  }, []);

  const setupLighting = useCallback((scene: THREE.Scene) => {
    const quality = performanceConfig.current.quality;
    const lightCount = quality === 'low' ? 2 : 4; // Reduce lights for low-end devices
    
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x2a4a6b, 0.3);
    scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(3, 4, 5);
    scene.add(directionalLight);

    if (lightCount > 2) {
      // Rim light (only for medium/high quality)
      const rimLight = new THREE.DirectionalLight(0x80c0ff, 0.6);
      rimLight.position.set(-2, -1, -3);
      scene.add(rimLight);

      // Interactive light that follows cursor
      const interactiveLight = new THREE.PointLight(0x40a0ff, 1.5, 10);
      interactiveLight.position.set(0, 0, 3);
      scene.add(interactiveLight);
      sceneRef.current.interactiveLight = interactiveLight;
    }
  }, []);

  const createFallbackText = useCallback((scene: THREE.Scene) => {
    const group = new THREE.Group();
    const material = createLiquidGlassMaterial();
    
    // Create simplified geometry for low-end devices
    const quality = performanceConfig.current.quality;
    const canvasSize = quality === 'low' ? 1024 : 2048;
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    canvas.width = canvasSize;
    canvas.height = canvasSize / 2.67;
    
    const fontSize = quality === 'low' ? 64 : 128;
    context.fillStyle = 'white';
    context.font = `bold ${fontSize}px Arial, sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillText('Frontend Developer', canvas.width / 2, canvas.height * 0.3);
    context.font = `bold ${fontSize * 0.75}px Arial, sans-serif`;
    context.fillText('& UI Engineer', canvas.width / 2, canvas.height * 0.7);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    const textGeometry = new THREE.PlaneGeometry(16, 6);
    const textMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 0.9
    });
    
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.userData = { type: 'fallback', originalY: 0 };
    group.add(textMesh);
    
    // Add glass effect only for medium/high quality
    if (quality !== 'low') {
      const glassGeometry = new THREE.BoxGeometry(16.4, 6.4, 0.3);
      const glassMesh = new THREE.Mesh(glassGeometry, material);
      glassMesh.position.z = 0.2;
      glassMesh.userData = { type: 'glass', originalY: 0 };
      group.add(glassMesh);
    }
    
    group.scale.setScalar(1.2);
    scene.add(group);
    
    return group;
  }, [createLiquidGlassMaterial]);

  const createText3D = useCallback(async (scene: THREE.Scene) => {
    const group = new THREE.Group();
    const material = createLiquidGlassMaterial();
    const quality = performanceConfig.current.quality;
    
    try {
      const loader = new FontLoader();
      const fontResponse = await fetch('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json');
      const fontData = await fontResponse.json();
      const font = loader.parse(fontData);
      
      // Adjust geometry complexity based on performance
      const curveSegments = quality === 'low' ? 6 : 12;
      const bevelSegments = quality === 'low' ? 3 : 5;
      
      const line1Geometry = new TextGeometry('Frontend Developer', {
        font: font,
        size: 3.6,
        depth: 0.3,
        curveSegments,
        bevelEnabled: quality !== 'low',
        bevelThickness: 0.05,
        bevelSize: 0.03,
        bevelOffset: 0,
        bevelSegments
      });
      
      const line2Geometry = new TextGeometry('& UI Engineer', {
        font: font,
        size: 3.0,
        depth: 0.25,
        curveSegments,
        bevelEnabled: quality !== 'low',
        bevelThickness: 0.04,
        bevelSize: 0.025,
        bevelOffset: 0,
        bevelSegments
      });
      
      // Center geometries
      line1Geometry.computeBoundingBox();
      const line1Box = line1Geometry.boundingBox!;
      line1Geometry.translate(
        -(line1Box.max.x + line1Box.min.x) / 2,
        2.0,
        -(line1Box.max.z + line1Box.min.z) / 2
      );
      
      line2Geometry.computeBoundingBox();
      const line2Box = line2Geometry.boundingBox!;
      line2Geometry.translate(
        -(line2Box.max.x + line2Box.min.x) / 2,
        -2.0,
        -(line2Box.max.z + line2Box.min.z) / 2
      );
      
      const line1Mesh = new THREE.Mesh(line1Geometry, material.clone());
      const line2Mesh = new THREE.Mesh(line2Geometry, material.clone());
      
      line1Mesh.userData = { type: 'text', line: 1 };
      line2Mesh.userData = { type: 'text', line: 2 };
      
      group.add(line1Mesh);
      group.add(line2Mesh);
      
    } catch (error) {
      console.warn('Failed to load font, using fallback text shapes:', error);
      setLoadingError(true);
      return createFallbackText(scene);
    }
    
    group.scale.setScalar(1.2);
    scene.add(group);
    
    return group;
  }, [createLiquidGlassMaterial, createFallbackText]);

  const startRenderLoop = useCallback(() => {
    const render = () => {
      // Only render if component is visible
      if (!shouldAnimate()) {
        sceneRef.current.animationId = requestAnimationFrame(render);
        return;
      }

      const { scene, camera, renderer, textMesh, clock, lightPosition } = sceneRef.current;
      
      if (!scene || !camera || !renderer || !clock) return;

      const elapsedTime = clock.getElapsedTime();
      
      // Calculate cursor influence
      const cursorX = lightPosition ? lightPosition.x : 0.5;
      const cursorY = lightPosition ? lightPosition.y : 0.5;
      const cursorInfluenceX = (cursorX - 0.5) * 0.1;
      const cursorInfluenceY = (cursorY - 0.5) * 0.05;
      
      // Animate text meshes
      if (textMesh && textMesh.children) {
        textMesh.children.forEach((child: any) => {
          if (child.material && child.material.uniforms) {
            child.material.uniforms.time.value = elapsedTime;
            child.material.uniforms.lightPosition.value = lightPosition;
            child.material.uniforms.fadeInProgress.value = fadeProgressRef.current;
          }
          
          if (child.userData.type === 'text') {
            const lineOffset = child.userData.line === 2 ? Math.PI * 0.5 : 0;
            child.position.y = (child.userData.originalY || 0) + 
              Math.sin(elapsedTime * 0.8 + lineOffset) * 0.03;
            child.rotation.y = Math.sin(elapsedTime * 0.4) * 0.01 + cursorInfluenceX;
            child.rotation.x = cursorInfluenceY * 0.5;
          } else if (child.userData.type === 'fallback' || child.userData.type === 'glass') {
            child.position.y = (child.userData.originalY || 0) + 
              Math.sin(elapsedTime * 0.6) * 0.02;
            child.rotation.y = Math.sin(elapsedTime * 0.3) * 0.005 + cursorInfluenceX;
            child.rotation.x = cursorInfluenceY * 0.3;
          }
        });
      }

      if (textMesh) {
        textMesh.rotation.y = Math.sin(elapsedTime * 0.15) * 0.005 + cursorInfluenceX * 0.5;
        textMesh.rotation.x = cursorInfluenceY * 0.2;
        textMesh.position.y = Math.sin(elapsedTime * 0.25) * 0.01;
      }

      renderer.render(scene, camera);
      sceneRef.current.animationId = requestAnimationFrame(render);
    };

    render();
  }, [shouldAnimate]);

  const startFadeInAnimation = useCallback(() => {
    const duration = 2000;
    const startTime = Date.now();
    
    const animateFade = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1.0);
      
      fadeProgressRef.current = progress;
      
      if (progress < 1.0) {
        requestAnimationFrame(animateFade);
      }
    };
    
    fadeProgressRef.current = 0;
    animateFade();
  }, []);

  const initThreeJS = useCallback(async () => {
    if (!containerRef.current || !hasIntersected) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: performanceConfig.current.quality !== 'low',
      powerPreference: "high-performance"
    });
    
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(performanceConfig.current.pixelRatio);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    const existingCanvas = container.querySelector('canvas');
    if (existingCanvas) {
      existingCanvas.remove();
    }
    
    container.appendChild(renderer.domElement);

    const clock = new THREE.Clock();
    camera.position.z = 15;
    camera.position.y = 0;

    sceneRef.current = {
      scene,
      camera,
      renderer,
      clock,
      lightPosition: new THREE.Vector2(0.5, 0.5),
      isAnimating: false
    };

    setupLighting(scene);

    try {
      const textMesh = await createText3D(scene);
      sceneRef.current.textMesh = textMesh;
      startRenderLoop();
      setIsLoaded(true);
      startFadeInAnimation();
    } catch (error) {
      console.error('Failed to create 3D text:', error);
      const fallbackMesh = createFallbackText(scene);
      sceneRef.current.textMesh = fallbackMesh;
      startRenderLoop();
      setIsLoaded(true);
      startFadeInAnimation();
    }
  }, [createText3D, setupLighting, startRenderLoop, createFallbackText, startFadeInAnimation, hasIntersected]);

  const cleanup = useCallback(() => {
    if (sceneRef.current.animationId) {
      cancelAnimationFrame(sceneRef.current.animationId);
    }

    if (sceneRef.current.renderer) {
      sceneRef.current.renderer.dispose();
      
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.remove();
        }
      }
    }

    if (sceneRef.current.textMesh) {
      sceneRef.current.textMesh.traverse((child: any) => {
        if (child.geometry) {
          child.geometry.dispose();
        }
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((mat: any) => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }
  }, []);

  const handleMouseMove = useCallback((event: React.MouseEvent) => {
    if (!containerRef.current || !sceneRef.current.lightPosition || !isIntersecting) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = 1.0 - (event.clientY - rect.top) / rect.height;
    
    sceneRef.current.lightPosition.set(x, y);
    
    if (sceneRef.current.interactiveLight) {
      const worldX = (x - 0.5) * 8;
      const worldY = (y - 0.5) * 5;
      sceneRef.current.interactiveLight.position.set(worldX, worldY, 3);
      
      const centerDistance = Math.sqrt(Math.pow(x - 0.5, 2) + Math.pow(y - 0.5, 2));
      sceneRef.current.interactiveLight.intensity = 1.5 + (1 - centerDistance * 2) * 1.5;
    }
  }, [isIntersecting]);

  const handleResize = useCallback(() => {
    if (!containerRef.current || !sceneRef.current.camera || !sceneRef.current.renderer) return;

    const rect = containerRef.current.getBoundingClientRect();
    sceneRef.current.camera.aspect = rect.width / rect.height;
    sceneRef.current.camera.updateProjectionMatrix();
    sceneRef.current.renderer.setSize(rect.width, rect.height, false);
  }, []);

  // Initialize only when component becomes visible
  useEffect(() => {
    if (!hasIntersected || typeof window === 'undefined') return;

    const timeoutId = setTimeout(() => {
      initThreeJS();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cleanup();
    };
  }, [initThreeJS, cleanup, hasIntersected]);

  useEffect(() => {
    const handleResizeEvent = () => handleResize();
    window.addEventListener('resize', handleResizeEvent);
    return () => window.removeEventListener('resize', handleResizeEvent);
  }, [handleResize]);

  // Pause/resume animation based on visibility
  useEffect(() => {
    if (!sceneRef.current.clock) return;
    
    if (isIntersecting) {
      sceneRef.current.clock.start();
    } else {
      sceneRef.current.clock.stop();
    }
  }, [isIntersecting]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-96 ${className}`}
      onMouseMove={handleMouseMove}
      style={{ 
        background: 'transparent',
        overflow: 'hidden'
      }}
    >

      {loadingError && isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/70 text-lg">Frontend Developer & UI Engineer</div>
        </div>
      )}
    </div>
  );
}
