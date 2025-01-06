import Banner from '../components/Banner';
import BannerHome from '../assets/BannerHome.png';
import CardList from '../components/CardList';

function Home() {
  return (
    <div>
      <Banner image={BannerHome} text="Chez vous, partout et ailleurs" />
      <CardList />
    </div>
  );
};

export default Home;
