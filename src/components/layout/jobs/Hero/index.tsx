import { HashLink } from "react-router-hash-link";
import bgHero from "../../../../assets/images/jobs/jobs-hero-image.jpeg";

const Hero = () => {
  return (
    <section className="relative w-full h-[96vh]">
      <img
        src={bgHero}
        alt="Hero Background"
        className="w-full h-full brightness-50 saturate-100"
      />
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-10 w-[600px] h-96 flex flex-col items-center gap-y-7 text-white md:w-[730px]">
        <h1 className="text-5xl font-semibold">Work at Flickr</h1>
        <p className="text-2xl font-semibold">
          This is work you will be proud of for the rest of your life.
        </p>
        <HashLink
          smooth
          to="/jobs#openings"
          className="bg-sky-500/90 px-7 py-2 font-semibold rounded"
        >
          View openings
        </HashLink>
      </div>
    </section>
  );
};

export default Hero;
