import './index.css';
import { Routes, Route, Link } from 'react-router-dom'; // Import React Router
import Projects from './Projects'; // Import the Projects Page Component

function App() {
  return (
    <div>
      {/* Define Routes */}
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
            <div className="bg-gray-100 min-h-screen">
              {/* Hero Section */}
              <header className="text-center py-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-blue-600 mx-auto mb-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
                  />
                </svg>
                <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
                  Welcome to My Personal Website
                </h1>
                {/* <p className="text-lg text-gray-700 mb-6">
                  Crafting useful and fun apps and solutions.
                </p> */}
                {/* Link to Projects Page */}
                <Link
                  to="/projects"
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200 mt-8 inline-block"
                >
                  View My Work
                </Link>

              </header>

              {/* About Section */}
              <section className="bg-white py-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
                  {/* Profile Photo */}
                  <img
                    src={require('./images/prof-Jay.png')}
                    alt="Jay Patel Profile Picture"
                    className="w-40 h-40 rounded-full mb-6 md:mb-0 md:mr-8"
                  />
                  {/* About Text */}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      About Me
                    </h2>
                    <p className="text-gray-600">
                      Hi, my name is Jay. I'm a passionate developer dedicated to
                      creating modern and efficient apps that solve real-world
                      problems. I like to build full-stack applications such as web apps and mobile apps, and automation solutions. I love
                      to bring ideas to life and thrive on solving
                      challenging problems.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          }
        />

        {/* Projects Page */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
