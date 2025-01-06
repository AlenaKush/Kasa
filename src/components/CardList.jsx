import Card from './Card';
import { Link } from 'react-router-dom';
import logements from '../data/logements.json';

function CardList() {
    return (
        <div className='cards-list'>
            {logements.map((item) => (
                <Link to={`/logement/${item.id}`} key={item.id}>
                    <Card title={item.title} cover={item.cover} />
                </Link>
            ))}
        </div>
    );
}

export default CardList