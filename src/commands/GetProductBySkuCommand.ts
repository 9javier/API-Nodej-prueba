 
import ProductService from '../services/productService';

 export default class GetProductBySkuCommand{
    constructor(){
    
    }

    async getProductBySku(body){
        if(!body){
            throw new Error('Error: La petición requiere un SKU para el producto');
        }
        if(!body.sku){
            throw new Error('Error: Necesita agregar el SKU del producto a buscar');
        }
        const productService = new ProductService();
        return await productService.getProductBySku(body.sku);
    }
 
}
