export const liquidGlassVertexShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform float uInteraction;
uniform float uDepth;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;

// Smooth noise for organic deformation
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  vUv = uv;
  vNormal = normal;
  vPosition = position;
  
  vec3 pos = position;
  
  // Organic liquid deformation
  float noiseScale = 0.3;
  vec3 noiseCoord = pos * noiseScale + vec3(uTime * 0.2);
  float noise = snoise(noiseCoord) * 0.5;
  noise += snoise(noiseCoord * 2.0) * 0.25;
  noise += snoise(noiseCoord * 4.0) * 0.125;
  
  // Mouse interaction creates depth and warping
  vec2 mouseInfluence = uMouse - pos.xy * 0.1;
  float mouseDist = length(mouseInfluence);
  float mouseEffect = 1.0 / (1.0 + mouseDist * 2.0);
  
  // Apply liquid glass deformation
  pos.z += noise * 0.3;
  pos.z += mouseEffect * uInteraction * 2.0;
  pos.xy += mouseInfluence * mouseEffect * uInteraction * 0.3;
  
  // Layer depth separation
  pos.z -= uDepth * 3.0;
  
  vec4 worldPosition = modelMatrix * vec4(pos, 1.0);
  vWorldPosition = worldPosition.xyz;
  
  gl_Position = projectionMatrix * viewMatrix * worldPosition;
}
`;

export const liquidGlassFragmentShader = `
precision highp float;

uniform float uTime;
uniform vec2 uMouse;
uniform float uInteraction;
uniform float uDepth;
uniform float uOpacity;
uniform float uRefraction;
uniform float uThickness;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying vec3 vWorldPosition;

void main() {
  vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
  vec3 normal = normalize(vNormal);
  
  // Fresnel effect for glass-like appearance
  float fresnel = pow(1.0 - max(dot(viewDirection, normal), 0.0), 2.5);
  
  // Deep Ocean color palette
  vec3 glassColor1 = vec3(0.1, 0.3, 0.6);  // Deep ocean blue
  vec3 glassColor2 = vec3(0.2, 0.4, 0.7);  // Mid-ocean blue
  vec3 glassColor3 = vec3(0.0, 0.5, 0.8);  // Bright ocean teal
  vec3 glassColor4 = vec3(0.05, 0.2, 0.4); // Abyssal depth blue
  
  // Dynamic color mixing
  float colorMix = sin(vUv.x * 3.14159 + uTime) * 0.3 + 0.5;
  colorMix += uInteraction * 0.4;
  
  // Create sophisticated color blending
  vec3 baseColor = mix(glassColor1, glassColor2, colorMix);
  baseColor = mix(baseColor, glassColor3, sin(vUv.y * 3.14159 + uTime * 0.7) * 0.2 + 0.3);
  baseColor = mix(baseColor, glassColor4, cos(length(vUv - 0.5) * 6.28 + uTime * 1.2) * 0.1 + 0.2);
  
  // Depth-based color variation
  baseColor *= (1.0 + uDepth * 0.2);
  
  // Glass reflection and refraction
  float reflection = fresnel * 0.8;
  float transmission = (1.0 - fresnel) * 0.9;
  
  vec3 finalColor = baseColor * (reflection + transmission);
  
  // Ocean-like iridescence
  float shimmer = sin(length(vWorldPosition.xy) * 2.0 + uTime * 2.0) * 0.15;
  shimmer += cos(length(vWorldPosition.xy) * 3.0 - uTime * 1.5) * 0.12;
  finalColor += shimmer * vec3(0.1, 0.4, 0.8);
  
  // Interactive highlights
  vec2 mouseInfluence = uMouse - vPosition.xy * 0.1;
  float mouseDist = length(mouseInfluence);
  float mouseHighlight = 1.0 / (1.0 + mouseDist * 4.0);
  finalColor += mouseHighlight * uInteraction * 0.15;
  
  // Final opacity
  float alpha = uOpacity * (0.5 + fresnel * 0.2);
  alpha *= (1.0 + uInteraction * 0.3);
  
  gl_FragColor = vec4(finalColor, alpha);
}
`;
