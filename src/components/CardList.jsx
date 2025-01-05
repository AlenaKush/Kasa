import Card from './Card';
import logements from '../data/logements.json';

function CardList() {
    return (
        <div className='cards-list'>
            {logements.map((item) => (
                <Card key={item.id} title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default CardList