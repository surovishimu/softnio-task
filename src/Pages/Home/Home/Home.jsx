import Banner from "../Banner/Banner";
import Booking from "../Booking/Booking";
import Details from "../Details/Details";
import PopularItem from "../PopulatItem/PopularItems";
import Review from "../review/Review";

const Home = () => {
  return (
    <div>
      <Banner />
      <Details />
      <PopularItem />
      <Booking />
      <Review/>
    </div>
  );
};

export default Home;
