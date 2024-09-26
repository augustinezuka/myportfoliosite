"use client";
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-400 to-red-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center sm:text-left">
          <h4 className="text-2xl font-bold mb-2 underline">Contact Me</h4>
          <p>
            Email:{" "}
            <a
              href="mailto:augustinezuka@gmail.com"
              className="hover:text-blue-200 transition duration-300"
            >
              augustinezuka@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <span className="hover:text-blue-200 transition duration-300">
              +263 786 831 708
            </span>
          </p>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-bold mb-2 underline">Follow Me</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/augustinezuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 00-2.528 15.617c.4.074.547-.173.547-.384 0-.19-.007-.843-.012-1.5-2.236.485-2.707-1.077-2.707-1.077-.365-.927-.89-1.174-.89-1.174-.727-.497.055-.487.055-.487.804.056 1.225.826 1.225.826.715 1.224 1.874.87 2.332.665.072-.517.28-.87.507-1.07-1.775-.203-3.648-.887-3.648-3.94 0-.87.31-1.582.817-2.143-.082-.203-.354-1.027.078-2.139 0 0 .67-.215 2.2.82A7.579 7.579 0 018 2.879a7.57 7.57 0 012.002.267c1.53-1.035 2.2-.82 2.2-.82.432 1.112.16 1.936.078 2.139.507.561.817 1.273.817 2.143 0 3.063-1.877 3.733-3.654 3.93.29.251.548.748.548 1.5 0 1.083-.012 1.956-.012 2.223 0 .213.145.462.55.384A8 8 0 008 0z" />
              </svg>
            </a>
            <a
              href="https://x.com/augustinezuka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.569a10.163 10.163 0 01-2.825.775A4.923 4.923 0 0023.337 3a10.053 10.053 0 01-3.127 1.188A4.906 4.906 0 0016.616 2c-2.736 0-4.95 2.214-4.95 4.948 0 .387.045.765.128 1.128C7.728 7.251 4.1 5.497 1.67 2.94a4.933 4.933 0 00-.668 2.485c0 1.717.87 3.226 2.188 4.119a4.914 4.914 0 01-2.243-.616v.061c0 2.396 1.703 4.394 3.96 4.84a4.925 4.925 0 01-2.24.084c.633 1.98 2.475 3.417 4.658 3.457a9.872 9.872 0 01-6.1 2.097c-.396 0-.787-.023-1.17-.068a13.935 13.935 0 007.548 2.211c9.055 0 14.005-7.497 14.005-13.986 0-.213-.004-.426-.013-.637A10.023 10.023 0 0024 4.59a9.67 9.67 0 01-2.743.754A4.907 4.907 0 0023.953 4.569z" />
              </svg>
            </a>
            <a
              href="https://zw.linkedin.com/in/augustine-zuka-9768ab32b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:scale-110 transition-transform duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0h-20.451C.99 0 0 .991 0 2.226v19.547C0 23.009.99 24 2.225 24h20.451C23.01 24 24 23.009 24 21.773V2.226C24 .991 23.01 0 22.225 0zM7.163 20.452H3.544V9h3.619v11.452zM5.353 7.754c-1.155 0-2.09-.934-2.09-2.086 0-1.163.935-2.086 2.09-2.086 1.153 0 2.09.923 2.09 2.086 0 1.152-.937 2.086-2.09 2.086zM20.456 20.452h-3.619v-5.577c0-1.373-.025-3.142-1.914-3.142-1.917 0-2.209 1.496-2.209 3.042v5.677h-3.619V9h3.48v1.556h.048c.486-.922 1.675-1.892 3.449-1.892 3.686 0 4.374 2.43 4.374 5.593v6.195h-.001z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center sm:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Augustine Zuka. All rights
            reserved.
          </p>
          <p className="text-sm">
            Crafted with passion using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
