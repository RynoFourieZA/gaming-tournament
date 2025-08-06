import EventDetails from "./EventDetails";
import FaqSection from "./FaqSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Leaderboard from "./Leaderboard";
import Navbar from "./Navbar";
import RegisterForm from "./RegisterForm";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <EventDetails />
      <RegisterForm />
      <Leaderboard />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Home;
