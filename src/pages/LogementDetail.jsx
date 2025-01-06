import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';

function LogementDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const logement = logements.find((item) => item.id === id);

    useEffect(() => {
        if (!logement) {
            navigate('/404');  // Redirect to 404 page if logement not found
        }
    }, [logement, navigate]);
    
    // Wait for redirect to avoid errors
    if (!logement) {
        return null;
    }

    return (
        <div className='logement-detail'>
            <Carousel pictures={logement.pictures} />
            <h1>{logement.title}</h1>
        </div>
    );
}

export default LogementDetail;
