import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";


const Deployement = () => {
  const words = [
    {
      text: "Deploy",
    },
    {
      text: "your",
    },
    {
      text: "entire",
    },
    {
      text: "stack",
    },
    {
      text: "in",
    },
    {
      text: "1",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "command",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="py-36 dark:bg-black border-b border-t">
      <div className="flex flex-col md:max-w-2xl px-4 sm:px-8 mx-auto justify-center items-center">
        <div className="text-center mb-10">
          <TypewriterEffectSmooth words={words} />
          <p className="mt-4">All pure TypeScript. No config needed.</p>
        </div>
        <div className="w-full">
          <div className="w-full">
            <div className="coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased  bg-slate-900  pb-6 rounded-lg leading-normal overflow-hidden">
              <div className="top mb-2 flex">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="mt-4 flex">
                <span className="text-green-400">computer:~$</span>
                <p className="flex-1 typing items-center pl-2">
                  npx freestyle deploy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deployement;
