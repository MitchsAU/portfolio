// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost/profportfolio/wp-json/wp/v2/posts")
//       .then(res => res.json())
//       .then(data => setPosts(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="post-container">
//       <h1>Projects</h1>
//       {posts.map(post => (
//         <article key={post.id}>
//            {post.acf?.project_title && (
//             <h2>{post.acf.project_title}</h2>
//           )}
//           <p>{post.acf?.project_description}</p>
//            {post.acf?.project_image && (
//           <img 
//             src={post.acf.project_image} 
//             alt={post.acf.project_image.alt || "Project image"} 
//             className="project-image"
//     />
//   )}
//         </article>
//       ))}
//     </div>
//   );
// }

// export default App;

// import React, { useRef, useMemo, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import * as THREE from "three";

// // --- Particle System with Circular Points ---
// function ParticleNetwork() {
//   const pointsRef = useRef();
//   const lineRef = useRef();
//   const { camera, mouse } = useThree();
//   const [cursor] = useState(() => new THREE.Vector3());

//   // Create circle texture for points
//   const particleTexture = useMemo(() => {
//     const size = 64;
//     const canvas = document.createElement("canvas");
//     canvas.width = size;
//     canvas.height = size;
//     const ctx = canvas.getContext("2d");
//     ctx.fillStyle = "#ffffff";
//     ctx.beginPath();
//     ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
//     ctx.fill();
//     const texture = new THREE.Texture(canvas);
//     texture.needsUpdate = true;
//     return texture;
//   }, []);

//   // Particle positions & velocities
//   const { positions, velocities } = useMemo(() => {
//     const positions = new Float32Array(300 * 3);
//     const velocities = new Float32Array(300 * 3);

//     for (let i = 0; i < 300; i++) {
//       positions[i * 3] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

//       velocities[i * 3] = (Math.random() - 0.5) * 0.008;
//       velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.008;
//       velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008;
//     }

//     return { positions, velocities };
//   }, []);

//   useFrame(() => {
//     const pos = pointsRef.current.geometry.attributes.position.array;

//     cursor.set(mouse.x, mouse.y, 0.5).unproject(camera);

//     // Move particles
//     for (let i = 0; i < pos.length; i += 3) {
//       pos[i] += velocities[i];
//       pos[i + 1] += velocities[i + 1];
//       pos[i + 2] += velocities[i + 2];

//       // Wrap
//       for (let j = 0; j < 3; j++) {
//         if (pos[i + j] > 5) pos[i + j] = -5;
//         if (pos[i + j] < -5) pos[i + j] = 5;
//       }
//     }
//     pointsRef.current.geometry.attributes.position.needsUpdate = true;

//     // Build lines
//     const threshold = 1.0;
//     const cursorThreshold = 1.5;
//     const linePositions = [];

//     for (let i = 0; i < pos.length; i += 3) {
//       const ax = pos[i],
//         ay = pos[i + 1],
//         az = pos[i + 2];

//       for (let j = i + 3; j < pos.length; j += 3) {
//         const bx = pos[j],
//           by = pos[j + 1],
//           bz = pos[j + 2];
//         if (Math.sqrt((ax - bx) ** 2 + (ay - by) ** 2 + (az - bz) ** 2) < threshold) {
//           linePositions.push(ax, ay, az, bx, by, bz);
//         }
//       }

//       // Connect to cursor
//       if (cursor.distanceTo(new THREE.Vector3(ax, ay, az)) < cursorThreshold) {
//         linePositions.push(ax, ay, az, cursor.x, cursor.y, cursor.z);
//       }
//     }

//     lineRef.current.geometry.setAttribute(
//       "position",
//       new THREE.Float32BufferAttribute(linePositions, 3)
//     );
//   });

//   return (
//     <>
//       <points ref={pointsRef}>
//         <bufferGeometry>
//           <bufferAttribute
//             attach="attributes-position"
//             count={positions.length / 3}
//             array={positions}
//             itemSize={3}
//           />
//         </bufferGeometry>
//         <pointsMaterial
//           map={particleTexture}
//           size={0.05}
//           sizeAttenuation
//           alphaTest={0.5}
//           transparent
//           color="#00ffff"
//         />
//       </points>

//       <lineSegments ref={lineRef}>
//         <bufferGeometry />
//         <lineBasicMaterial color="#00ffff" transparent opacity={0.3} />
//       </lineSegments>
//     </>
//   );
// }

// // --- Main App ---
// export default function App() {
//   return (
//     <div className="w-screen h-screen relative">
//       <Canvas
//         camera={{ position: [0, 0, 7] }}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           background: "black",
//         }}
//       >
//         <ambientLight intensity={0.5} />
//         <ParticleNetwork />
//       </Canvas>

//       {/* Hero Text */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pointer-events-none">
//         <h1 className="text-6xl font-bold">Mitchell Skelton</h1>
//         <p className="text-xl mt-4">UX/UI Designer & Web Developer</p>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react/no-unknown-property */


'use client';

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import ProjectPage from './projectPage';
import CaseStudyPage from "./casestudiesContent"
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className='carouselContainer'>
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

