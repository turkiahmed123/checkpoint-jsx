import React from "react";
import "./App.css";
import "./style.css";
import imageInSrc from "./imageInSrc.jpg";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div class="first">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">jsx-test</h1>
          <Button variant="primary">Primary</Button>
          <br />
          <img src={imageInSrc} alt="imageInSrc" />
          <br />
          <img src="/imageInPublic.jpg" alt="imageInPublic" />
        </div>
        <video controls width={500.5} height={500.5}>
          <source src="/Little Things That Matter.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
export default App;
