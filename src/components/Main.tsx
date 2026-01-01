export default function Main() {
  return (
    <div className="flex justify-center mt-10 mx-10">
      <div className="w-200 p-18 ">
        <span className=" bg-linear-to-r from-lime-400 to-cyan-600 bg-clip-text text-transparent">
          ~ ATS Resume/CV scanner system
        </span>
        <div className="pt-10 pr-11 text-5xl leading-15 font-extrabold ">
          Will your Resume survive those industry level ATS Bots?
        </div>
        <div className="pt-7 font-semibold ">
          75% of candidates worldwide never know why they're been rejected. The
          truth? ATS Bots reject qualified applicants for fixable formatting,
          written and layout issues. See exactly what's blocking your resume to
          get into your dream job in 60 seconds.
        </div>
      </div>
      <div className="w-200 pt-20 px-20 ">
        <div className="p-8 border border-lime-300  shadow-lg shadow-lime-300/50 rounded-4xl">
          <div className="flex justify-center text-center text-2xl font-extrabold">
            Know your actual ATS score before recruiters do.
          </div>
          <div className="pt-3 font-light text-center">
            Our scanner reveals hidden formatting issues, missing keywords, and
            structural gaps that block ATS shortlisting.
          </div>
          <button className="pt-15 ">Upload Your Resume</button>
          <div>privacy garunteed</div>
          <div>Supported formats: PDF. | Max file size: 5MB.</div>
        </div>
      </div>
    </div>
  );
}
