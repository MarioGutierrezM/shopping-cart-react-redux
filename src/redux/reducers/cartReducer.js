const cartReducer = (state = {
    cart: []
}, action) => {
    switch (action.type) {
        case "ADD_PRODUCT_FULFILLED":
            let id = action.payload.product;
            let found = state.cart.find(itera => id === itera.product);
            if (!found) {// if the product does not exist, it can be added
                state = {
                    ...state,
                    cart: [...state.cart, action.payload]
                };
            }
            break;
        case "DELETE_ALL_PRODUCTS_FULFILLED":
            state = {
                ...state,
                cart: []
            }
            break;
        case "DELETE_ONE_PRODUCT_FULFILLED":
            state = {
                ...state,
                cart: state.cart.filter(item => item.product !== action.payload)
            }
            break;
        case "MODIFY_QUANTITY_FULFILLED"://it only add a new product
            state = {
                ...state,
                cart: [...state.cart, action.payload]
            };
            break;
        default:
            break;
    }
    return state;
};

export default cartReducer;


/*
let idToFind = action.payload.productID;
            let newQuantity = action.payload.newQuantity;
            let x = 0;
            
            for (x=0; x<=state.cart.length; x++) {
                if( idToFind === state.cart[x].product){
                    
                    state.cart[x].quantity = newQuantity;
                }
            }

            */