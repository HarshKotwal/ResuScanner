import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { resumes } from "../constants";
import { useNavigate } from "react-router-dom";
import { usePuterStore } from "../lib/puter";
import { useEffect } from "react";

const Home = () => {
  const { auth } = usePuterStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/auth?next=/");
    }
  }, [auth.isAuthenticated, navigate]);

  return (
    <main className="bg-[url('/assets/public/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-handling py-16">
          <h1 className="text-center">
            Know Your ATS Score Before Recruiters Do
          </h1>
          <h2 className="text-center">
            Analyze your submission with AI powered feedback that breaks down
            performance, issues, and optimization opportunities.
          </h2>
        </div>

        {resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};
export default Home;
