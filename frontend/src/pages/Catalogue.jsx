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
        <div className="p-4">
            <h1>Catalogue des produits</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((p) => (
                    <Link key={p.id} to={`/product/${p.id}`}>
                        <div className="border p-2 rounded-lg shadow">
                            <img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-40 object-cover"
                            />
                            <h2>{p.name}</h2>
                            <p>{p.price} €</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
