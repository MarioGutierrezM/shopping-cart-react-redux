//es posible hacerlo normal o con promesa, si es con promesa es necesario agregarla en store.js

// export function setAge(age) {
//     return {
//         type: "SET_AGE",
//         payload: age
//     };
// }


export function addOneProduct(obj) {
    return {
        type: "ADD_PRODUCT",
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(obj)
            }, 500);
        })
    };
}

export function deleteAllProducts(){
    return{
        type: "DELETE_ALL_PRODUCTS",
        payload: new Promise ((resolve, reject)=> {
            setTimeout(()=>{
                resolve()
            },1000);
        })
    }
}

export function deleteOneProduct(productID){
    return{
        type: "DELETE_ONE_PRODUCT",
        payload: new Promise ((resolve, reject)=> {
                resolve(productID)
        })
    }
}

export function modifyQuantity(newObj){
    return{
        type: "MODIFY_QUANTITY",
        payload: new Promise((resolve, reject) => {
            resolve(newObj);
        })
    }
}