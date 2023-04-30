const About = () => {
  return (
    <div className="h-screen text-white snap-center flex">
      <div className="h-screen w-5/6 flex justify-center items-center m-auto">
        <div className="flex flex-col justify-center text-center" id="left">
          <div className="">
            {/* hyperplexed text flipping video */}
            <h1 className="text-7xl">Who I Am!</h1>
          </div>
          <div className="py-5">
            <p>
              Experienced Software Developer adept in bringing forth expertise
              in design, installation, testing and maintenance of software
              systems.
            </p>
          </div>
        </div>
        <div className="flex" id="right ">
          <img
            className=" justify-center w-96 relative m-auto animate-animate-image"
            src="src\assets\hacker.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
