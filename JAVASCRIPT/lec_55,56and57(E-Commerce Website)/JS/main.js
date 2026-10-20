API  = "https://dummyjson.com/products?limit=0"

async function fetchProducts(){
try{
    const response = await fetch(API) ;
    const data = await response.json();
    console.log(data);
}catch (error){

}

}

fetchProducts()

function init(){

}