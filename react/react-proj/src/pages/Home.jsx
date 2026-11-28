
import React from "react";

function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">

      <h1 className="text-5xl font-bold text-yellow-400 mb-5">
        Welcome to React App
      </h1>

      <p className="text-gray-300 text-lg max-w-xl">
        Explore React components, hooks, state management,
        API integration and form validation.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        <div className="bg-zinc-900 border border-yellow-600/40 p-6 rounded-xl">
          <h2 className="text-yellow-400 text-xl font-bold">
            React Hooks
          </h2>
          <p className="text-gray-400 mt-2">
            Learn useState and useEffect.
          </p>
        </div>

        <div className="bg-zinc-900 border border-yellow-600/40 p-6 rounded-xl">
          <h2 className="text-yellow-400 text-xl font-bold">
            Components
          </h2>
          <p className="text-gray-400 mt-2">
            Explore reusable components.
          </p>
        </div>

        <div className="bg-zinc-900 border border-yellow-600/40 p-6 rounded-xl">
          <h2 className="text-yellow-400 text-xl font-bold">
            API & Forms
          </h2>
          <p className="text-gray-400 mt-2">
            Practice API calls and validation.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Home;
