import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-[url('/assets/public/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-handling">
          <h1>Know Your ATS Score Before Recruiters Do</h1>
          <h2>
            Analyze your submission with AI powered feedback that breaks down
            performance, issues, and optimization opportunities.
          </h2>
        </div>
      </section>
    </main>
  );
}

export default App;
