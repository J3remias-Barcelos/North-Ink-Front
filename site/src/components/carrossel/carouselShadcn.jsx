import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, Card, CardContent } from '@shadcn/ui';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";
import img from "../../utils/assets/ombro-comprimido.jpg";
import img2 from "../../utils/assets/tatuador-carrossel.jpg"; 
import img3 from "../../utils/assets/tatuador-grid.png"; 

const SHADCNCarousel = () => {
  const images = [img, img2, img3];

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img src={image} alt={`Imagem ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious>
        <FaRegArrowAltCircleLeft className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
      </CarouselPrevious>
      <CarouselNext>
        <FaRegArrowAltCircleRight className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
      </CarouselNext>
    </Carousel>
  );
};

export default SHADCNCarousel;
