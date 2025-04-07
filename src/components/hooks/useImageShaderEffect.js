// For changing stuff change :
// - aberrationIntensity // Effect
// - aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05); // decay
// - float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse); // How far effect reached on 0.3
// - vec2 uvOffset = strength * - mouseDirection * 0.2; // 0.2 lower is subtler movement

import { useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D u_texture;
  uniform vec2 u_mouse;
  uniform vec2 u_prevMouse;
  uniform float u_aberrationIntensity;

  void main() {
    vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);

    vec2 mouseDirection = u_mouse - u_prevMouse;
    vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

    vec2 uvOffset = strength * -mouseDirection * 0.075;
    vec2 uv = vUv - uvOffset;

    vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
    vec4 colorG = texture2D(u_texture, uv);
    vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

    gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
  }
`;

export default function useShaderImageEffect(containerRef, imageRef) {
  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Orthographic Camera
    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      10
    );
    camera.position.z = 1;

    // Load image and compute aspect ratios
    const texture = new THREE.TextureLoader().load(image.src, () => {
      const imgAspect = texture.image.width / texture.image.height;
      const containerAspect = width / height;

      let planeWidth = width;
      let planeHeight = height;

      if (imgAspect > containerAspect) {
        // Image is wider than container
        planeWidth = height * imgAspect;
      } else {
        // Image is taller than container
        planeHeight = width / imgAspect;
      }

      const geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const plane = new THREE.Mesh(geometry, material);
      scene.add(plane);

      renderer.render(scene, camera); // Render once texture is ready
    });

    // Uniforms
    const uniforms = {
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_prevMouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_aberrationIntensity: { value: 0.15 }, // Aberration Intensity
      u_texture: { value: texture },
    };

    // Plane
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
    });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // Mouse tracking
    let easeFactor = 0.08;
    let mouse = new THREE.Vector2(0.5, 0.5);
    let targetMouse = new THREE.Vector2(0.5, 0.5);
    let prevMouse = new THREE.Vector2(0.5, 0.5);
    let aberration = 0;

    function animate() {
      requestAnimationFrame(animate);

      mouse.lerp(targetMouse, easeFactor);
      uniforms.u_mouse.value.set(mouse.x, 1.0 - mouse.y);
      uniforms.u_prevMouse.value.set(prevMouse.x, 1.0 - prevMouse.y);

      aberration = Math.max(0, aberration - 0.05);
      uniforms.u_aberrationIntensity.value = aberration;

      renderer.render(scene, camera);
    }

    function handleMouseMove(e) {
      const rect = container.getBoundingClientRect();
      prevMouse.copy(targetMouse);
      targetMouse.set(
        (e.clientX - rect.left) / rect.width,
        (e.clientY - rect.top) / rect.height
      );
      aberration = 1;
    }

    function handleMouseEnter(e) {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      targetMouse.set(x, y);
      mouse.set(x, y);
    }

    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMouse.copy(prevMouse);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [containerRef, imageRef]);
}
