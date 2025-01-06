import Banner from "../components/Banner";
import BannerAbout from '../assets/BannerAbout.png';
import Collapse from "../components/Collapse";

function About() {
  return (
    <div>
      <Banner image={BannerAbout} />
      <Collapse title="Fiabilité">
        <p>
          Les anonces postées sur Kasa garntissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les 
          informations sont régulièrement vérifiées par nos équipes.
        </p>
      </Collapse>
      <Collapse title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. 
          Tous comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.
        </p>
      </Collapse>
      <Collapse title="Service">
        <p>
          La qualité du service est au coeur de notre engagement chez Kasa. 
          Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillace.
        </p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécuruté établis par nos services.
          En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>
    </div>
  );
};

export default About;
