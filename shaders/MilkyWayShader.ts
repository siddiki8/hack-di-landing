import { ShaderMaterial, Color, AdditiveBlending } from "three"

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vPosition = position;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uHover;
uniform vec2 uMouse;

varying vec2 vUv;
varying vec3 vPosition;

// Noise functions
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 0.0;
  
  for (int i = 0; i < 6; i++) {
      value += amplitude * noise(st);
      st *= 2.0;
      amplitude *= 0.5;
  }
  return value;
}

void main() {
  // Create spiral arms - scale up by using a smaller center value
  // Shift center slightly to the right for better text readability
  vec2 center = (vUv - vec2(0.6, 0.5)) * 0.85;
  float angle = atan(center.y, center.x);
  float dist = length(center);
  
  // Breathing effect - preserved from original
  float breathing = sin(uTime * 0.4) * 0.05 + 1.0;
  
  // Apply hover/scatter effect - preserved from original
  float scatter = uHover;
  vec2 mouseOffset = (vUv - uMouse) * scatter * 2.0;
  vec2 offsetUv = vUv + mouseOffset;
  center = mix(center, (offsetUv - vec2(0.6, 0.5)), scatter * 0.8);
  dist = mix(dist, length(center), scatter * 0.8);
  
  // Apply breathing to the spiral - preserved from original
  float spiral = sin(angle * 3.0 + dist * (12.0 * breathing) + uTime * 0.2) * 0.5 + 0.5;
  float noise1 = fbm(center * 3.5 + uTime * 0.1);
  float noise2 = fbm(center * 6.0 - uTime * 0.15);
  
  // Core glow with breathing - preserved from original
  float core = 1.0 - smoothstep(0.0, 0.6 * breathing, dist);
  
  // Combine effects - preserved from original
  float brightness = spiral * noise1 * (1.0 - dist * 1.1) + core * 0.6 + noise2 * 0.4;
  brightness = clamp(brightness, 0.0, 1.0);
  
  // Add subtle fade on the left for text readability
  float leftFade = smoothstep(0.0, 0.3, vUv.x);
  brightness *= leftFade;
  
  // Color mixing - preserved from original
  vec3 color = mix(uColor1, uColor2, brightness);
  color = mix(color, uColor3, core * 0.9);
  
  // Add stars - preserved from original
  float stars = step(0.97, random(vUv + sin(uTime * 0.1)));
  color += vec3(1.0) * stars * leftFade;

  // Apply scatter effect to opacity - preserved from original
  float opacity = brightness * (0.9 - scatter * 0.2);

  gl_FragColor = vec4(color, opacity);
}
`

export class MilkyWayMaterial extends ShaderMaterial {
  constructor() {
    super({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new Color(0x040d0e) }, // Deep green #040D0E
        uColor2: { value: new Color(0x0a2a2d) }, // Slightly lighter green
        uColor3: { value: new Color(0xe1ba43) }, // Gold #e1ba43
        uHover: { value: 0.0 }, // Hover effect intensity
        uMouse: { value: [0.5, 0.5] }, // Mouse position
      },
      transparent: true,
      blending: AdditiveBlending,
    })
  }
}
