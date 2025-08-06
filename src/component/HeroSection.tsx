import { Button } from "@/components/ui/button";
import game from "./assets/game-bg.png";

const HeroSection = () => {
  return (
    <section className="h-screen pt-20 gaming-bg-img">
      <div className="max-w-screen-xl flex justify-between mx-auto px-4 py-8 border-black">
        <div className="flex-1 my-auto">
          <h1 className="text-7xl font-semibold mb-4 text-white text-shadow-lg">
            Legends of Victory: Battle Royale Cup
          </h1>
          <div>
            <p className="text-xl mb-4 text-white/90">
              Compete for glory. Only one can win.
            </p>
          </div>
          <Button className="text-2xl text-white px-6 py-6 border-black border-1 rounded-lg game-bg-4">Register Now</Button>
        </div>
        <div className="flex-1">
          <img src={game} alt="fighting warrior" className="h-[95%]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
