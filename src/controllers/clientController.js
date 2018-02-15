//Dependencies
import superagent from 'superagent';


export default {

    postClient: (url, body) => {
       return superagent
        .post(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log('NewClient', res.body);
        }).catch(err => console.log(err));
    },

    getAllClients: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log(res.body);
            cb(res);
        })
        .catch(err => console.log(err));
    },

    deleteClient: (url) => {
        return superagent
        .delete(url)
        .then(res => console.log("client deleted"))
        .catch(err => console.log(err));
    },

    putClient: (url,body, cb) => {
        return superagent
        .put(url)
        .set('Accept', 'application/json')
        .send(body)
        .then(res => {
            console.log("put client", res.body);
            cb();
        })
        .catch(err => console.log(err));
    },

    getClient: (url, cb) => {
        return superagent
        .get(url)
        .then(res => {
            console.log("get client",res.body);
            cb(res);
        })
        .catch(err => console.log(err));
    },

    clearList: (id, array, cb) => {
        let x = 0;
        var idTemp = 0;
        var newData = [];
        for( x in array){
            idTemp = array[x]._id;
            let data = array[x];
            if(id !== idTemp ){
                newData.push(data);
                cb(newData);
            }
        }
    }
};