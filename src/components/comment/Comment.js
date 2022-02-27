import "./Comment.css";
import materiel from "../../media/materiel.jpg";
import banner from "../../media/bannerS.jpg";
import second from "../../media/secondS.jpg";
import stress from "../../media/stress.jpg";
const Comment = () => {
  return (
    <div className="comment">
      <h1 className="what">Déroulement d’une séance</h1>

      <h3 className="what2">
        Définir un groupe de personnes par service ou à la demande
      </h3>
      <div className="content">
        <div>
          <p>
            <b>Le Amma assis</b> se pratique sur une personne habillée, sur une
            chaise ergonomique adaptée aux entreprises.
          </p>
          <img src={materiel} className="image" alt="" />
        </div>
        <div>
          <p>
            on vous propose Une séance, de seulement 20 minutes,qui va vous
            permettre de ressentir un soulagement rapide des douleurs liées aux
            positions du poste et aux mouvements répétitifs
          </p>
          <img src={second} className="image" alt="" />
        </div>
        <div>
          <p>
            Cette technique permet d’agir de manière préventive, afin d’éviter
            certains problèmes physiques de s’installer (tendinites, maux de
            tête, maux de dos ou syndromes du canal carpien), ce qui s’appelle
            T.M.S. (Troubles MusculoSquelettiques)
          </p>
          <img src={stress} className="image" alt="" />
        </div>
      </div> 
      </div>
  );
};

export default Comment;
