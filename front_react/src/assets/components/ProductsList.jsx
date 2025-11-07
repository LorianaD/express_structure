import { useEffect, useState } from "react"
import { Link } from "react-router";

function ProductsList() {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        
        try {

            const res = await fetch('http://localhost:3000/monapi/products');
            const data = await res.json();
            setProducts(data.data);

        } catch(error) {

            console.error("erreur :", error);
            
        }

    }

    useEffect(() => {
        getProducts();
    }, []);

  return (
    <>
        <h2>Catalogue</h2>
        {/* products.map(...) parcourt le tous les élément du tableau products. */}
        {products.map(p => ( 
            <article key={p.id}>
                <h3>{p.name}</h3>
                <p>{p.price} €</p>
                <Link to={`/${p.id}`} className="btn-show">Voir les détailles</Link>
            </article>
        ))}
    </>
  )
}

export default ProductsList
