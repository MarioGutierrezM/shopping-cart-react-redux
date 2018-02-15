//Dependencies
import superagent from 'superagent';


export default {

    getAllOrders: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    getOrder: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            cb(res);
            console.log("Specific Order: ",res.body);
        }).catch(err => console.log(err));
    },

    //to add a product with queantity to array
    addProduct: (id, newOrder, quantity, cb) => {
        let newProduct = {
            product: id,
            quantity: quantity || 1
        }
        newOrder.push(newProduct);
        console.log(newOrder);
        cb(newOrder);
    },

    postOrder: (url, body, cb) => {
        return superagent
        .post(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log('NewOrder', res.body);
                cb(res);
        }).catch(err => console.log(err));
    }
};