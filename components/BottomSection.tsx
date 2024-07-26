import { SparklesCore } from "./ui/Sparkles";
import CTAButtons from "./CTAButtons";

const BottomSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-36 flex flex-col items-center relative h-screen bg-black">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="flex flex-col px-4 sm:px-8 md:max-w-2xl mx-auto mb-20 items-center">
        <div className="text-center mb-10 max-w-md md:max-w-lg">
          <h2 className="text-5xl font-bold mb-3.5 text-balance">
            Everyone is now a cloud engineer.
          </h2>
          <p>
            Use native TypeScript APIs everywhere, instead of integrating cloud
            boilerplate, so you can finally focus on writing business logic.
          </p>
        </div>
        <CTAButtons />
      </div>

      <div className="absolute bottom-4 w-full flex justify-center items-center">
        <p className="text-white">&copy; Freestyle {currentYear}</p>
      </div>
    </div>
  );
};

export default BottomSection;
