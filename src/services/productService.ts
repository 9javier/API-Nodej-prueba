import { getRepository, Repository } from "typeorm";
import { Products } from "../entity/product";

export default class ProductServices {
    constructor() {

    }

    async getProductBySku(sku) {
        let repo: Repository<Products>;
        repo = getRepository(Products);
        let query = await repo.find({ sku });
        
        if(query.length <= 0){
            return "Producto no encontrado.";
        }
        return query;
    }
}


