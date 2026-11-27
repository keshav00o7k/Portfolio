import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight, mouse-reactive 3D wireframe icosahedron accent for the hero.
 * Uses the active theme's base accent color with zero neon or gradient effects.
 */
const HeroCanvas = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = container.clientWidth || 160;
    const height = container.clientHeight || 160;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 3.6;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const getAccentColor = () => {
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue('--global-base-color')
        .trim();
      return val || '#2f7f93';
    };

    const geometry = new THREE.IcosahedronGeometry(1.15, 1);
    const wireframe = new THREE.WireframeGeometry(geometry);
    const material = new THREE.LineBasicMaterial({
      color: new THREE.Color(getAccentColor()),
      transparent: true,
      opacity: 0.42,
    });
    const mesh = new THREE.LineSegments(wireframe, material);
    scene.add(mesh);

    let targetX = 0;
    let targetY = 0;
    let animationId = 0;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      targetX = ny * 0.35;
      targetY = nx * 0.35;
    };

    const observer = new MutationObserver(() => {
      material.color.set(getAccentColor());
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 160;
      const h = container.clientHeight || 160;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    if (!prefersReducedMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    const animate = () => {
      if (!prefersReducedMotion) {
        mesh.rotation.y += 0.004 + (targetY - mesh.rotation.y) * 0.02;
        mesh.rotation.x += 0.002 + (targetX - mesh.rotation.x) * 0.02;
      }
      renderer.render(scene, camera);
      if (!prefersReducedMotion) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      geometry.dispose();
      wireframe.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{
        width: '165px',
        height: '165px',
        flexShrink: 0,
      }}
    />
  );
};

export default HeroCanvas;

