const App = () => {
  return (
    <>
      <header>
        <div className="container m-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Veluvimal</h1>
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
                    Projects
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
          <div className="">
            <div className="container m-auto px-4 py-10 flex justify-center gap-6">
              <div className="w-1/2">
                <h2 className="font-bold text-4xl">Hello I'm Veluvimal,</h2>
                <h2 className="font-bold text-4xl mt-1 gradient-text">
                  Creative Designer & Content Strategist
                </h2>
                <p className="mt-4 text-gray-400">
                  A creative designer with a flair for visual communication,
                  skilled in editing, logo design, and storytelling. Passionate
                  about innovative projects like crypto creations and content
                  marketing.
                </p>
              </div>
              <div className="relative w-2/2">
                <img
                  src="/veluvimal.jpg"
                  alt="veluvimal"
                  className="size-72 object-cover rounded-full ring ring-offset-blue-500 z-10"
                />
                <div className="bg-gradient-to-br from-violet-500 to-blue-500 w-64 h-64 rounded-full absolute bottom-5 -right-5 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default App;
