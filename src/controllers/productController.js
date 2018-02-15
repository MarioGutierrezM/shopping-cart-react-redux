//Dependencies
import superagent from 'superagent';


export default {

    postProduct: (url, body) => {
       return superagent
        .post(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log('NewProduct', res.body);
        }).catch(err => console.log(err));
    },

    getAllProducts: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    getProduct: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log("Get Product", res.body);
            cb(res);
        }).catch(err => console.log(err));
    },

    deleteProduct: (url) => {
        return superagent
        .delete(url)
        .then(res=> {
            console.log("Produc deleted");
        })
        .catch(err => console.log(err));
    },

    putProduct: (url, body, cb) => {
        return superagent
        .put(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log("product modified", res.body);
            cb();
        })
        .catch(err => console.log(err));
    },

    //to get out a product of the array
    productOut: (id, array, cb) => {
        let x = 0;
        let idTemp = 0;
        let newData = [];
        for( x in array){
            idTemp = array[x]._id;
            let data = array[x];
            if( id !== idTemp){
                newData.push(data);
                cb(newData);
            }
        }
    }
};