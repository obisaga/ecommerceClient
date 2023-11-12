// Define the initial state for the shop context
export const initialState = {
  products: [],
  cart: [],
  total: 0,
};

// Reducer function to handle different actions
  const shopReducer = (state, action) => {

    switch (action.type) {
      case 'SET_PRODUCTS_START':
        return {
          ...state,
          loadingProducts: true,
          productsError: null,
        };

      case 'SET_PRODUCTS':
        return {
          ...state,
          products: action.payload,
        };

      case 'SET_PRODUCTS_ERROR':
        return {
          ...state,
          loadingProducts: false,
          productsError: action.payload,
        };

      case 'ADD_TO_CART':
        return addToCart(state, action.payload);

      case 'REMOVE_FROM_CART':
        return {
          ...state,
          products: action.payload.products,
          total: action.payload.total,
        };

      case "UPDATE_QUANTITY":
        return {
          ...state,
          products: action.payload.products,
          total: action.payload.total,
        }

      case 'UPDATE_PRICE':
        return {
          ...state,
          total: action.payload.total,
        };

        case "CLEAR_CART":
          return {
            ...state,
            cart: [],
            total: 0,
          }

      default:
        throw new Error(`No case for type ${action.type} found in shopReducer.`);
    }
  };
  
  export default shopReducer;
  