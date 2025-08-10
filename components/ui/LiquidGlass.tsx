"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import {
	createBackgroundParticleField,
	createFloatingElements,
	createInteractiveOrbs,
	createLiquidGlassPanels,
} from "./liquid-glass/factories";
import { useMouseInteraction, useRenderLoop } from "./liquid-glass/hooks";
import type { LiquidGlassProps, SceneElements } from "./liquid-glass/types";
import {
	createCamera,
	createOptimizedRenderer,
	createScene,
	detectDeviceCapabilities,
	disposeObject3D,
	getOptimalRenderSettings,
	PerformanceMonitor,
	prefersReducedMotion,
} from "./liquid-glass/utils";

export default function LiquidGlass({ className = "" }: LiquidGlassProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const sceneRef = useRef<SceneElements>({});
	const performanceMonitorRef = useRef<PerformanceMonitor>();

	const [isReduced] = useState(() => prefersReducedMotion());
	const [isLoaded, setIsLoaded] = useState(false);
	const [fadeOpacity, setFadeOpacity] = useState(0);

	const { createRippleEffect, handleMouseMove, handleClick } =
		useMouseInteraction();
	const { createRenderLoop } = useRenderLoop();

	const startFadeInAnimation = useCallback(() => {
		const duration = 2500; // 2.5 seconds fade-in for scene
		const startTime = Date.now();

		const animateFade = () => {
			const elapsed = Date.now() - startTime;
			const progress = Math.min(elapsed / duration, 1.0);

			setFadeOpacity(progress);

			if (progress < 1.0) {
				requestAnimationFrame(animateFade);
			}
		};

		// Start from 0
		setFadeOpacity(0);
		animateFade();
	}, []);

	useEffect(() => {
		if (!canvasRef.current || isReduced || typeof window === "undefined")
			return;

		// Initialize performance monitoring
		const onLowPerformance = () => {
			console.warn("Low FPS detected, consider reducing quality settings");
		};
		performanceMonitorRef.current = new PerformanceMonitor(onLowPerformance);

		const canvas = canvasRef.current;

		// Detect device capabilities and get optimal settings
		const capabilities = detectDeviceCapabilities();
		const renderSettings = getOptimalRenderSettings(capabilities);

		// Create Three.js setup
		const renderer = createOptimizedRenderer(canvas, renderSettings);
		const scene = createScene();
		const camera = createCamera();

		// Initialize mouse interaction
		const mouse = { x: 0, y: 0 };
		const targetMouse = { x: 0, y: 0 };
		const interactionIntensity = 0;

		// Create glass container group
		const glassContainer = new THREE.Group();
		scene.add(glassContainer);

		// Create all scene elements
		const liquidGlassPanels = createLiquidGlassPanels(
			glassContainer,
			renderSettings,
		);
		const floatingElements = createFloatingElements(scene, renderSettings);
		const interactiveOrbs = createInteractiveOrbs(scene, renderSettings);
		const backgroundField = createBackgroundParticleField(
			scene,
			renderSettings,
		);

		// Store references
		sceneRef.current = {
			renderer,
			scene,
			camera,
			liquidGlassPanels,
			floatingElements,
			interactiveOrbs,
			backgroundField,
			glassContainer,
			mouse,
			targetMouse,
			interactionIntensity,
		};

		// Event handlers
		const onMouseMove = (event: MouseEvent) => {
			handleMouseMove(event, sceneRef);
		};

		const onClick = (event: MouseEvent) => {
			handleClick(event, sceneRef, createRippleEffect);
		};

		const onResize = () => {
			if (!sceneRef.current.renderer || !sceneRef.current.camera) return;

			const width = window.innerWidth;
			const height = window.innerHeight;
			sceneRef.current.camera.aspect = width / height;
			sceneRef.current.camera.updateProjectionMatrix();
			sceneRef.current.renderer.setSize(width, height, false);
		};

		// Create render loop
		const renderLoop = createRenderLoop(sceneRef);

		// Intersection Observer for performance
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						sceneRef.current.animId = requestAnimationFrame(renderLoop);
					} else {
						if (sceneRef.current.animId) {
							cancelAnimationFrame(sceneRef.current.animId);
							sceneRef.current.animId = undefined;
						}
					}
				});
			},
			{ threshold: 0.1 },
		);

		// Add event listeners
		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("click", onClick);
		window.addEventListener("resize", onResize);
		observer.observe(canvas);

		// Start render loop
		sceneRef.current.animId = requestAnimationFrame(renderLoop);

		// Mark as loaded and start fade-in animation
		setIsLoaded(true);
		startFadeInAnimation();

		// Cleanup function
		return () => {
			window.removeEventListener("resize", onResize);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("click", onClick);
			observer.disconnect();

			if (sceneRef.current.animId) {
				cancelAnimationFrame(sceneRef.current.animId);
			}

			if (sceneRef.current.renderer) {
				sceneRef.current.renderer.dispose();
			}

			// Clean up all scene objects
			[
				...(sceneRef.current.liquidGlassPanels || []),
				...(sceneRef.current.floatingElements || []),
				...(sceneRef.current.interactiveOrbs || []),
				...(sceneRef.current.backgroundField
					? [sceneRef.current.backgroundField]
					: []),
			].forEach(disposeObject3D);

			if (sceneRef.current.glassContainer) {
				disposeObject3D(sceneRef.current.glassContainer);
			}
		};
	}, [
		isReduced,
		createRippleEffect,
		handleMouseMove,
		handleClick,
		createRenderLoop,
		startFadeInAnimation,
	]);

	// Fallback for reduced motion
	if (isReduced) {
		return (
			<div
				className={`${className} flex items-center justify-center bg-gradient-to-br from-slate-900/30 via-blue-900/20 to-indigo-900/30`}
			>
				<div className="text-center space-y-4">
					<div className="text-3xl font-light bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent opacity-40">
						Elegant Background
					</div>
					<div className="text-sm text-slate-400">
						Subtle static gradient for accessibility
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className={`${className} fixed inset-0 pointer-events-none transition-opacity duration-100 ease-out`}
			style={{
				opacity: fadeOpacity,
			}}
		>
			<canvas
				ref={canvasRef}
				className="w-full h-full block"
				style={{ width: "100%", height: "100%" }}
			/>

			{/* Professional gradient overlays */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-slate-500/2 to-blue-600/3" />
				<div className="absolute inset-0 bg-gradient-to-tl from-slate-400/2 via-transparent to-blue-400/2" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/5" />
				<div
					className="absolute inset-0"
					style={{
						background:
							"radial-gradient(ellipse at center, transparent 50%, rgba(15,23,42,0.08) 100%)",
					}}
				/>
			</div>
		</div>
	);
}
