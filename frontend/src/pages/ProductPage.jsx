import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}/`)
            .then((res) => setProduct(res.data.product))
            .catch((err) => console.error(err));
    }, [id]);

    if (!product) return <p className="text-center mt-5">Chargement...</p>;

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 text-center">
                    <img
                        src={`http://localhost:8000${product.image}`}
                        alt={product.name}
                        className="img-fluid rounded mb-4"
                        style={{ maxHeight: "400px", objectFit: "cover" }}
                    />
                </div>
                <div className="col-md-6">
                    <h1 className="fw-bold">{product.name}</h1>
                    <p className="mb-3">{product.description}</p>
                    <p className="h4 fw-bold">{product.price} €</p>
                </div>
            </div>
        </div>
    );
}
