import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <Link to="/" aria-label="ResuScanner home">
        <p className="text-2xl font-bold text-gradient">ResuScanner</p>
      </Link>
      {pathname !== "/upload" && (
        <Link to="/upload" className="primary-button w-fit">
          Upload Resume
        </Link>
      )}
    </nav>
  );
}
