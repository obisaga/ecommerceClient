import React, { createContext, useReducer, useContext } from 'react'
import shopReducer, { initialState } from './shopReducer'

const ShopContext = createContext(initialState)

export const ShopProvider = ({children}) => {

    const [state, dispatch] = useReducer(shopReducer, initialState)

    const addToCart = (product) => {
        const updatedCart = state.products.concat(product) //merging the products array with the product we passed inside this function
        updatePrice(updatedCart)

        dispatch({
            type: "ADD_TO_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const removeFromCart = (product) => {
        const updatedCart = state.products.filter((currentProduct) => currentProduct.title !== product.title)
        updatePrice(updatedCart)

        dispatch({
            type: "REMOVE_FROM_CART",
            payload: {
                products: updatedCart
            }
        })
    }

    const updatePrice = (products) => {
        let total = 0

        products.forEach((product) => total += product.price)

        dispatch({
            type: "UPDATE_PRICE",
            payload: {
                total
            }
        })
    }

    const value = {
        total: state.total,
        products: state.products,
        addToCart,
        removeFromCart
    }

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
  
}


//custom hook
const useShop = () => {
    const context = useContext(ShopContext)

    if (context === undefined) {
        throw new Error ("useShop must be used within ShopContext")
    }

    return context
}

export default useShop