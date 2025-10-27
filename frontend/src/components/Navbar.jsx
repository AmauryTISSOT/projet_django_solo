import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-4 bg-gray-100 shadow">
            <Link to="/" className="font-bold text-lg">
                Ma Boutique
            </Link>
            <div className="space-x-4">
                <Link to="/">Accueil</Link>
                <Link to="/catalogue">Catalogue</Link>
            </div>
        </nav>
    );
}
