import { useState } from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";

function App() {

  const [flag, setFlag] = useState('Home');

  return (
    <div className="app">
      <a className="skiplink" href="/Main" aria-label="click and go into main">Skip to Content</a>
      <Header setLink={setFlag}/>
      <Main link={flag} setLink={setFlag}/>
      <Footer/>
    </div>
  );
}

export default App;
