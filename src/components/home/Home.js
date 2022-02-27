import homepic from "../../media/home.svg";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="textcontainer">
        <h1>"Booster l’engagement de vos employés"</h1>
        <p className="definition">Massage en entreprise 'Amma assis' est le meilleur outil pour la gestion du stress au travail et de prévention des risques psycho-sociaux </p>
        <a classname="rendev" href="#contact" >Schedule a massage.</a>
      </div>
      <img className="homebackground" src={homepic} alt="home" />
      
    </div>
  );
};

export default Home;
