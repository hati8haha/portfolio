export const LIQUID_GLASS_CONFIG = {
  performance: {
    maxPixelRatio: 1.5,
    particleCount: 120, // Reduced for better performance
    frameThrottle: 1, // Reduced throttling for smoother 60fps
    panelCount: 3,
    floatingElementCount: 4, // Slightly reduced
    interactiveOrbCount: 3, // Reduced for better liquid glass performance
    geometrySegments: 16,
    maxFrameRate: 60,
    lowFpsThreshold: 45, // Increased threshold for better performance
  },
  
  animation: {
    noiseIntensity: 0.3,
    rippleSpeed: 8.0,
    interactionDecay: 0.95,
    mouseInfluenceRadius: 4.0,
    depthSeparation: 2.0,
    floatSpeed: { min: 0.3, max: 0.7 },
    floatRadius: { min: 1, max: 3 },
  },
  
  colors: {
    deepOcean: [0.1, 0.3, 0.6] as [number, number, number],
    midOcean: [0.2, 0.4, 0.7] as [number, number, number],
    brightOcean: [0.0, 0.5, 0.8] as [number, number, number],
    abyssalDepth: [0.05, 0.2, 0.4] as [number, number, number],
    bubbleCore: [0.8, 0.95, 1.0] as [number, number, number],
    bubbleRim: [0.1, 0.4, 0.8] as [number, number, number],
    bioluminescent: [0.3, 0.8, 1.0] as [number, number, number],
  },
  
  materials: {
    glass: {
      refractiveIndex: 1.333,
      thickness: { base: 0.1, increment: 0.05 },
      opacity: { base: 0.15, decrement: 0.02 },
      roughness: 0.1,
      metalness: 0.05,
      transmission: 0.95,
      clearcoat: 0.8,
      clearcoatRoughness: 0.1,
    },
    
    // New orb-specific settings for liquid glass effect
    orb: {
      baseOpacity: 0.08,
      fresnelOpacity: 0.25,
      refractionStrength: 0.5,
      causticIntensity: 0.3,
      bubbleEffect: 0.4,
      liquidDistortion: 0.15,
    },
    
    particles: {
      sizeRange: { min: 1, max: 4 },
      alphaBase: 0.3,
      alphaVariation: 0.3,
    },
  },
  
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 0, z: 12 },
    movementAmplitude: { x: 0.5, y: 0.3, z: 0.5 },
  },
  
  lighting: {
    fog: {
      color: 0x001122,
      near: 8,
      far: 25,
    },
    clearColor: 0x001122,
  },
};

export const PERFORMANCE_SETTINGS = {
  mobile: {
    particleCount: 75,
    panelCount: 2,
    floatingElementCount: 3,
    interactiveOrbCount: 2,
    geometrySegments: 8,
    maxPixelRatio: 1,
  },
  
  lowEnd: {
    particleCount: 50,
    panelCount: 1,
    floatingElementCount: 2,
    interactiveOrbCount: 1,
    geometrySegments: 8,
    maxPixelRatio: 1,
  },
};
