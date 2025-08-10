import * as THREE from "three";
import { LIQUID_GLASS_CONFIG } from "./config";
import { liquidGlassFragmentShader, liquidGlassVertexShader } from "./shaders";
import {
	interactiveOrbFragmentShader,
	interactiveOrbVertexShader,
	particleFragmentShader,
	particleVertexShader,
} from "./shaders-additional";
import type { FloatingElementUserData, RenderSettings } from "./types";
import { createColor } from "./utils";

/**
 * Creates liquid glass panels with proper materials and positioning
 */
export function createLiquidGlassPanels(
	glassContainer: THREE.Group,
	settings: RenderSettings,
): THREE.Mesh[] {
	const panels: THREE.Mesh[] = [];
	const { materials } = LIQUID_GLASS_CONFIG;

	for (let i = 0; i < settings.panelCount; i++) {
		const panelGeometry = new THREE.PlaneGeometry(
			8,
			6,
			settings.geometrySegments,
			settings.geometrySegments,
		);

		const panelMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uInteraction: { value: 0 },
				uDepth: { value: i * 0.3 },
				uOpacity: {
					value:
						materials.glass.opacity.base -
						i * materials.glass.opacity.decrement,
				},
				uRefraction: { value: materials.glass.refractiveIndex },
				uThickness: {
					value:
						materials.glass.thickness.base +
						i * materials.glass.thickness.increment,
				},
			},
			vertexShader: liquidGlassVertexShader,
			fragmentShader: liquidGlassFragmentShader,
			transparent: true,
			blending: THREE.NormalBlending,
			side: THREE.DoubleSide,
			depthWrite: false,
			depthTest: true,
		});

		const panel = new THREE.Mesh(panelGeometry, panelMaterial);
		panel.position.set(
			(Math.random() - 0.5) * 6,
			(Math.random() - 0.5) * 4,
			-i * 2,
		);
		panel.rotation.x = (Math.random() - 0.5) * 0.3;
		panel.rotation.y = (Math.random() - 0.5) * 0.3;

		glassContainer.add(panel);
		panels.push(panel);
	}

	return panels;
}

/**
 * Creates floating interactive elements
 */
export function createFloatingElements(
	scene: THREE.Scene,
	settings: RenderSettings,
): THREE.Mesh[] {
	const elements: THREE.Mesh[] = [];
	const { colors, materials } = LIQUID_GLASS_CONFIG;

	for (let i = 0; i < settings.floatingElementCount; i++) {
		const elementGeometry = new THREE.SphereGeometry(
			0.2 + Math.random() * 0.3,
			settings.geometrySegments,
			settings.geometrySegments,
		);

		const elementMaterial = new THREE.MeshPhysicalMaterial({
			color: new THREE.Color().setHSL(0.55 + i * 0.03, 0.6, 0.4),
			transparent: true,
			opacity: 0.3,
			roughness: materials.glass.roughness,
			metalness: materials.glass.metalness,
			transmission: materials.glass.transmission,
			thickness: materials.glass.thickness.base,
			envMapIntensity: 0.8,
			clearcoat: materials.glass.clearcoat,
			clearcoatRoughness: materials.glass.clearcoatRoughness,
			ior: materials.glass.refractiveIndex,
		});

		const element = new THREE.Mesh(elementGeometry, elementMaterial);
		element.position.set(
			(Math.random() - 0.5) * 15,
			(Math.random() - 0.5) * 10,
			(Math.random() - 0.5) * 8,
		);

		const userData: FloatingElementUserData = {
			initialPosition: element.position.clone(),
			floatSpeed:
				LIQUID_GLASS_CONFIG.animation.floatSpeed.min +
				Math.random() *
					(LIQUID_GLASS_CONFIG.animation.floatSpeed.max -
						LIQUID_GLASS_CONFIG.animation.floatSpeed.min),
			floatRadius:
				LIQUID_GLASS_CONFIG.animation.floatRadius.min +
				Math.random() *
					(LIQUID_GLASS_CONFIG.animation.floatRadius.max -
						LIQUID_GLASS_CONFIG.animation.floatRadius.min),
			phase: Math.random() * Math.PI * 2,
		};
		element.userData = userData;

		scene.add(element);
		elements.push(element);
	}

	return elements;
}

/**
 * Creates interactive orbs that respond to mouse with liquid glass effect
 */
export function createInteractiveOrbs(
	scene: THREE.Scene,
	settings: RenderSettings,
): THREE.Mesh[] {
	const orbs: THREE.Mesh[] = [];

	for (let i = 0; i < settings.interactiveOrbCount; i++) {
		const orbGeometry = new THREE.SphereGeometry(
			0.6 + Math.random() * 3.5, // Slightly larger for better liquid effect
			32,
			32,
		);

		const orbMaterial = new THREE.ShaderMaterial({
			uniforms: {
				uTime: { value: 0 },
				uMouse: { value: new THREE.Vector2(0, 0) },
				uInteraction: { value: 0 },
				uIndex: { value: i },
			},
			vertexShader: interactiveOrbVertexShader,
			fragmentShader: interactiveOrbFragmentShader,
			transparent: true,
			blending: THREE.NormalBlending, // Changed from AdditiveBlending for more realistic glass
			side: THREE.FrontSide,
			depthWrite: false,
			depthTest: true,
		});

		const orb = new THREE.Mesh(orbGeometry, orbMaterial);
		orb.position.set(
			(i - 1.5) * 4 + Math.random() * 1.5,
			Math.sin(i * 0.8) * 2.5 + Math.random() * 1.5,
			-2 - i * 1.2,
		);

		scene.add(orb);
		orbs.push(orb);
	}

	return orbs;
}

/**
 * Creates background particle field for depth
 */
export function createBackgroundParticleField(
	scene: THREE.Scene,
	settings: RenderSettings,
): THREE.Points {
	const particleGeometry = new THREE.BufferGeometry();
	const positions = new Float32Array(settings.particleCount * 3);
	const colors = new Float32Array(settings.particleCount * 3);
	const sizes = new Float32Array(settings.particleCount);

	const { colors: colorConfig, materials } = LIQUID_GLASS_CONFIG;
	const oceanColors = [
		createColor(colorConfig.deepOcean),
		createColor(colorConfig.midOcean),
		createColor(colorConfig.brightOcean),
		createColor(colorConfig.abyssalDepth),
	];

	for (let i = 0; i < settings.particleCount; i++) {
		const i3 = i * 3;
		positions[i3] = (Math.random() - 0.5) * 25;
		positions[i3 + 1] = (Math.random() - 0.5) * 20;
		positions[i3 + 2] = (Math.random() - 0.5) * 15;

		const colorIndex = Math.floor(Math.random() * oceanColors.length);
		const color = oceanColors[colorIndex];
		colors[i3] = color.r;
		colors[i3 + 1] = color.g;
		colors[i3 + 2] = color.b;

		sizes[i] =
			materials.particles.sizeRange.min +
			Math.random() *
				(materials.particles.sizeRange.max - materials.particles.sizeRange.min);
	}

	particleGeometry.setAttribute(
		"position",
		new THREE.BufferAttribute(positions, 3),
	);
	particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
	particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

	const particleMaterial = new THREE.ShaderMaterial({
		uniforms: {
			uTime: { value: 0 },
			uInteraction: { value: 0 },
		},
		vertexShader: particleVertexShader,
		fragmentShader: particleFragmentShader,
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthWrite: false,
		vertexColors: true,
	});

	const backgroundField = new THREE.Points(particleGeometry, particleMaterial);
	scene.add(backgroundField);

	return backgroundField;
}
