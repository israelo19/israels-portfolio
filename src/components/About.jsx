import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-black flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-left pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 bg-black ">
                {/* About Me! */}
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid lg:grid-cols-2 gap-8 px-10">
            <div className="sm:text-left text-6xl font-bold">
              <p>
                <code>Hey! I'm Israel👋🏿</code>
              </p>
            </div>
            <div>
              <p>
                {" "}
                I'm a Computer Science Major at the University of Maryland,
                College Park. I'm a current Sophomore, Class of 2027. I have
                experience in
                <span className="text-green-300">
                  <code> cybersecurity</code>
                </span>
                 ,
                <span className="text-green-500">
                  <code> software engineering</code>
                </span> and{" "}
                <span className="text-green-300">
                  <code>project management!</code>
                </span>
                 {" "}Check out my experience and projects!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
