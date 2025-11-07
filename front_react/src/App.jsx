import { useState } from 'react'
import { Routes, Route, Link } from 'react-router'
import './App.css'
import ProductsList from './assets/components/ProductsList'
import GetProductById from './assets/components/getProductById'
import CreateProduct from './assets/components/CreateProduct'

function App() {

  return (
    <>
      <header>
        <h1>Produits</h1>
        <nav>
          <ul>
            <li><Link to="/">Liste des produits</Link></li>
            <li><Link to="/create">Ajouter un produit</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={ < ProductsList /> }></Route>
        <Route path='/:id' element={< GetProductById />}></Route>
        <Route path='/create' element={ < CreateProduct /> }></Route>
      </Routes>
    </>
  )
}

export default App
