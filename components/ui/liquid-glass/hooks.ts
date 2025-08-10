import { useCallback, useRef } from "react";
import * as THREE from "three";
import { rippleFragmentShader, rippleVertexShader } from "./shaders-additional";
import type { SceneElements } from "./types";

/**
 * Hook for handling mouse interactions and ripple effects
 */
export function useMouseInteraction() {
	const createRippleEffect = useCallback(
		(scene: THREE.Scene | undefined, x: number, y: number) => {
			if (!scene) return;

			const rippleGeometry = new THREE.RingGeometry(0, 1, 32, 1);
			const rippleMaterial = new THREE.ShaderMaterial({
				uniforms: {
					uTime: { value: 0 },
					uIntensity: { value: 1 },
					uColor: { value: new THREE.Color().setHSL(0.6, 0.7, 0.8) },
				},
				vertexShader: rippleVertexShader,
				fragmentShader: rippleFragmentShader,
				transparent: true,
				blending: THREE.AdditiveBlending,
				side: THREE.DoubleSide,
			});

			const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
			ripple.position.set(x * 8, y * 8, 2);
			scene.add(ripple);

			// Animate ripple with fluid morphing
			const startTime = Date.now();
			const animateRipple = () => {
				const elapsed = (Date.now() - startTime) / 1200;
				if (elapsed > 1) {
					scene.remove(ripple);
					rippleMaterial.dispose();
					rippleGeometry.dispose();
					return;
				}
				rippleMaterial.uniforms.uTime.value = elapsed;
				requestAnimationFrame(animateRipple);
			};
			animateRipple();
		},
		[],
	);

	const handleMouseMove = useCallback(
		(event: MouseEvent, sceneRef: React.MutableRefObject<SceneElements>) => {
			if (!sceneRef.current.targetMouse) return;

			sceneRef.current.targetMouse.x =
				(event.clientX / window.innerWidth) * 2 - 1;
			sceneRef.current.targetMouse.y =
				-(event.clientY / window.innerHeight) * 2 + 1;

			// Increase interaction intensity on mouse movement
			if (sceneRef.current.interactionIntensity !== undefined) {
				sceneRef.current.interactionIntensity = Math.min(
					1,
					sceneRef.current.interactionIntensity + 0.15,
				);
			}
		},
		[],
	);

	const handleClick = useCallback(
		(
			event: MouseEvent,
			sceneRef: React.MutableRefObject<SceneElements>,
			createRipple: (
				scene: THREE.Scene | undefined,
				x: number,
				y: number,
			) => void,
		) => {
			if (!sceneRef.current.scene) return;

			const x = (event.clientX / window.innerWidth) * 2 - 1;
			const y = -(event.clientY / window.innerHeight) * 2 + 1;

			createRipple(sceneRef.current.scene, x, y);

			// Boost interaction intensity on click
			if (sceneRef.current.interactionIntensity !== undefined) {
				sceneRef.current.interactionIntensity = Math.min(
					1,
					sceneRef.current.interactionIntensity + 0.3,
				);
			}
		},
		[],
	);

	return {
		createRippleEffect,
		handleMouseMove,
		handleClick,
	};
}

/**
 * Hook for managing the Three.js render loop
 */
