import React from 'react';

export default function Navbar() {
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-end p-4">
        <button className="text-white bg-violet-600 border-2 border-violet-600 px-6 py-2 rounded-lg hover:bg-violet-800 hover:border-violet-800 transition duration-300 mx-2">
          Login
        </button>
        <button className="text-white bg-violet-600 border-2 border-violet-600 px-6 py-2 rounded-lg hover:bg-violet-800 hover:border-violet-800 transition duration-300 mx-2">
          Register
        </button>
      </div>
    </div>
  );
}
