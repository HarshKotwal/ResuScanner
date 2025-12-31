export default function Navbar() {
  return (
    <header className="flex justify-between items-center m-4 p-4 border border-gray-100 rounded-4xl bg-white px-5">
      <div className="flex items-center-safe gap-3 ml-4">
        <img
          className="h-10 w-10 object-cover"
          src="/logo.png"
          alt="ResuScan logo "
        />
        <h1
          className="text-3xl bg-linear-to-r from-blue-300 to-blue-950 bg-clip-text text-transparent"
          style={{ fontFamily: "'Archivo Black', sans-serif" }}
        >
          ResuScan
        </h1>
      </div>
      <div
        className="flex items-center gap-5 mr-4"
        style={{ fontFamily: "'Inter',sans-serif" }}
      >
        <button className="px-4 py-2 text-blue-900 font-extrabold hover:text-blue-300 hover:scale-110 transition-colors">
          Register
        </button>
        <button className="px-6 py-2 bg-linear-to-r from-blue-300 to-blue-900 text-white  rounded-lg hover:scale-105 transition-all font-bold">
          Sign in
        </button>
      </div>
    </header>
  );
}
