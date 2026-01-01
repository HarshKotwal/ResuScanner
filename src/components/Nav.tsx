export default function Navbar() {
  return (
    <header className="flex justify-between items-center mt-5 mx-40 p-2 border border-gray-100 shadow-xl rounded-4xl bg-white px-5">
      <div className="flex items-center-safe gap-3 ml-4">
        <img
          className="h-10 w-10 object-cover"
          src="/logo1.png"
          alt="ResuScan logo "
        />
        <h1
          className="text-2xl bg-linear-to-r from-lime-400 to-cyan-600 bg-clip-text text-transparent"
          style={{ fontFamily: "'Archivo Black', sans-serif " }}
        >
          ResuScanner
        </h1>
      </div>
      <div
        className="flex items-center gap-5 mr-4"
        style={{ fontFamily: "'Inter',sans-serif" }}
      >
        <button className="px-4 py-2 text-cyan-600 font-extrabold hover:text-lime-400 hover:scale-110 transition-colors">
          Register
        </button>
        <button className="px-4 py-2 bg-linear-to-r from-lime-400 to-cyan-600 text-white  rounded-lg hover:scale-105 transition-all font-bold">
          Sign in
        </button>
      </div>
    </header>
  );
}
