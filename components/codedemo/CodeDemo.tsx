import { BackgroundBoxes } from "../ui/BackgroundBoxes";
import CodeTabs from "./CodeTabs";
import { apiCodeSnippets, infrastructureCodeSnippet } from "@/lib/constants";

const CodeDemo = () => {
  return (
    <BackgroundBoxes>
      <div className="px-8 py-12 flex flex-wrap justify-center max-w-[800px] gap-8">
        {/* APIs Section */}
        <div className="">
          <h1 className="text-4xl font-bold my-4">Use APIs you already know</h1>
          <p>
            Rather than adding new opinionated APIs for functionality like
            persistence, streaming, and blob storage, Freestyle leverages the
            APIs already built into ECMAScript standards.
          </p>
          <div className="my-4">
            <CodeTabs data={apiCodeSnippets} />
          </div>
        </div>

        {/* Infrastructure Section */}
        <div className="">
          <h1 className="text-4xl font-bold my-4">Own your infrastructure</h1>
          <p>
            Freestyle is built to encourage open source collaboration. Rather
            than relying on external services for things like authentication,
            Freestyle provides a foundation that full stack packages can be
            built on top of.
          </p>
          <div className="my-4">
            <CodeTabs data={infrastructureCodeSnippet} />
          </div>
        </div>
      </div>
    </BackgroundBoxes>
  );
};

export default CodeDemo;
