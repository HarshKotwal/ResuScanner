import "./App.css";
import Navbar from "./components/Navbar";
import ResumeCard from "./components/ResumeCard";
import { resumes } from "./constants";

function App() {
  return (
    <main className="bg-[url('/assets/public/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-handling">
          <h1 className="text-center">
            Know Your ATS Score Before Recruiters Do
          </h1>
          <h2 className="text-center">
            Analyze your submission with AI powered feedback that breaks down
            performance, issues, and optimization opportunities.
          </h2>
        </div>
      </section>

      {resumes.length > 0 && (
        <div className="resume-section">
          {resumes.map((resume) => (
            <ResumeCard key={resume.id} resume={resume} />
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
