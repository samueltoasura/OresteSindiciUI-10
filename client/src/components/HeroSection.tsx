import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "@assets/1.jpg";
import image2 from "@assets/2.jpg";
import image3 from "@assets/3.jpg";
import image4 from "@assets/4.jpg";

const slides = [
  { id: 1, image: image1, alt: "Ceremonia institucional con estudiantes" },
  { id: 2, image: image2, alt: "Evento institucional con comunidad" },
  { id: 3, image: image3, alt: "Acto cívico estudiantil" },
  { id: 4, image: image4, alt: "Presentación estudiantil" },
];

export default function HeroSection() {
  return (
    <section className="relative h-[250px] md:h-[300px] overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="h-full"
      >
        <CarouselContent className="h-[250px] md:h-[300px]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative h-full">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious 
          className="left-4 bg-white/80 hover:bg-white border-0"
          data-testid="button-carousel-previous"
        />
        <CarouselNext 
          className="right-4 bg-white/80 hover:bg-white border-0"
          data-testid="button-carousel-next"
        />
      </Carousel>

      <div className="absolute inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div className="text-center max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
            Hacia una educación integral y progresista. Compromiso de todos
          </h2>
          <p className="text-sm md:text-base text-white/95 font-medium drop-shadow-md">
            Institución Educativa Oreste Sindici
          </p>
        </div>
      </div>

    </section>
  );
}
