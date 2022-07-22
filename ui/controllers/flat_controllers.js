require('dotenv').config();
const axios = require("axios");


const get_all_flats = async(req, res) => {
    const url = `${process.env.BASE_URL}/flats/all`;
    var page = undefined;  
    
    if(req.query.page){
        page = req.query.page;
    } else {
        page = 1;
    }

    const params = {
        params: {
            page: page
        }
    }

    axios.get(url, params)
    .then( data => {
        res.render("home", {
            flats: data.data,
            filterUrl: false
        })
    })
    .catch( err => {
        console.log(err, err.message)
    })
}

const get_filtered_flats = async(req, res) => {
    const query  = req.query;
    const url = `${process.env.BASE_URL}/flats/filtered`;
    var typeA = undefined;
    var typeB = undefined;
    var limit = undefined;
    var page = undefined;

    if (Array.isArray(query.kk)){
        typeA = query.kk  
    } else {
        typeA = [query.kk]
    }
    if (Array.isArray(query.add)){
        typeB = query.add  
    } else {
        typeB = [query.add]
    }

    if (query.limit){
        limit = query.limit;
    } else {
        limit = 10
    }

    if (query.page){
        page = query.page;
    } else {
        page = 1;
    }

    var url_array = req.originalUrl.split("&");
    url_array.pop();
    url_array = url_array.join("&");
    var fullUrl = req.protocol + '://' + req.get('host') + url_array;
 
    axios.get(url, {
        params: {
            limit: limit,
            from: query.fromprice,
            to: query.toprice,
            surface: query.surface,
            typeA: typeA,
            typeB: typeB,
            page: page
        }
    })
    .then( data => {
        res.render("home", {
            flats: data.data,
            filterUrl: fullUrl
        })
    })
    .catch( err => {
        console.log(err.message)
    })
}

module.exports = {
    get_all_flats,
    get_filtered_flats
}