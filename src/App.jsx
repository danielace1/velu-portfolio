const App = () => {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <img src="/v.png" alt="veluvimal" className="size-16" />
            </div>
            <div>
              <ul className="flex items-center gap-5">
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:cursor-pointer hover:text-white"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:cursor-pointer hover:text-white"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:cursor-pointer hover:text-white"
                  >
                    My Works
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="text-gray-400 hover:cursor-pointer hover:text-white"
                  >
                    Education
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Introduction */}
        <section className="">
          <div className="container m-auto px-4 py-10 flex justify-center gap-6">
            <div className="w-1/2">
              <h2 className="font-bold text-4xl">Hello I'm Veluvimal,</h2>
              <h2 className="font-bold text-3xl mt-1 gradient-text">
                Creative Designer & Content Strategist
              </h2>
              <p className="mt-4 text-gray-400">
                A creative designer with a flair for visual communication,
                skilled in editing, logo design, and storytelling. Passionate
                about innovative projects like crypto creations and content
                marketing.
              </p>
              <div className="mt-6">
                <button className="px-8 py-2 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 font-semibold">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="relative w-2/2">
              <img
                src="/veluvimal.jpg"
                alt="veluvimal"
                className="size-72 object-cover rounded-full ring ring-offset-blue-500 z-10"
              />
              <div className="bg-gradient-to-br from-violet-500 to-blue-500 w-56 h-56 rounded-full absolute bottom-6 -right-16 -z-10"></div>
            </div>
          </div>
        </section>

        {/* About */}
        <section>
          <div className="container m-auto px-4 py-10 flex justify-center gap-6">
            <div className="w-1/2">
              <img
                src="/about.webp"
                alt="aboutme"
                className="size-48 rounded"
              />
            </div>
            <div>
              <h2 className="font-bold text-3xl">About Me</h2>
              <p className="mt-5 text-gray-400">
                Hi, I’m B. Veluvimal, a creative designer with a degree in B.Sc.
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
        <section>
          <div className="container m-auto px-4 py-10">
            <h2 className="font-bold text-3xl text-center">Skills</h2>
          </div>
          <div className="mt-2 flex items-center justify-center space-x-32">
            <div>
              <img src="/editing.png" alt="editing" className="size-20" />
              <h2 className="font-bold text-center text-lg mt-2">Editing</h2>
            </div>
            <div>
              <img
                src="/logo-design.png"
                alt="Logo Designing"
                className="size-20 mx-auto"
              />
              <h2 className="font-bold text-center text-lg mt-2">
                Logo Designing
              </h2>
            </div>
            <div>
              <img
                src="/content-script.png"
                alt="Content and Script Writing"
                className="size-20 mx-auto"
              />
              <h2 className="font-bold text-center text-lg mt-2">
                Content & Script Writing
              </h2>
            </div>
            <div>
              <img
                src="/marketing.png"
                alt="Marketing"
                className="size-20 mx-auto"
              />
              <h2 className="font-bold text-center text-lg mt-2">Marketing</h2>
            </div>
            <div>
              <img
                src="/html-css.png"
                alt="html-css"
                className="w-24 h-20 mx-auto"
              />
              <h2 className="font-bold text-center text-lg mt-2">
                Basics of HTML & CSS
              </h2>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="container mt-5 m-auto px-4 py-10">
            <h2 className="font-bold text-3xl">My Works</h2>
            <div className="mt-10 grid grid-cols-4 gap-10 items-center">
              <div className="border rounded-md p-2">
                <img
                  src="/article.jpg"
                  alt="article"
                  className="w-80 h-64 object-cover rounded"
                />
                <h3 className="mt-3 text-lg font-semibold">
                  TimesRow: A Platform for Published Voices
                </h3>
                <p className="text-gray-300 mt-1">
                  Managed and ran an article-publishing website, curating
                  diverse and engaging content.
                </p>
              </div>
              <div className="border rounded-md p-2">
                <img
                  src="/meme.jpg"
                  alt="meme"
                  className="w-80 h-64 object-cover rounded"
                />
                <h3 className="mt-3 text-lg font-semibold">
                  Meme-Based Crypto Tokens: Hyena Howls & Futoshitoken
                </h3>
                <p className="text-gray-300 mt-1">
                  Created and launched two humor-driven cryptocurrencies
                  inspired by meme culture, successfully listed on PancakeSwap.
                </p>
              </div>
              <div className="border rounded-md p-2">
                <img
                  src="/trading.jpg"
                  alt="trading"
                  className="w-80 h-64 object-cover rounded"
                />
                <h3 className="mt-3 text-lg font-semibold">
                  Gold Trading with Market Insights and Algorithms
                </h3>
                <p className="text-gray-300 mt-1">
                  Traded gold with unlimited leverage, using market analysis,
                  global news, and algorithms to identify optimal trading
                  opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="container m-auto px-4 py-10">
            <h2 className="font-bold text-3xl text-center">Education</h2>
          </div>
          <div className="mt-12 grid relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-14 before:w-1 before:bg-white">
            <div className="ml-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-emerald-500 before:block before:absolute before:rounded-full before:-left-[23px]">
              <h3 className="font-semibold text-lg">
                St. Xavier's College, Tirunelveli
              </h3>
              <span className="text-gray-300">B.Sc Visual Communication</span>
              <br />
              <span className="text-gray-300">2022 -2025</span>
            </div>
            <div className="mt-10 ml-20 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-emerald-500 before:block before:absolute before:rounded-full before:-left-[23px] before:top-2">
              <h3 className="font-semibold text-lg">
                Rose Mary Matric. Hr. Sec. School, Tirunelveli
              </h3>
              <span className="text-gray-300">High School</span>
              <br />
              <span className="text-gray-300">2017 - 2021</span>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <div className="container m-auto px-4 py-5">
            <h2 className="font-bold text-3xl text-center">Contact</h2>
          </div>
          <form action="" className="max-w-lg mx-auto bg-gray-900 p-10 rounded">
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
                  className="rounded w-full py-1.5 px-3 text-gray-700 focus:border focus:outline-none focus:border-blue-500 bg-gray-300"
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
                  className="rounded w-full py-1.5 px-3 text-gray-700 focus:border focus:outline-none focus:border-blue-500 bg-gray-300"
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
                  cols="30"
                  rows="5"
                  className="rounded w-full py-1.5 px-3 text-gray-700 focus:border focus:outline-none focus:border-blue-500 bg-gray-300"
                ></textarea>
                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full px-8 shadow-gray-700 shadow-md py-2 mt-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 font-semibold"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>

      <hr className="border border-gray-800" />
      <footer>
        <div className="container m-auto px-4 py-4 text-center text-gray-500 text-sm">
          Made with ❤️ by{" "}
          <span className="hover:cursor-pointer gradient-text">{`<Sudharsan/>`}</span>
        </div>
      </footer>
    </>
  );
};
export default App;
