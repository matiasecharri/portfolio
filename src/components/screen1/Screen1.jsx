import React, { Suspense } from "react";
import "./screen1.css";
import { Canvas } from "react-three-fiber";
import { Michael } from "../Michael/Michael";
import { AmbientLight } from "three";
import { OrbitControls, Cloud } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useRef } from "react";
export default function Screen1() {
  const canvasRef = useRef(null);

  return (
    <>
      <header>
        <div className="contenedorMichael">
          
          <Canvas shadows dpr={[1, 2]} camera={{ position: [20, 10, 0] , fov: 80}}>
            {/* <Cloud
              opacity={0.5}
              speed={0.4} // Rotation speed
              width={10} // Width of the full cloud
              depth={1.5} // Z-dir depth
              segments={20} // Number of particles
            /> */}
            <ambientLight intensity={0.2}></ambientLight>
            <pointLight position={[45, 85, 0]} intensity={0.4} />
            <pointLight position={[-35, 35, 0]} intensity={0.4} />
            <Suspense fallback={null}></Suspense>
            <OrbitControls></OrbitControls>
            <Michael speed={0.4}depth={1.5}></Michael>
          </Canvas>
        </div>
        {/* <img  data-aos="fade-down" data-aos-duration="2000" src="https://media.discordapp.net/attachments/763661782555426817/1056550865827283074/ladoizquierdo.png" alt="" srcset=""  />
     <img data-aos="fade-up" data-aos-duration="2500"  src="https://media.discordapp.net/attachments/763661782555426817/1056550866167025695/ladoderecho.png" alt="" srcset="" /> */}
      </header>
      <main>
        <article>
          <h2>Hello, im a full-stack developer based in Buenos Aires.</h2>
        </article>
        <div className="containerMain">
          <div className="titular">
            <h1>Matias Echarri</h1>
            <p>
              Digital Artist (Developer, Designer, UI/UX) <br />
              <span>デジタルアーティスト</span>
            </p>
          </div>
          <div className="aYdibella"></div>
        </div>
        <div className="containerMain2"></div>
      </main>
    </>
  );
}
