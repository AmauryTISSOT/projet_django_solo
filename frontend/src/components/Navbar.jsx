import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand fw-bold">
                    IPPSI Boutique
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav ms-auto">
                        <Link to="/" className="nav-link">
                            Accueil
                        </Link>
                        <Link to="/catalogue" className="nav-link">
                            Catalogue
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
