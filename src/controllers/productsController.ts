import ProductsCommmand from '../commands/GetProductBySkuCommand';

export default class ProductsController {

  constructor() {    
  }

   async getProductBySku(request, res, next) {
    try {
      const token = request.headers.token;
      if(token && token == process.env.TOKEN){
        const productsCommmand = new ProductsCommmand();
        const response = await productsCommmand.getProductBySku(request.body);
        return res.json({ status: 200, response });
      }else{
        return res.json({ status: 401, response: "NO Autorizado para este recurso, utilce un token para la petición" });
      }
      

    } catch (error) {
      next(error);
    }

  }

}
