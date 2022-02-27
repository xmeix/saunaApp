import "./App.css";
import Bienfaits from "./components/bienfaits/Bienfaits";
import Comment from "./components/comment/Comment";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Pourquoi from "./components/pourquoi/Pourquoi";
import Quoi from "./components/Quoi/Quoi";
import logo from "./media/logo.png";
function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="logo">
          <img src={logo} alt="logo" className="logoImage" />
          <p>Ammadyn</p>
          </h1>
        <Navbar />
      </div>
      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="quoi">
          <Quoi />
        </section>
        <section id="comment">
          <Comment />
        </section>
        <section id="pourquoi">
          <Pourquoi />
        </section>
        <section id="bienfaits">
          <Bienfaits />
        </section>
        <section id="tarif">
          <h1>fifth</h1>
        </section>
        <section id="contact">
          <h1>fifth</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
