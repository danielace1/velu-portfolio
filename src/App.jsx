import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="shadow-md text-gray-400">
        <div className="container mx-auto px-5 md:px-16 lg:px-10 xl:px-40 py-5">
          <div className="flex justify-between items-center">
            <div>
              <img
                src="/v.png"
                alt="veluvimal logo"
                className="h-10 md:h-14 w-10 md:w-14"
              />
            </div>

            {/* Desktop Navigation */}
            <nav>
              <ul className="hidden md:flex items-center gap-x-5">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-all"
                    aria-label="About section"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-all"
                    aria-label="Skills section"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#my-works"
                    className="text-gray-400 hover:text-white transition-all"
                    aria-label="My Works section"
                  >
                    My Works
                  </a>
                </li>
                <li>
                  <a
                    href="#education"
                    className="text-gray-400 hover:text-white transition-all"
                    aria-label="Education section"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="text-gray-400 hover:text-white focus:outline-none"
                aria-label="Open navigation menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className="absolute right-0 top-full mt-2 bg-gray-800 rounded shadow-md w-40">
                  <li className="border-b border-gray-700">
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
                      aria-label="About section"
                    >
                      About
                    </a>
                  </li>
                  <li className="border-b border-gray-700">
                    <a
                      href="#skills"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
                      aria-label="Skills section"
                    >
                      Skills
                    </a>
                  </li>
                  <li className="border-b border-gray-700">
                    <a
                      href="#my-works"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
                      aria-label="My Works section"
                    >
                      My Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#education"
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700"
                      aria-label="Education section"
                    >
                      Education
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Introduction */}
        <section className="pb-10 md:pb-16 lg:pb-40 mt-10 lg:mt-24">
          <div className="container mx-auto px-5 lg:px-10 xl:px-40 flex flex-col lg:flex-row justify-between items-center">
            <div className="">
              <h2 className="font-bold text-3xl lg:text-4xl">
                Hi, I'm Veluvimal,
              </h2>
              <h2 className="font-bold text-2xl lg:text-3xl mt-1 gradient-text">
                Creative Designer & Content Strategist
              </h2>
              <p className="mt-4 text-gray-400 max-w-xl leading-relaxed">
                A creative designer skilled in editing, logo design, and
                storytelling, with a passion for crypto projects and content
                marketing.
              </p>
              <div className="mt-6">
                <button
                  title="Download Resume"
                  className="px-8 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                >
                  Download Resume
                </button>
              </div>
            </div>
            <div className="mt-16 md:mt-20 lg:mt-0 relative mx-auto xl:mx-0">
              <img
                src="/veluvimal.jpg"
                alt="veluvimal"
                className="size-64 lg:size-72 object-cover rounded-full ring ring-offset-blue-500 z-10"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-violet-500 to-blue-500 w-56 h-56 rounded-full absolute bottom-6 -right-10 md:-right-16 -z-10"></div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="md:pb-5" id="about">
          <div className="container mx-auto px-5 pb-10 md:px-16 lg:px-10 xl:px-40 flex justify-between lg:space-x-10 items-center">
            <div className="w-full hidden lg:flex">
              <img
                src="/about.webp"
                alt="aboutme"
                className="size-40 rounded mx-auto"
              />
            </div>
            <div className="">
              <h2 className="font-bold text-3xl underline underline-offset-4 decoration-blue-500">
                About Me
              </h2>
              <p className="mt-5 text-gray-400 leading-relaxed">
                Hi, I’m Veluvimal, a creative designer with a degree in B.Sc.
                Visual Communication from St. Xavier's College. I specialize in
                editing, logo designing, content writing, scriptwriting, and
                marketing, with a touch of web skills in HTML and CSS. I’ve
                worked on exciting projects like running an article-publishing
                website (TimesRow) and creating two meme-based crypto coins,
                Hyena Howls and Futoshitoken, launched on PancakeSwap. I’m
                passionate about storytelling, design, and exploring new ideas
                to bring creative visions to life.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-5 md:py-10" id="skills">
          <div className="container mx-auto px-5 md:px-16 lg:px-10 xl:px-40">
            <h2 className="font-bold text-3xl text-center underline underline-offset-8 decoration-blue-500">
              Skills
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
              <div className="group text-center transition-transform transform hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                  <img src="/editing.png" alt="Editing" className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500">
                  Editing
                </h3>
              </div>

              <div className="group text-center transition-transform transform hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/logo-design.png"
                    alt="Logo Designing"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500">
                  Logo Designing
                </h3>
              </div>

              <div className="group text-center transition-transform transform hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/content-script.png"
                    alt="Content and Script Writing"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500">
                  Content & Script Writing
                </h3>
              </div>

              <div className="group text-center transition-transform transform hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/marketing.png"
                    alt="Marketing"
                    className="w-12 h-12"
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500">
                  Marketing
                </h3>
              </div>

              <div className="group text-center transition-transform transform hover:scale-105">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full flex items-center justify-center shadow-md">
                  <img
                    src="/html-css.webp"
                    alt="HTML & CSS"
                    className="w-12 h-12 "
                  />
                </div>
                <h3 className="font-semibold text-lg mt-4 group-hover:text-blue-500">
                  Basics of HTML & CSS
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-10 md:py-16" id="my-works">
          <div className="container mx-auto px-5 md:px-16 lg:px-10 xl:px-40">
            <h2 className="font-bold text-3xl text-center text-white underline underline-offset-8 decoration-blue-500">
              My Works
            </h2>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="group relative overflow-hidden border border-gray-700 rounded-lg bg-zinc-900 shadow-lg hover:shadow-sky-500 transition-shadow duration-300">
                <img
                  src="/article.jpg"
                  alt="TimesRow"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    TimesRow: A Platform for Published Voices
                  </h3>
                  <p className="text-gray-400 mt-3">
                    Managed and ran an article-publishing website, curating
                    diverse and engaging content.
                  </p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="group relative overflow-hidden border border-gray-700 rounded-lg bg-zinc-900 shadow-lg hover:shadow-sky-500 transition-shadow duration-300">
                <img
                  src="/meme.jpg"
                  alt="Meme Tokens"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    Meme-Based Crypto Tokens: Hyena Howls & Futoshitoken
                  </h3>
                  <p className="text-gray-400 mt-3">
                    Created and launched two humor-driven cryptocurrencies
                    inspired by meme culture, successfully listed on
                    PancakeSwap.
                  </p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="group relative overflow-hidden border border-gray-700 rounded-lg bg-zinc-900 shadow-lg hover:shadow-sky-500 transition-shadow duration-300">
                <img
                  src="/trading.jpg"
                  alt="Gold Trading"
                  className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors duration-300">
                    Gold Trading with Market Insights and Algorithms
                  </h3>
                  <p className="text-gray-400 mt-3">
                    Traded gold with unlimited leverage, using market analysis,
                    global news, and algorithms to identify optimal trading
                    opportunities.
                  </p>
                </div>
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-10" id="education">
          <div className="container mx-auto px-5 md:px-16 lg:px-10 xl:px-40">
            <h2 className="font-bold text-3xl text-center text-white underline underline-offset-8 decoration-blue-500">
              Education
            </h2>
            <div className="mt-12 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-emerald-500 hidden sm:block"></div>

              <div className="relative flex flex-col sm:flex-row items-center mb-10">
                <div className="w-full sm:w-1/2 text-center sm:text-right sm:pr-10">
                  <h3 className="font-semibold text-lg text-white">
                    St. Xavier's College, Tirunelveli
                  </h3>
                  <span className="text-gray-400">
                    B.Sc Visual Communication
                  </span>
                  <br />
                  <span className="text-gray-400">2022 - 2025</span>
                </div>
                <div className="relative w-8 h-8 bg-gradient-to-t from-blue-500 to-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500 mt-4 sm:mt-0">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="w-full sm:w-1/2 mt-5 sm:mt-0 sm:pl-10 text-center sm:text-left">
                  <p className="text-gray-400">
                    A leading institution fostering creativity and excellence in
                    visual communication.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col sm:flex-row-reverse items-center">
                <div className="w-full sm:w-1/2 text-center sm:text-left sm:pl-10">
                  <h3 className="font-semibold text-lg text-white">
                    Rose Mary Matric. Hr. Sec. School, Tirunelveli
                  </h3>
                  <span className="text-gray-400">High School</span>
                  <br />
                  <span className="text-gray-400">2017 - 2021</span>
                </div>
                <div className="relative w-8 h-8 bg-gradient-to-t from-blue-500 to-emerald-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-500 mt-4 sm:mt-0">
                  <div className="w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                <div className="w-full sm:w-1/2 mt-5 sm:mt-0 sm:pr-10 text-center sm:text-right">
                  <p className="text-gray-400">
                    Focused on foundational learning and excellence in
                    academics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-5 mb-5">
          <div className="container mx-auto px-5 md:px-16 lg:px-10 xl:px-40">
            <h2 className="font-bold text-3xl text-center text-white underline underline-offset-8 decoration-blue-500">
              Contact
            </h2>
            <form
              action=""
              className="mt-10 max-w-lg mx-auto bg-gray-900 p-5 md:p-10 rounded"
              noValidate
            >
              <div className="flex flex-wrap gap-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block font-semibold text-gray-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="rounded w-full py-1.5 px-3 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none bg-gray-300"
                    required
                    aria-required="true"
                    aria-label="Your Name"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block font-semibold text-gray-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="rounded w-full py-1.5 px-3 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none bg-gray-300"
                    required
                    aria-required="true"
                    aria-label="Your Email Address"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block font-semibold text-gray-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write your message here..."
                    cols="30"
                    rows="5"
                    className="rounded w-full py-1.5 px-3 text-gray-700 focus:ring focus:ring-blue-500 focus:outline-none bg-gray-300"
                    required
                    aria-required="true"
                    aria-label="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="w-full mt-2">
                  <button
                    type="submit"
                    className="w-full px-8 py-2 mt-3 text-white bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full shadow-md shadow-gray-700 hover:from-blue-700 hover:to-cyan-700 font-semibold focus:ring focus:ring-blue-500"
                    aria-label="Send Message"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <hr className="border border-gray-800" />
      <footer className="py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <a
              href="https://github.com/danielace1"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text font-semibold hover:underline"
            >
              {`<Sudharsan/>`}
            </a>
          </p>
          <p className="text-xs text-gray-600 mt-1">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};
export default App;
