import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Catalogue() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/")
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="container my-4">
            <h1 className="mb-4">Catalogue des produits</h1>
            <div className="row g-4">
                {products.map((p) => (
                    <div key={p.id} className="col-md-4">
                        <Link
                            to={`/product/${p.id}`}
                            className="text-decoration-none text-dark"
                        >
                            <div className="card h-100">
                                <img
                                    src={`http://localhost:8000${p.image}`}
                                    alt={p.name}
                                    className="card-img-top"
                                    style={{
                                        height: "200px",
                                        objectFit: "cover",
                                    }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.price} €</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