export function useRenderLoop() {
	const frameCountRef = useRef(0);

	const updateLiquidGlassPanels = useCallback(
		(
			panels: THREE.Mesh[] | undefined,
			time: number,
			mouse: { x: number; y: number } | undefined,
			interactionIntensity: number,
			shouldUpdateExpensive: boolean,
		) => {
			if (!panels) return;

			panels.forEach((panel, index) => {
				const material = panel.material as THREE.ShaderMaterial;
				if (material.uniforms) {
					material.uniforms.uTime.value = time + index * 0.5;
					if (mouse && material.uniforms.uMouse && shouldUpdateExpensive) {
						material.uniforms.uMouse.value.set(mouse.x, mouse.y);
					}
					if (material.uniforms.uInteraction) {
						material.uniforms.uInteraction.value = interactionIntensity;
					}
				}

				// Optimized rotation and position updates
				if (shouldUpdateExpensive) {
					panel.rotation.y = Math.sin(time * 0.3 + index) * 0.1;
					panel.rotation.x = Math.cos(time * 0.2 + index) * 0.05;
					panel.position.z = -index * 2 + Math.sin(time * 0.4 + index) * 0.5;
				}
			});
		},
		[],
	);

	const updateFloatingElements = useCallback(
		(
			elements: THREE.Mesh[] | undefined,
			time: number,
			shouldUpdateExpensive: boolean,
		) => {
			if (!elements || !shouldUpdateExpensive) return;

			elements.forEach((element, index) => {
				const userData = element.userData;
				const phase = userData.phase + time * userData.floatSpeed;

				element.position.x =
					userData.initialPosition.x + Math.sin(phase) * userData.floatRadius;
				element.position.y =
					userData.initialPosition.y +
					Math.cos(phase * 0.7) * userData.floatRadius * 0.5;
				element.position.z =
					userData.initialPosition.z +
					Math.sin(phase * 0.5) * userData.floatRadius * 0.3;

				// Subtle rotation
				element.rotation.x = time * 0.2 + index;
				element.rotation.y = time * 0.15 + index * 0.5;

				// Dynamic material properties
				const material = element.material as THREE.MeshPhysicalMaterial;
				material.opacity = 0.3 + Math.sin(time + index) * 0.1;
			});
		},
		[],
	);

	const updateInteractiveOrbs = useCallback(
		(
			orbs: THREE.Mesh[] | undefined,
			time: number,
			mouse: { x: number; y: number } | undefined,
			interactionIntensity: number,
			shouldUpdateExpensive: boolean,
		) => {
			if (!orbs) return;

			orbs.forEach((orb, index) => {
				const material = orb.material as THREE.ShaderMaterial;
				if (material.uniforms) {
					// Always update time for smooth liquid animation
					material.uniforms.uTime.value = time;

					// Update mouse position less frequently for performance
					if (mouse && material.uniforms.uMouse && shouldUpdateExpensive) {
						material.uniforms.uMouse.value.set(mouse.x, mouse.y);
					}

					// Update interaction intensity
					if (material.uniforms.uInteraction) {
						material.uniforms.uInteraction.value = interactionIntensity;
					}
				}

				// Liquid glass movement - more subtle and performant
				if (shouldUpdateExpensive) {
					// Reduced calculations for better performance
					const baseTime = time * 0.3;
					const indexOffset = index * 0.8;

					// Simplified liquid motion
					const liquidX =
						Math.cos(baseTime + indexOffset) * 4 +
						Math.sin(baseTime * 0.7 + indexOffset) * 2;
					const liquidY =
						Math.sin(baseTime * 0.6 + indexOffset) * 3 +
						Math.cos(baseTime * 0.4 + indexOffset) * 1.5;
					const liquidZ =
						-2 - index * 1.2 + Math.sin(baseTime * 0.5 + indexOffset) * 1.5;

					orb.position.set(liquidX, liquidY, liquidZ);

					// Minimal rotation for liquid glass effect
					orb.rotation.x += 0.003;
					orb.rotation.y += 0.002;
					orb.rotation.z += 0.001;
				}
			});
		},
		[],
	);

	const updateBackgroundField = useCallback(
		(
			backgroundField: THREE.Points | undefined,
			time: number,
			interactionIntensity: number,
			shouldUpdateExpensive: boolean,
		) => {
			if (!backgroundField || !shouldUpdateExpensive) return;

			const material = backgroundField.material as THREE.ShaderMaterial;
			if (material.uniforms) {
				material.uniforms.uTime.value = time;
				material.uniforms.uInteraction.value = interactionIntensity;
			}

			backgroundField.rotation.y = time * 0.02;
			backgroundField.rotation.x = Math.sin(time * 0.1) * 0.05;
		},
		[],
	);

	const updateCamera = useCallback(
		(camera: THREE.PerspectiveCamera | undefined, time: number) => {
			if (!camera) return;

			camera.position.x = Math.sin(time * 0.1) * 0.5;
			camera.position.y = Math.cos(time * 0.08) * 0.3;
			camera.position.z = 12 + Math.sin(time * 0.3) * 0.5;
			camera.lookAt(0, 0, 0);
		},
		[],
	);

	const createRenderLoop = useCallback(
		(sceneRef: React.MutableRefObject<SceneElements>) => {
			return function renderLoop(timestamp: number) {
				if (
					!sceneRef.current.renderer ||
					!sceneRef.current.scene ||
					!sceneRef.current.camera
				) {
					return;
				}

				// Check if animations should be paused (for modal performance)
				const animationState = document.documentElement.style.getPropertyValue(
					"--animation-performance",
				);
				const shouldPause =
					animationState === "paused" ||
					document.body.classList.contains("modal-open");

				if (shouldPause) {
					// Render one frame but don't update animations
					sceneRef.current.renderer.render(
						sceneRef.current.scene,
						sceneRef.current.camera,
					);
					sceneRef.current.animId = requestAnimationFrame(renderLoop);
					return;
				}

				const t = timestamp * 0.001;
				sceneRef.current.time = t;
				frameCountRef.current++;

				// Optimized performance throttling for 60fps
				const shouldUpdateExpensive = frameCountRef.current % 1 === 0; // Update every frame for smoothness
				const shouldUpdateMouse = frameCountRef.current % 2 === 0; // Mouse updates every other frame

				// Smooth mouse interpolation with better performance
				const { mouse, targetMouse } = sceneRef.current;
				if (mouse && targetMouse && shouldUpdateMouse) {
					const lerpSpeed = 0.1; // Optimized lerp speed
					mouse.x += (targetMouse.x - mouse.x) * lerpSpeed;
					mouse.y += (targetMouse.y - mouse.y) * lerpSpeed;
				}

				// Faster interaction intensity decay for liquid glass
				if (sceneRef.current.interactionIntensity !== undefined) {
					sceneRef.current.interactionIntensity *= 0.96;
				}

				const interactionIntensity = sceneRef.current.interactionIntensity || 0;

				// Update all elements with optimized frequency
				updateLiquidGlassPanels(
					sceneRef.current.liquidGlassPanels,
					t,
					mouse,
					interactionIntensity,
					shouldUpdateExpensive,
				);

				updateFloatingElements(
					sceneRef.current.floatingElements,
					t,
					shouldUpdateExpensive,
				);

				updateInteractiveOrbs(
					sceneRef.current.interactiveOrbs,
					t,
					mouse,
					interactionIntensity,
					shouldUpdateExpensive,
				);

				updateBackgroundField(
					sceneRef.current.backgroundField,
					t,
					interactionIntensity,
					shouldUpdateExpensive,
				);

				updateCamera(sceneRef.current.camera, t);

				// Minimal glass container rotation for performance
				if (sceneRef.current.glassContainer && shouldUpdateExpensive) {
					sceneRef.current.glassContainer.rotation.y =
						Math.sin(t * 0.08) * 0.015;
					sceneRef.current.glassContainer.rotation.x =
						Math.cos(t * 0.12) * 0.008;
				}

				sceneRef.current.renderer.render(
					sceneRef.current.scene,
					sceneRef.current.camera,
				);
				sceneRef.current.animId = requestAnimationFrame(renderLoop);
			};
		},
		[
			updateLiquidGlassPanels,
			updateFloatingElements,
			updateInteractiveOrbs,
			updateBackgroundField,
			updateCamera,
		],
	);

	return { createRenderLoop };
}
