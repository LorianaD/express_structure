import { useEffect, useState } from "react"
import { data, Link } from "react-router";

function CreateProduct() {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [responseProduct, setResponseProduct] = useState(null);

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        
        const product = {
            name: name.trim(),
            price: Number(price)
        }

        try {

            const res = await fetch('http://localhost:3000/monapi/products', {
                method:"POST",
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(product)
            });

            const data = await res.json();
            console.log(data);
            
            setResponseProduct(data);

            // Réinitialise le formulaire
            setName("");
            setPrice("");

        } catch(error) {

            console.error("erreur :", error);
            
        }

    }

    // useEffect(() => {
    //     handleSubmit();
    // }, []);

  return (
    <>

        <h2>Ajouter un produit</h2>

        <form onSubmit={ handleSubmit } method="POST">

            <label htmlFor="name">Entréz le nom de votre article</label>
            <input type="text" name="name" placeholder="ex : stylo, crayon, ..." value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="price">Entrez le prix de votre article</label>
            <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

            <input type="submit" value="Ajouter" /> 

        </form>

        {responseProduct && <p>Produit ajouté avec succès</p>}

    </>
  )
}

export default CreateProduct
