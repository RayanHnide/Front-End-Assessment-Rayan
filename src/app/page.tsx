 import NavBar from "./components/NavBar";
import FlashSales from "./sections/Flash Sales";
  import Hero from "./sections/Hero";
  import Category from "./sections/Category";
  import Products from "./sections/Products";
import Banner from "./sections/Banner";
import ExploreProducts from "./sections/ExploreProducts";
import NewArrival from "./sections/New Arrival";
import Footer from "./components/Footer";
import FirstNav from "./components/FirstNav";
export default function Home() {
  return (
     <>
     <FirstNav />
     <NavBar />
     <Hero />
     <FlashSales />
     <Category />
     <Products />
     <Banner />
     <ExploreProducts />
     <NewArrival />
     <Footer />
  

    

     </>
  );
}
