import Image from "next/image";

const BackedBy = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 border-b">
      <h5 className="font-bold text-center">
        Backed By
        <Image
        unoptimized
          src={
            "https://www.freestyle.sh/ycombinator-logo.png?__frsh_c=e5cbaef7225c8361176dfab89dbfc00770f66016"
          }
          alt="#"
          width={100}
          height={100}
          className="w-56 h-16"
        />
      </h5>
    </div>
  );
};

export default BackedBy;
