import React from "react";
import "./screen1.css";

export default function Screen1() {
  return (
    <>
     <header >
     <img src="https://media.discordapp.net/attachments/763661782555426817/1056550865827283074/ladoizquierdo.png" alt="" srcset=""  />
     <img src="https://media.discordapp.net/attachments/763661782555426817/1056550866167025695/ladoderecho.png" alt="" srcset="" />
      </header>
      <main>
        
        <article data-aos="fade-up">
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
      </main>
    </>
  );
}