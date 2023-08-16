import React from "react";
import Header from "./components/Header";
import "./App.css";
import Page from "./components/Page";
import WhatsApp from "./components/WhatsApp";
const App = () => {
  return (
    <div>
      <Header />
      <Page />
      <WhatsApp />
    </div>
  );
};

export default App;
