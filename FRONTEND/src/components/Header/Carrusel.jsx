import { useState } from "react";
import { Flecha_Der_icon, Flecha_Izq_icon } from "../../assets/Icons";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex == 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex justify-center m-6 ">
      <div className="mr-2">
        <img
          className="w-56 h-28 rounded-md mt-5"
          src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-fashion-sale-promotion-banner-template-picture-image_1221849.jpg"
          alt=""
        />
        <img
          className="w-56 h-20 rounded-md mt-1"
          src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-up-to-50-off-modern-background-limited-time-picture-image_1233031.jpg"
          alt=""
        />
        <img
          className="w-56 h-20 rounded-md mt-1"
          src="https://www.modaes.com/files/2020/20_recursos/black-friday-recurso-escaparate-728.jpg"
          alt=""
        />
      </div>

      <div className="relative w-[50%] ml-2  mr-2">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#fff6] text-[#673] px-4 py-2 rounded-full"
        >
          <Flecha_Izq_icon />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-[#fff6] text-[#673] px-4 py-2 rounded-full"
        >
          <Flecha_Der_icon />
        </button>
      </div>
      <div className="ml-2">
        <img
          className="w-56 h-28 rounded-md mt-5"
          src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-fashion-sale-promotion-banner-template-picture-image_1221849.jpg"
          alt=""
        />
        <img
          className="w-56 h-20 rounded-md mt-1"
          src="https://png.pngtree.com/background/20210714/original/pngtree-black-friday-sale-up-to-50-off-modern-background-limited-time-picture-image_1233031.jpg"
          alt=""
        />
        <img
          className="w-56 h-20 rounded-md mt-1"
          src="https://www.modaes.com/files/2020/20_recursos/black-friday-recurso-escaparate-728.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
