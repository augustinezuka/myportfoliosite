"use client"; 
import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-green-100 to-blue-100  py-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-black mb-6">About Me</h1>
        <p className="text-lg text-gray-700 mb-8">
          I am Augustine Zuka, a passionate front-end developer based in Harare.
          I specialize in creating beautiful and responsive web applications
          using the latest technologies.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-4">My Skills</h2>
        <p className="text-gray-600 mb-6">I am proficient in:</p>
        <ul className="list-disc list-inside text-gray-600 mb-8">
          <li>HTML, CSS, and Tailwind CSS</li>
          <li>JavaScript and React</li>
          <li>Responsive design and web accessibility</li>
          <li>Basic knowledge of Git and GitHub</li>
        </ul>

        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          My Background
        </h2>
        <p className="text-gray-600 mb-8">
          I have a strong foundation in front-end development, having learned
          primarily through online resources such as YouTube. My goal is to
          transition into full-stack development to create more dynamic and
          powerful applications.
        </p>

        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Interests</h2>
        <p className="text-gray-600 mb-8">
          Outside of coding, I enjoy gaming and football (soccer), which inspire
          my creative thinking and problem-solving skills.
        </p>

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
      </div>
    </div>
  );
};

export default About;
