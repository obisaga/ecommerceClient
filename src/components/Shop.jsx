import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Shop = () => {

const [products, setProducts] = useState([])

const fetchProducts = async () => {
    try{
        const response = await axios.get("http://localhost:3000/api/products")
        console.log(response.data)

        setProducts(response.data)

    } catch(err){
        console.log(err)
    }
}

useEffect(()=> {
    fetchProducts()
}, [])


  return (
    <>
    <div>Shop</div>
    {products.map((product, index) => {
        return(
            <>
            <p key={index}>{product.title}</p>
            <img src={product.image} alt={product.title} />
            </>
        )
    })}
    
    
    </>
    

  )
}

export default Shop