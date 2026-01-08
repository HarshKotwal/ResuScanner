import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { usePuterStore } from "./lib/puter";
import { useEffect } from "react";
// import Navbar from "./components/Navbar";
// import ResumeCard from "./components/ResumeCard";
// import { resumes } from "./constants";

function App() {
  const { init } = usePuterStore();
  useEffect(() => {
    init();
  }, [init]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;
