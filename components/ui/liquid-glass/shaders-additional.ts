export const rippleVertexShader = `
precision highp float;

uniform float uTime;
varying vec2 vUv;
varying float vAlpha;

void main() {
  vUv = uv;
  vec3 pos = position;
  
  // Liquid glass expansion with organic deformation
  float expansion = uTime * 8.0;
  pos.xy *= (1.0 + expansion);
  
  // Add organic wave deformation
  float wave = sin(length(pos.xy) * 3.0 - uTime * 15.0) * 0.2;
  pos.z += wave * (1.0 - uTime);
  
  vAlpha = (1.0 - uTime) * (1.0 - smoothstep(0.0, 1.0, length(pos.xy) / 8.0));
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const rippleFragmentShader = `
precision highp float;

uniform float uTime;
uniform float uIntensity;
uniform vec3 uColor;
varying vec2 vUv;
varying float vAlpha;

void main() {
  float dist = length(vUv - 0.5);
  
  // Glass-like transparency with fresnel effect
  float fresnel = 1.0 - smoothstep(0.0, 0.5, dist);
  float glass = pow(fresnel, 2.0);
  
  // Liquid glass color with iridescence
  vec3 iridescence = uColor + sin(dist * 10.0 + uTime * 3.0) * 0.2;
  
  float alpha = vAlpha * glass * uIntensity * 0.8;
  gl_FragColor = vec4(iridescence, alpha);
}
`;

export const interactiveOrbVertexShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform float uInteraction;
uniform float uIndex;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vPosition = position;
  vNormal = normal;
  vUv = uv;
  
  vec3 pos = position;
  
  // Liquid glass deformation - more fluid and organic
  float liquidTime = uTime * 0.6;
  float wave1 = sin(pos.x * 0.3 + liquidTime * 1.2) * 0.08;
  float wave2 = cos(pos.y * 0.2 + liquidTime * 0.9) * 0.06;
  float wave3 = sin(pos.z * 0.25 + liquidTime * 1.4) * 0.05;
  
  // Add secondary waves for more complex liquid motion
  float wave4 = sin(pos.x * 0.8 + liquidTime * 2.1) * cos(pos.y * 0.6 + liquidTime * 1.7) * 0.03;
  float wave5 = cos(pos.z * 0.9 + liquidTime * 2.3) * sin(pos.x * 0.4 + liquidTime * 1.5) * 0.025;
  
  pos += vec3(wave1 + wave4, wave2 + wave5, wave3);
  
  // Gentle liquid surface tension effect
  float surfaceTension = sin(liquidTime * 0.4 + uIndex * 0.8) * 0.06 + 1.0;
  pos *= surfaceTension;
  
  // Subtle liquid flow - like viscous fluid
  vec3 liquidFlow = vec3(
    sin(liquidTime * 0.3 + pos.y * 0.05) * 0.15,
    cos(liquidTime * 0.2 + pos.x * 0.08) * 0.12,
    sin(liquidTime * 0.25 + pos.z * 0.06) * 0.1
  );
  pos += liquidFlow * 0.3;
  
  // Mouse interaction - more responsive for liquid glass
  vec3 mousePos = vec3(uMouse * 3.0, 0.0);
  float mouseDist = distance(pos, mousePos);
  float mouseInfluence = 1.0 / (1.0 + mouseDist * 0.3);
  
  // Liquid attraction effect
  vec3 attraction = normalize(mousePos - pos) * mouseInfluence * uInteraction * 0.4;
  
  // Add some liquid viscosity to the attraction
  float viscosity = sin(liquidTime + mouseDist) * 0.1 + 1.0;
  attraction *= viscosity;
  
  pos += attraction;
  
  // Update varying position for fragment shader
  vPosition = pos;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

export const interactiveOrbFragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform float uInteraction;
uniform float uIndex;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
  vec3 viewDirection = normalize(cameraPosition - vPosition);
  vec3 normal = normalize(vNormal);
  
  // Enhanced fresnel for ultra-transparent liquid glass
  float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), 2.2);
  
  // Ultra-transparent liquid glass colors
  vec3 liquidCore = vec3(0.95, 0.99, 1.0);
  vec3 liquidRim = vec3(0.2, 0.6, 0.95);
  vec3 liquidDepth = vec3(0.1, 0.3, 0.7);
  
  // Radial gradient for perfect glass sphere effect
  float radialGrad = length(vUv - 0.5) * 2.0;
  float smoothGrad = smoothstep(0.0, 0.9, radialGrad);
  
  vec3 baseColor = mix(liquidCore, liquidRim, smoothGrad);
  baseColor = mix(baseColor, liquidDepth, pow(radialGrad, 2.5));
  
  // Ultra-subtle caustic patterns for liquid effect
  float time = uTime * 0.6;
  float caustic1 = sin(vUv.x * 8.0 + time * 1.2) * cos(vUv.y * 6.0 + time * 0.9);
  float caustic2 = sin(vUv.x * 5.0 - time * 1.4) * cos(vUv.y * 10.0 - time * 1.6);
  float caustics = (caustic1 + caustic2) * 0.03 + 0.06;
  
  // Apply caustics very subtly for water-like transparency
  baseColor += caustics * vec3(0.08, 0.2, 0.4) * (1.0 - radialGrad * 0.8);
  
  // Liquid distortion effect - very subtle
  float distortion = sin(vPosition.x * 2.0 + time) * cos(vPosition.y * 1.8 + time * 1.1) * 0.015;
  baseColor += distortion * vec3(0.03, 0.1, 0.2);
  
  // Minimal bubble highlights for water effect
  float bubbleTime = time * 2.5;
  float bubblePattern = sin(length(vPosition) * 6.0 + bubbleTime) * 0.02;
  bubblePattern = max(0.0, bubblePattern);
  baseColor += bubblePattern * vec3(0.6, 0.8, 1.0);
  
  // Index-based variation for depth perception
  float depthShift = sin(uIndex * 1.2 + time * 0.25) * 0.08;
  baseColor = mix(baseColor, vec3(0.08, 0.25, 0.6), depthShift);
  
  // Mouse interaction with very subtle glow
  vec2 mouseInfluence = uMouse - vPosition.xy * 0.06;
  float mouseDist = length(mouseInfluence);
  float mouseGlow = exp(-mouseDist * 1.2) * uInteraction * 0.3;
  baseColor += mouseGlow * vec3(0.15, 0.5, 0.8);
  
  // Ultra-transparent alpha for liquid glass/water effect
  float baseAlpha = 0.04; // Even more transparent
  float fresnelAlpha = fresnel * 0.18;
  float interactionAlpha = mouseGlow * 0.15;
  float edgeAlpha = smoothstep(0.7, 1.0, radialGrad) * 0.1; // Subtle edge definition
  
  float alpha = baseAlpha + fresnelAlpha + interactionAlpha + edgeAlpha;
  
  // Ensure minimum visibility while maintaining transparency
  alpha = max(alpha, 0.02);
  alpha = min(alpha, 0.3); // Cap max alpha for glass effect
  
  gl_FragColor = vec4(baseColor, alpha);
}`;

