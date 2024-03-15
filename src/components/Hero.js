import WomanImg from '../assets/img/banner-woman2.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover
                lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/** left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <p className="text-lg text-accent mb-[22px]">
              Hello, I&apos;m Minh &#x1F44B;
            </p>
            <h1
              className="text-4xl leading-[44px]
                          md:text-5xl md:leading-[1.2] font-bold
                          md:tracking-[-2px]"
            >
              <div className="hidden lg:block">
                I Build & Develop <br /> Your App Ideas.
              </div>
              <div className="lg:hidden text-center">
                <p>I Build & Develop</p>
                <p>Your App Ideas.</p>
              </div>
            </h1>
            <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              I am an experienced programmer in various popular technologies and
              frameworks. My portfolio is where you can explore the projects
              I&apos;ve completed and my skills in web development.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all">
              Work with me
            </button>
          </div>
          {/** right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={WomanImg} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
