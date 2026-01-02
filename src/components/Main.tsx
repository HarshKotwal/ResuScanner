export default function Main() {
  return (
    <div className="flex justify-center mt-10 mx-10">
      <div className="w-200 p-18 ">
        <span className=" bg-linear-to-r from-lime-400 to-cyan-600 bg-clip-text text-transparent">
          ~ ATS Resume/CV scanner system
        </span>
        <div className="pt-10 pr-11 text-5xl leading-15 font-extrabold ">
          Can your Resume survive those industry level ATS Bots?
        </div>
        <div className="pt-7 font-semibold ">
          75% of candidates worldwide never know why they're been rejected. The
          truth? ATS Bots reject qualified applicants for fixable formatting,
          written and layout issues. See exactly what's blocking your resume to
          get into your dream job in 60 seconds.
        </div>
      </div>
      <div className="w-200 pt-20 px-20 flex justify-center">
        <div className="p-8 border border-gray-300  shadow-lg shadow-gray-700/50 rounded-4xl text-center">
          <div className="flex justify-center text-center text-2xl font-extrabold">
            Know your actual ATS score before recruiters do.
          </div>
          <div className="mt-5 font-light text-center">
            Our scanner reveals hidden formatting issues, missing keywords, and
            structural gaps that block ATS shortlisting.
          </div>
          <button className="mt-15 border-2 p-4 rounded-4xl bg-cyan-950 text-white font-extrabold text-center">
            Upload Your Resume
          </button>
          <div className="font-light text-xs mt-4">privacy gauranteed</div>
          <div className="text-sm font-bold mt-1">
            Supported formats: PDF | Max file size: 5MB
          </div>
        </div>
      </div>
    </div>
  );
}
