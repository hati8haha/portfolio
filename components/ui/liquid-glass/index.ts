// Re-export the main component
export { default } from "../LiquidGlass";
// Export configuration for customization
export { LIQUID_GLASS_CONFIG, PERFORMANCE_SETTINGS } from "./config";
// Export types for external use
export type {
	DeviceCapabilities,
	LiquidGlassProps,
	QualityLevel,
	RenderSettings,
	SceneElements,
} from "./types";
// Export utilities for advanced usage
export {
	detectDeviceCapabilities,
	getOptimalRenderSettings,
	PerformanceMonitor,
	prefersReducedMotion,
} from "./utils";
