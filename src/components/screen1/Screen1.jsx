import React, { Suspense } from "react";
import "./screen1.css";
import { Canvas } from "react-three-fiber";
import { Michael } from "../Michael/Michael";
import { AmbientLight } from "three";
import {OrbitControls} from "@react-three/drei"

export default function Screen1() {
  return (
    <>
      <header>
        <div style= {{width: "100%", height: "30vh"}}>
        <Canvas>
         <ambientLight intensity={0.20}></ambientLight>
         <pointLight position={[35,35,0]} intensity={0.4}/>
         <pointLight position={[-35,35,0]} intensity={0.4}/>
         <Suspense fallback={null}></Suspense>
         <OrbitControls></OrbitControls>
          <Michael></Michael>
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
