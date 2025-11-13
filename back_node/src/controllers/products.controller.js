// ici le controller pour mon crud products
const { NUMBER } = require('sequelize');
const db = require('../models');
const { param } = require('../routes/products.routes');
const Product = db.Product;

// logique d'affichage des produits
exports.listProducts = async (req, res) =>{
    // console.log('test du endpoint listProducts');
    // recuperation des produits en bdd dans la variable products
    try {
        const products = await Product.findAll();

        res.status(200).json({
            success: true,
            message: 'liste des produits',
            data: products
        });
    } catch(error) {
        console.error('erreur pour getProducts', error);
        res.status(500).json({
            success:false,
            message:"error sur get products",
            data: null
        })
    }

}

// logique affichage d'un produits
exports.getProductById = async (req, res) =>{
    try {
        // number() converti de string en nombre
        const id = Number(req.params.id);
        // recherche du produit
        const product = await Product.findByPk(id);// p => p.id === 
        
        if(!product) {
            // gestion d'erreur si pas de produit trouvé
            res.status(404).json({
                success: false,
                message: 'produit non trouvé',
                data: null
            })
        }
        // 200 produit trouvé
        res.status(200).json({
            success: true,
            message: 'produit trouvé',
            data: product
        })
    } catch(error) {
        console.error('erreur sur find by id', error);
        res.status(500).json({
            success: false,
            message:"erreur sur get by product",
            data: null
        })
    }
}

// ajout d'un produit
exports.createProduct = async (req, res) =>{
    
    try{
        const {name, price} = req.body;

        if(!name || !price || typeof price !== 'number' || typeof name !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'name string et price sont obligatoire',
                data: null            
            })
        };
        
        // vérifier que le produit n'est pas negatif

        // creation d'un objet produit avec id autoincrementé
        const newProduct = await Product.create({
            name: name,
            price: price
        });
        // inject l'objet dans le tablea
        // Product.push(newProduct);

        // console.log(products);

        res.status(200).json({
            success: true,
            message: 'produit créé',
            data: newProduct
        })
    } catch(error) {
        console.error('erreur sur create Product', error);
        res.status(500).json({
            success: false,
            message:"erreur sur la création de produit",
            data: null
        })
    }

}

exports.updateProduct = async (req, res) =>{
    try {

        const id = Number(req.params.id);
        const {name, price} = req.body;
        
        // recherche du produit en db
        const product = await Product.findByPk(id);
        if(!product){
            res.status(404).json({
                success: false,
                message: 'produit non trouvé',
                data: null
            })            
        }

        // verification name et price a faire

        // executer les modifications
        product.name = name;
        product.price = price;

        await product.save();

        res.status(200).json({
            success: true,
            message: "produit modifié",
            data: product
        })

    }catch(error){
        console.error('erreur sur updateProduct', error);
        res.status(500).json({
            success: false,
            message:"erreur sur la modification du produit",
            data: null
        })
    }
}

exports.delete = async (req, res) =>{
    try {
        const id = Number(req.params.id);

        // recherche du produit en db
        const product = await Product.findByPk(id);
        
        if(!product){
            res.status(404).json({
                success: false,
                message: 'produit non trouvé',
                data: null
            })            
        }

        await product.destroy();

        res.status(204).json({
            success: true,
            message: 'le produit a été suprimé avec succes',
            data: null
        })

    } catch (error) {
        console.error('erreur sur delete', error);
        res.status(500).json({
            success: false,
            message:"erreur sur la suppresion du produit",
            data: null
        })        
    }
}

// logique test
exports.test = async (req, res) =>{
    // console.log('route test de mon controller product');
    // res.send('route test de mon controller product');
    try {
        // vérifier la connexion
        await db.sequelize.authenticate();

        // vérifier que le model fonctionne
        const products = await Product.findAll({limit:1});

        res.status(200).json({
            success: true,
            message:'test de ma table product',
            data: products
        })

    } catch(error) {

        console.error('erreur dans le test de rpoduct', error);

        res.status(500).json({
            success: false,
            message:'echec lors du test de product',
            error: error.message
        })
        
    }
}