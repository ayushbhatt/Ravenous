import SearchBar from "../SearchBar/SearchBar";

const apikey = 'C2EQUxwuOQp5k_5WllZ4gOUGArJlZ38U5FIzpjk04nrJBtH6tZecesKCmB1vvp6F8SQoEAgM-waYUoEIRiUIVMQKL0EvCeQhp4WGevgoj2zgnff1MYHfGtDkPxSDYHYx';

var Yelp ={};

function SearchBar(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{headers:`Bearer ${apiKey}`}).then(response => {
        response.json();
    });
}