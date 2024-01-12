import { Parallax } from "react-parallax";

const Menucover = ({ img, title, paragraph }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menus"
      strength={200}
    >
      <div
        className="hero h-[400px] mb-8"
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl py-5 ">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">{paragraph}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Menucover;
