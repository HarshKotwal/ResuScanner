import Navbar from "../components/Navbar";
import ResumeCard from "../components/ResumeCard";
import { Link, useNavigate } from "react-router-dom";
import { usePuterStore } from "../lib/puter";
import { useEffect, useState } from "react";

const Home = () => {
  const { auth, kv, isLoading } = usePuterStore();
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loadingResumes, setLoadingResumes] = useState(false);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated, isLoading, navigate]);

  useEffect(() => {
    const loadResume = async () => {
      setLoadingResumes(true);

      const resumes = (await kv.list("resume:*", true)) as KVItem[];
      const parsedResumes = resumes?.map(
        (resume) => JSON.parse(resume.value) as Resume,
      );
      setResumes(parsedResumes || []);
      setLoadingResumes(false);
    };
    loadResume();
  }, [kv]);

  return (
    <main className="bg-[url('/assets/public/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-handling py-16">
          <h1 className="text-center">
            Know Your ATS Score Before Recruiters Do
          </h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2 className="text-center mt-5">
              No resumes found. Upload your first resume to get feedback
            </h2>
          ) : (
            <h2 className="text-center">
              Analyze your submission with AI powered feedback that breaks down
              performance, issues, and optimization opportunities.
            </h2>
          )}
        </div>

        {loadingResumes && (
          <div className="flex flex-col items-center justify-center">
            <img
              src="/assets/public/images/resume-scan-2.gif"
              className="w-50"
            />
          </div>
        )}

        {!loadingResumes && resumes.length > 0 && (
          <div className="resume-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}

        {!loadingResumes && resumes?.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <Link
              to="/upload"
              className="primary-button w-fit text-xl font-semibold"
            >
              Upload Resume
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};
export default Home;
