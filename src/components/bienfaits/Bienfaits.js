import { useState } from "react";
import "./Bienfaits.css";
const Bienfaits = () => {
  const [index, setIndex] = useState(0);
  const Bienfaits = [
    {
      index: 0,
      text: "Prévient et réduit les troubles Musculo-Squelettiques",
    },
    {
      index: 1,
      text: "Réduit les effets du stress, la fatigue, les tensions",
    },
    {
      index: 2,
      text: "Procure une détente physico-mentale",
    },
    {
      index: 3,
      text: "Favorise le bien-être collectif et individuel",
    },
    {
      index: 4,
      text: "Améliore la relation employeur & collaborateurs",
    },

    {
      index: 5,
      text: "Pérennise la performance et le bien-être au travail",
    },
    {
      index: 6,
      text: "Dynamise, favorise l’échange, l’ouverture et la créativité",
    },
  ];

  const AddFunct = () => {
      if(index == 6 ) setIndex(0);
      else setIndex(index + 1);

      var div = document.getElementsByClassName("cardactive");
       
  };
  const SusFunct = () => {
    if(index == 0 ) setIndex(6);
    else setIndex(index + 1);
  };
  return (
    <div className="bienfaits">
      <button onClick={SusFunct}>previous</button>
      <div className="cards">
        <div className="cardprec">{Bienfaits[index ].text}</div>
        <div className="cardactive">{Bienfaits[(index + 1)%7].text}</div>
        <div className="cardsuiv">{Bienfaits[(index + 2)%7].text}</div>
      </div>
      <button onClick={AddFunct}>next</button>
    </div>
  );
};

export default Bienfaits;
