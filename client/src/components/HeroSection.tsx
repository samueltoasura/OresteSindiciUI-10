import heroImage from "@assets/generated_images/Educational_campus_hero_image_e8317a83.png";

export default function HeroSection() {
  return (
    <section className="relative h-[280px] md:h-[320px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>
      
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Tu futuro empieza aquí
          </h2>
          <p className="text-base md:text-lg text-white/95 font-medium drop-shadow-md">
            Institución Educativa Oreste Sindici
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-3 flex">
        <div className="flex-1 bg-black opacity-60" />
        <div className="flex-1 bg-destructive opacity-90" />
        <div className="flex-1 bg-chart-4 opacity-90" />
        <div className="flex-1 bg-chart-1 opacity-90" />
        <div className="flex-1 bg-chart-3 opacity-90" />
        <div className="flex-1 bg-chart-2 opacity-90" />
      </div>
    </section>
  );
}
