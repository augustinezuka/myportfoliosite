"use client";
import React from "react";

const About = () => {
  return (
    <section className="h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-blue-500 h-full px-4">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-black mb-6">About Me</h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            I am{" "}
            <span className="text-blue-600 font-semibold">Augustine Zuka</span>,
            a passionate front-end developer based in Harare. I specialize in
            creating beautiful and responsive web applications using the latest
            technologies.
          </p>

          <div className="flex flex-col md:flex-row md:justify-between mb-10 w-full">
            <div className="bg-white mx-2 shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 md:w-1/3">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                My Skills
              </h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>HTML, CSS, and Tailwind CSS</li>
                <li>JavaScript and React</li>
                <li>Responsive design and web accessibility</li>
                <li>Basic knowledge of Git and GitHub</li>
              </ul>
            </div>

            <div className="bg-white mx-2 shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 md:w-1/3">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                My Background
              </h2>
              <p className="text-gray-600 mb-4">
                I have a strong foundation in front-end development, having
                learned primarily through online resources such as YouTube. My
                goal is to transition into full-stack development to create more
                dynamic and powerful applications.
              </p>
            </div>

            <div className="bg-white mx-2 shadow-lg rounded-lg p-6 mb-6 md:mb-0 flex-1 md:w-1/3">
              <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                Interests
              </h2>
              <p className="text-gray-600 mb-4">
                Outside of coding, I enjoy gaming and football (soccer), which
                inspire my creative thinking and problem-solving skills.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-blue-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            Feel free to reach out to me via email at{" "}
            <a
              href="mailto:augustinezuka@gmail.com"
              className="text-blue-500 hover:underline"
            >
              augustinezuka@gmail.com
            </a>{" "}
            or connect with me on social media!
          </p>

          <div className="flex justify-center flex-wrap">
            <a
              href="https://zw.linkedin.com/in/augustine-zuka-9768ab32b"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-300 mx-2 mb-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/augustinezuka"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-300 mx-2 mb-2"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
