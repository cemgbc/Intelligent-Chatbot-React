import React from "react";
import Chatbot from "react-chatbot-kit";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Config from "./Config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import "./app.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <h1>
            Simple chatbot made by{" "}
            <span style={{ color: "red" }}>Cem Göbüç chatbot project</span>
          </h1>
        </div>
        <div className="container">
          <h4>1. For find your enrollment no. in gtu enter enrollment no.</h4>
          <h5>fill form and submit your responce </h5>
        </div>
        <div className="container">
          <h4>2. Want to know about web development type web development</h4>
        </div>
        <div className="container">
          <h4>
            3. Want to know about software development type software development
          </h4>
        </div>
        <div className="container">
          <h4>
            4. Want to know about weather of your city and other cities type weather
          </h4>
        </div>
        <div className="container">
          <h4>
            5. Want to know about Mobil development type mobile application
          </h4>
        </div>
        <div className="container">
          <h4>
            6. Want to know about Lecturer List for software Lessons.
          </h4>
        </div>
        <div className="App mx-auto col-md-6 col-sm-8 col-lg-4 cpl-xl-3 my-5">
          <Chatbot
            config={Config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </div>
    </>
  );
}

export default App;
