"use client";

export default function Mid() {
  return (
    <section className="bg-gray-100 py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-blue-500 opacity-10" />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold text-black mb-4 ">
          Hi, I&apos;m Augustine Zuka
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          A passionate front-end developer skilled in building responsive web
          and mobile applications using HTML, CSS, JavaScript, React, Next.js,
          and React Native.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "HTML",
              description:
                "Creating structured and semantic markup for websites.",
              icon: "📄",
            },
            {
              title: "CSS & Tailwind",
              description: "Styling websites with modern, responsive designs.",
              icon: "🎨",
            },
            {
              title: "JavaScript",
              description:
                "Adding interactivity and building dynamic user interfaces.",
              icon: "⚡",
            },
            {
              title: "React",
              description:
                "Building reusable UI components for web applications.",
              icon: "🔄",
            },
            {
              title: "Next.js",
              description:
                "Optimizing web apps with server-side rendering and static site generation.",
              icon: "🚀",
            },
            {
              title: "React Native",
              description:
                "Creating cross-platform mobile applications with a native look and feel.",
              icon: "📱",
            },
            {
              title: "Version Control",
              description:
                "Using Git and GitHub for efficient collaboration and project management.",
              icon: "🔧",
            },
            {
              title: "Responsive Design",
              description: "Ensuring a seamless experience across all devices.",
              icon: "📐",
            },
          ].map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="text-4xl mb-2">{icon}</div>
              <h3 className="text-xl font-semibold text-red-600">{title}</h3>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>

        <a
          href="/projects"
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition duration-300 transform hover:scale-105"
        >
          View My Projects
        </a>
      </div>
    </section>
  );
}
