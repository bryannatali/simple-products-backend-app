import { Router } from 'express';
import { ProductController } from './controllers/ProductController';

const routes = Router();

routes.get('/products', ProductController.index);

routes.get("/products/:product_id", (request, response) => ProductController.show(request, response))

routes.post("/products", (request, response) => ProductController.store(request, response))

export { routes }

// GET, POST, PUT, DELETE

// localhost:3333/products => GET => Retorna produtos
// localhost:3333/products/1 => GET => Retorna produto 1
// localhost:3333/products => POST => Cria Produto
// localhost:3333/products/1 => PUT => Edita Produto 1
// localhost:3333/products/1 => DELETE => Deleta Produto 1