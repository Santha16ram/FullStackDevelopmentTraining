
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Existing components
import Counter from "./Hooks/UseState/Counter";
import Players from "./Players";
import Score from "./Hooks/UseState/Score";
import User from "./Hooks/UseEffects/User";
import Flipkart from "./components/Flipkart";
import FetchAPI from "./components/FetchAPI";
import Registration from "./components/Registration";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Navbar
import NavBar from "./components/NavBar";

const App = () => {

  const players = [
    { id: 1, name: "Virat Kohli" },
    { id: 2, name: "MS Dhoni" },
    { id: 3, name: "Rohit Sharma" },
    { id: 4, name: "Jasprit Bumrah" }
  ];

  const mobile = "iphone 14 pro max";

  return (
    <BrowserRouter>

      <div className="min-h-screen bg-black text-white">

        <NavBar />

        <main className="max-w-7xl mx-auto px-4 py-8">

          <Routes>

            {/* Main Pages */}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* React Components */}
            <Route path="/counter" element={<Counter />} />

            <Route
              path="/players"
              element={<Players obj1={players} />}
            />

            <Route path="/score" element={<Score />} />

            <Route path="/user" element={<User />} />

            <Route
              path="/flipkart"
              element={<Flipkart mobile={mobile} />}
            />

            <Route path="/fetch-api" element={<FetchAPI />} />

            <Route path="/registration" element={<Registration />} />

            {/* Invalid Route */}
            <Route
              path="*"
              element={
                <div className="text-center py-20">
                  <h1 className="text-4xl text-yellow-500 font-bold">
                    404 - Page Not Found
                  </h1>
                  <p className="text-gray-400 mt-3">
                    The page you are looking for doesn't exist.
                  </p>
                </div>
              }
            />

          </Routes>

        </main>

        <footer className="border-t border-yellow-700/40 py-5 text-center text-gray-400">
          React Learning Project | Built with React & Tailwind CSS
        </footer>

      </div>

    </BrowserRouter>
  );
};

export default App;
