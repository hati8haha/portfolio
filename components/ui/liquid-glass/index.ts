// Re-export the main component
export { default } from '../LiquidGlass';

// Export types for external use
export type {
  LiquidGlassProps,
  SceneElements,
  RenderSettings,
  DeviceCapabilities,
  QualityLevel,
} from './types';

// Export utilities for advanced usage
export {
  detectDeviceCapabilities,
  getOptimalRenderSettings,
  prefersReducedMotion,
  PerformanceMonitor,
} from './utils';

// Export configuration for customization
export { LIQUID_GLASS_CONFIG, PERFORMANCE_SETTINGS } from './config';
