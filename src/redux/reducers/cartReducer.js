const cartReducer = (state = {
    cart: []
}, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_FULFILLED":
            state = {
                ...state,
                cart: [...state.cart, action.payload]
            };
            break;
        case "DELETE_ALL_PRODUCTS_FULFILLED":
            state = {
                ...state,
                cart: []
            }
            break;
        case "DELETE_ONE_PRODUCT_FULFILLED":
            // let newArr = [];
            // newArr = cart.filter(item => item.product != action.payload.product) 
            state = {
                ...state,
                cart: [...state.cart.filter(item => item.product !== action.payload)]
            }
            break;
        default:
            break;
    }
    return state;
};

export default cartReducer;