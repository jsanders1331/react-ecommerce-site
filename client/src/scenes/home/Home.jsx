import MainCarousel from "./MainCarousel";
import Item from "../../components/Item";
import ShoppingList from "../home/ShoppingList";
import Subscribe from "./Subscribe";
const Home = () => {
  return (
    <div className="home">
      {" "}
      <MainCarousel></MainCarousel>
      <ShoppingList />
      <Subscribe />
    </div>
  );
};

export default Home;
