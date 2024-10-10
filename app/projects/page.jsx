"use client";
import Link from "next/link";
import React, { useState } from "react";

const Projects = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <section className="min-h-screen inset-0 bg-gradient-to-r from-green-300 to-blue-200 py-16 px-4 h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-blue-200 h-full" />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-black mb-4">My Projects</h2>
        <p className="text-lg text-gray-600 mb-8">
          Explore some of the projects I&apos;ve worked on, showcasing my skills
          in front-end development and web/mobile apps.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-4xl mb-2">💼</div>
            <h3 className="text-xl font-semibold text-blue-600">
              Responsive Portfolio
            </h3>
            <p className="text-gray-600 mt-2">
              A personal portfolio website to showcase projects, built with
              Next.js and Tailwind.
            </p>
            <Link
              href="/"
              className="text-red-600 mt-4 inline-block hover:underline"
            >
              View Project
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105">
            <div className="text-4xl mb-2">📱</div>
            <h3 className="text-xl font-semibold text-blue-600">A Umbiro</h3>
            <p className="text-gray-600 mt-2">
              I made a landing site for digital nyika
            </p>
            <Link
              href="https//www.umbiro.com"
              className="text-red-600 mt-4 inline-block hover:underline"
              target="_blank"
            >
              View Project
            </Link>
          </div>
        </div>
        <button
          aria-label="Contact Me"
          type="button"
          onClick={handleOpenModal}
          className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-green-500 transition duration-300 transform hover:scale-105"
        >
          Contact Me
        </button>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-11/12 md:w-1/3">
              <h2 className="text-2xl font-bold text-black mb-4">
                Contact Information
              </h2>
              <a
                href="mailto:augustinezuka@gmail.com"
                className="text-gray-700 mb-2"
              >
                Email: augustinezuka@gmail.com
              </a>
              <p className="text-gray-700 mb-2">Phone: +263786831708</p>
              <button
                onClick={handleCloseModal}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
