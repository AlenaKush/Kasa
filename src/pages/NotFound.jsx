import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound_404">404</h1>
      <h2 className="notfound_oups">Oups! La page que vous demandez n’existe pas.</h2>
      <Link to="/" className="notfound_link">Retourner sur la page d’accueil</Link>  
    </div>
  );
};


export default NotFound;
