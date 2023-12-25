import Image from "next/image";

const Information = () => {
  return (
    <>
      <div className="relative h-96 flex flex-col">
        <h1 className="px-8 text-4xl tracking-tight font-extrabold text-center text-white">24/7 Service</h1>
        <p className="mb-8 px-8 mt-5 font-light text-center text-gray-200 sm:text-xl">
          Lights gone out at 8pm? <br></br>
          We&lsquo;ve got you covered, any day, any time!
        </p>
        <div id="van" className="relative h-96">
          <Image
            src="/assets/images/ford-transit-20rrrlogo19.png"
            alt="van"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Information;
