import heroImageMobile from '../img/dev/hero_mobile.webp';
import heroImagePC from '../img/dev/hero_pc.webp';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-brand-blue p-0">
      <div className="w-full">
        <img
          src={heroImageMobile}
          alt="hero"
          className="w-full h-auto md:hidden"
          fetchPriority="high"
        />
        <img
          src={heroImagePC}
          alt="hero"
          className="w-full h-auto hidden md:block"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}
