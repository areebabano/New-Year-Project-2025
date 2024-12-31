import FireworksEffect from "../components/FireWorks";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Fireworks Effect */}
      <FireworksEffect />

      {/* New Year Content */}
      <div className="h-auto bg-gradient-to-r from-red-700 via-yellow-400 to-yellow-500 border-4 border-white z-10 text-center space-y-6 rounded-xl p-6 md:p-8 shadow-2xl transform transition-all duration-500 hover:scale-105 animate-bounce">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-bounce">
          🎉 Happy New Year 2025! 🎆
        </h1>
        <p className="text-lg sm:text-xl font-serif font-semibold mb-4 text-white opacity-90 transform transition-all duration-500 hover:scale-105 animate__animated animate__fadeIn">
          May this year bring you joy, success, and endless possibilities! 🚀
        </p>
        <h6 className="text-md sm:text-lg opacity-70 text-white font-semibold">
          Created By <b><i>Areeba Hammad</i></b> 👑
        </h6>
      </div>

      {/* Scrollable Message */}
      <div className="absolute bottom-4 text-center w-full animate-bounce">
        <p className="text-lg sm:text-xl font-semibold opacity-80 text-yellow-500">
          🌟 Let&rsquo;s make 2025 the best year ever&rsquo; 🌟
        </p>
      </div>

      {/* Optional Background Animation (e.g., Stars or Parallax effect) */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 bg-no-repeat bg-cover" style={{ backgroundImage: 'url("/path-to-your-background-image.jpg")' }}></div>
    </div>
  );
}
