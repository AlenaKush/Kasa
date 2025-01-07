import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import Collapse from "../components/Collapse";
import Tags from '../components/Tags';


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
        <div>
            <Carousel pictures={logement.pictures} />
            <div className='logement-detail'>
                <div>
                    <h1 className='logement-detail_name'>{logement.title}</h1>
                    <p className='logement-detail_location'>{logement.location}</p>
                    <Tags tags={logement.tags} />
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                </div>
                <div>
                    <div>
                        <p className='logement-detail_host-name'>{logement.host.name}</p>
                        <div className='logement-detail_host-photo' style={{ backgroundImage: `url(${logement.host.picture})` }}>Photo</div>
                    </div>
                    <div>
                        <p>here will be the rate</p>
                        <Collapse title="Équipements">
                            <p>{logement.equipments}</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogementDetail;
