import { useEffect, useState } from "react"
import { useParams } from "react-router";

function GetProductById() {
    // Récupère le paramètre id dans l’URL et je stocke dans une variable id
    const id = useParams().id;

    const [product, setProduct] = useState([]);

    const getProduct = async (id) => {
        
        try {

            const res = await fetch('http://localhost:3000/monapi/products/'+id);
            const data = await res.json();
            setProduct(data.data);

        } catch(error) {

            console.error("erreur :", error);
            
        }

    }

    useEffect(() => {
        getProduct(id);
    }, [id]);

  return (
    <>
        {/* <p>Test voir si la page s'affiche</p> */}
        {product && (
            <article>
                <h2>{product.name}</h2>
                <p>{product.price} €</p>
            </article>
        )}
    </>
  )
}

export default GetProductById
