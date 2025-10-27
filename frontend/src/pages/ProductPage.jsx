import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}/`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p>Chargement...</p>;

    return (
        <div className="p-8">
            <img
                src={product.image}
                alt={product.name}
                className="w-80 rounded-lg"
            />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p className="text-xl font-bold">{product.price} €</p>
        </div>
    );
}
