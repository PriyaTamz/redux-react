import axios from "axios";

const Productsloader = async() => {
    const products = await axios.get('./Data/Products.json');
    return products.data.products;
}

export default Productsloader;