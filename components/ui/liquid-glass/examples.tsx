/**
 * Example usage of the refactored LiquidGlass component
 * This file demonstrates various customization options
 */

import React from 'react';
import LiquidGlass from '../LiquidGlass';
import { LIQUID_GLASS_CONFIG } from '../liquid-glass/config';

// Example 1: Basic usage (same as before)
export function BasicLiquidGlass() {
  return <LiquidGlass className="fixed inset-0" />;
}

// Example 2: Performance-optimized for mobile
export function MobileLiquidGlass() {
  // Customize config for mobile performance
  const originalParticleCount = LIQUID_GLASS_CONFIG.performance.particleCount;
  
  React.useEffect(() => {
    // Reduce particle count for mobile
    LIQUID_GLASS_CONFIG.performance.particleCount = 75;
    
    return () => {
      // Restore original value
      LIQUID_GLASS_CONFIG.performance.particleCount = originalParticleCount;
    };
  }, [originalParticleCount]);

  return <LiquidGlass className="fixed inset-0" />;
}

// Example 3: Custom color theme
export function CustomColorLiquidGlass() {
  React.useEffect(() => {
    // Backup original colors
    const originalColors = { ...LIQUID_GLASS_CONFIG.colors };
    
    // Apply custom purple/pink theme
    LIQUID_GLASS_CONFIG.colors.deepOcean = [0.2, 0.1, 0.5];      // Deep purple
    LIQUID_GLASS_CONFIG.colors.midOcean = [0.3, 0.2, 0.6];       // Mid purple
    LIQUID_GLASS_CONFIG.colors.brightOcean = [0.5, 0.2, 0.8];    // Bright purple
    LIQUID_GLASS_CONFIG.colors.bioluminescent = [0.8, 0.3, 1.0]; // Pink glow
    
    return () => {
      // Restore original colors
      Object.assign(LIQUID_GLASS_CONFIG.colors, originalColors);
    };
  }, []);

  return <LiquidGlass className="fixed inset-0" />;
}

// Example 4: High-performance mode
export function HighPerformanceLiquidGlass() {
  React.useEffect(() => {
    const backup = {
      particleCount: LIQUID_GLASS_CONFIG.performance.particleCount,
      panelCount: LIQUID_GLASS_CONFIG.performance.panelCount,
      floatingElementCount: LIQUID_GLASS_CONFIG.performance.floatingElementCount,
    };
    
    // Minimal settings for maximum performance
    LIQUID_GLASS_CONFIG.performance.particleCount = 50;
    LIQUID_GLASS_CONFIG.performance.panelCount = 2;
    LIQUID_GLASS_CONFIG.performance.floatingElementCount = 3;
    
    return () => {
      Object.assign(LIQUID_GLASS_CONFIG.performance, backup);
    };
  }, []);

  return <LiquidGlass className="fixed inset-0" />;
}

// Example 5: With performance monitoring
export function MonitoredLiquidGlass() {
  const [fps, setFps] = React.useState(60);
  const [quality, setQuality] = React.useState<'high' | 'medium' | 'low'>('high');

  React.useEffect(() => {
    // Simulate performance monitoring integration
    const interval = setInterval(() => {
      // In real implementation, this would come from PerformanceMonitor
      const currentFps = 60 - Math.random() * 30; // Simulated FPS
      setFps(Math.round(currentFps));
      
      // Auto-adjust quality based on FPS
      if (currentFps < 20) setQuality('low');
      else if (currentFps < 40) setQuality('medium');
      else setQuality('high');
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    // Adjust settings based on quality
    const originalCount = LIQUID_GLASS_CONFIG.performance.particleCount;
    
    switch (quality) {
      case 'low':
        LIQUID_GLASS_CONFIG.performance.particleCount = 25;
        break;
      case 'medium':
        LIQUID_GLASS_CONFIG.performance.particleCount = 75;
        break;
      case 'high':
        LIQUID_GLASS_CONFIG.performance.particleCount = 150;
        break;
    }

    return () => {
      LIQUID_GLASS_CONFIG.performance.particleCount = originalCount;
    };
  }, [quality]);

  return (
    <div className="relative">
      <LiquidGlass className="fixed inset-0" />
      
      {/* Performance overlay */}
      <div className="fixed top-4 right-4 bg-black/20 backdrop-blur-sm rounded p-2 text-white text-sm">
        <div>FPS: {fps}</div>
        <div>Quality: {quality}</div>
      </div>
    </div>
  );
}

// Example 6: Conditional rendering based on device
export function ResponsiveLiquidGlass() {
  const [shouldRender, setShouldRender] = React.useState(true);

  React.useEffect(() => {
    // Simple device detection
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    
    const isLowEnd = isMobile || navigator.hardwareConcurrency < 4;
    
    // Only render on capable devices
    setShouldRender(!isLowEnd);
  }, []);

  if (!shouldRender) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-slate-400">
            <div className="text-2xl font-light mb-2">Elegant Background</div>
            <div className="text-sm">Optimized for your device</div>
          </div>
        </div>
      </div>
    );
  }

  return <LiquidGlass className="fixed inset-0" />;
}
