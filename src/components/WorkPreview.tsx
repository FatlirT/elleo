'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    alt: "prn",
    src: "/assets/images/prn.jpg",
  },
  {
    alt: "kos",
    src: "/assets/images/20190818_182504.jpg",
  },
  {
    alt: "99names",
    src: "/assets/images/99 Names Of Allah.png",
  },
];

const WorkPreview = () => {

  const [imageIndex, setImageIndex] = useState(0);


  const toImage = (index: number) => {
    if (imageIndex != index) setImageIndex(index);
  };

  const nextImage = () => {
    if (imageIndex === images.length - 1) setImageIndex(0);
    else setImageIndex(imageIndex + 1);
  };

  const previousImage = () => {
    if (imageIndex === 0) setImageIndex(images.length - 1);
    else setImageIndex(imageIndex - 1);
  };


  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [imageIndex]);

  return (
    <>
      <div
        id="carousel"
        className="relative w-full mb-9"
      >

        <div id="carousel-content" className="relative h-56 overflow-hidden md:h-96 py-64">
          <div className="duration-700 ease-in-out" data-carousel-item>
            {/* <Image
              src={images[imageIndex].src}
              alt={images[imageIndex].alt}
              fill
              className="absolute block w-full object-cover"
              key={images[imageIndex].alt}
            /> */}
            <h1 className="text-center text-white"> Content is not available </h1>
          </div>
        </div>



        <div id="carousel-dots" className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          {images.map((image, index) => (
            <button onClick={() => toImage(index)} key={image.alt} className={`w-3 h-3 rounded-full bg-white hover:bg-opacity-100 ${imageIndex === index ? "bg-opacity-100" : "bg-opacity-60"}`} ></button>
          ))}
        </div>

        <button
          id="carousel-previous-button"
          onClick={previousImage}
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/60 group-focus:ring-4 group-focus:ring-white/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>


        <button
          id="carousel-next-button"
          onClick={nextImage}
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/60 group-focus:ring-4 group-focus:ring-white/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
};

export default WorkPreview;
