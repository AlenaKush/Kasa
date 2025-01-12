import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import Collapse from "../components/Collapse";
import Tags from '../components/Tags';
import Rating from '../components/Rating';


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
            <div>
                <div className='logement'>
                    <div className='logement_container'>
                        <h1 className='logement_name'>{logement.title}</h1>
                        <p className='logement_location'>{logement.location}</p>
                        <Tags tags={logement.tags} />
                    </div>
                    <div className='logement_container host-rate'>
                        <div className='host'>
                            <div className='host_name'>
                                <span>{logement.host.name.split(' ')[0]}</span>
                                <span>{logement.host.name.split(' ')[1]}</span>
                            </div>
                            <div className='host_photo' style={{ backgroundImage: `url(${logement.host.picture})` }}></div>
                        </div>
                        <Rating rating={logement.rating}/>
                    </div>
                </div>
                <div className='logement_collapse'>
                    <Collapse title="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse title="Équipements">
                        {logement.equipments.map( (equipment, index) => {
                            return (
                                <p key={index}>{equipment}</p>
                            )
                        })}
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default LogementDetail;
