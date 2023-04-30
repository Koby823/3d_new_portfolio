import { Controls, Player } from "@lottiefiles/react-lottie-player";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="h-screen text-white snap-center flex flex-col">
      <Navbar />
      <div className="h-screen w-5/6 flex justify-center items-center m-auto">
        <div className="flex-[2] flex-col justify-center" id="left">
          <div className="">
            {/* hyperplexed text flipping video */}
            <h3 className="text-4xl">
              Hello, It's{" "}
              <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Me
              </span>
            </h3>
            <h1 className="text-6xl m-2">
              <span className="text-cyan-500"> Koby </span> Brown
            </h1>
            <h3 className="text-4xl mt-3">
              And I'm a{" "}
              <span className="text-cyan-500">Frontend Developer</span>
            </h3>
            <p className="mt-3">
              Experienced Software Developer adept in bringing forth expertise
              in design, installation, testing and maintenance of software
              systems.
            </p>
            <div className="inline-flex">
              <a
                href="https://github.com/Koby823"
                target="_blank"
                rel="noreferrer"
              >
                <Player
                  autoplay
                  loop
                  src="src\assets\github-icon.json"
                  style={{ height: "60px", width: "60px", color: "#0077b5" }}
                >
                  <Controls buttons={["play", "repeat", "frame", "debug"]} />
                </Player>
              </a>
              <a
                href="https://www.linkedin.com/in/kobybrown/"
                target="_blank"
                rel="noreferrer"
              >
                <Player
                  autoplay
                  loop
                  src="src\assets\linkedin.json"
                  style={{ height: "55px", width: "55px" }}
                >
                  <Controls buttons={["play", "repeat", "frame", "debug"]} />
                </Player>
              </a>
            </div>
            {/* <Player
              autoplay
              loop
              src="src\assets\coding.json"
              style={{ height: "250px", width: "250px" }}
            >
              <Controls buttons={["play", "repeat", "frame", "debug"]} />
            </Player> */}
          </div>
        </div>
        <div className="flex-[1]" id="right ">
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

export default Hero;
