
import { Meteors } from "./ui/BackgroundBeams";
import { Highlight } from "./ui/TextHighlight";
import CTAButtons from "./CTAButtons";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col  gap-6 justify-center md:h-screen pb-16 border-b overflow-hidden dark:bg-black text-white">
      <div className="hidden md:flex justify-center">
        <Meteors />
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        {/* TODO:: Add typescript color in tailwind.config.js */}
        <h1 className="text-4xl sm:text-6xl text-center font-bold mt-16 md:mt-4">
          The{" "}
          <span className=" p-2  !text-white rounded-xl ">
            <Highlight className="text-black dark:text-white">
              Typescript
            </Highlight>
          </span>{" "}
          native cloud.
        </h1>
        <h4 className="text-center font-medium text-xl max-w-96 ">
          Replace Express, Mongo, Postgres, Kafka, S3, Socket.io, Auth0 and more
          with standard APIs already built into TypeScript.
        </h4>
      </div>
      <CTAButtons/>
    </div>
  );
};

export default HeroSection;