export const particleVertexShader = `
precision highp float;

attribute float size;
varying vec3 vColor;
varying float vAlpha;
uniform float uTime;
uniform float uInteraction;

void main() {
  vColor = color;
  
  vec3 pos = position;
  
  // Ocean particle drift
  pos.x += sin(uTime * 0.3 + position.y * 0.01) * 1.5;
  pos.y += cos(uTime * 0.2 + position.x * 0.01) * 1.0;
  pos.z += sin(uTime * 0.4 + position.z * 0.01) * 2.0;
  
  // Deep ocean current effects
  pos.x += sin(uTime * 0.1 + position.z * 0.005) * 3.0;
  pos.y += cos(uTime * 0.15 + position.x * 0.008) * 2.0;
  
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  float distance = length(mvPosition.xyz);
  
  vAlpha = (1.0 - distance * 0.04) * (0.3 + uInteraction * 0.3);
  
  gl_PointSize = size * (150.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const particleFragmentShader = `
precision highp float;

varying vec3 vColor;
varying float vAlpha;

void main() {
  vec2 center = gl_PointCoord - 0.5;
  float dist = length(center);
  
  if (dist > 0.5) discard;
  
  float alpha = (1.0 - smoothstep(0.1, 0.5, dist)) * vAlpha * 0.5;
  
  gl_FragColor = vec4(vColor, alpha);
}
`;
