// index -> Retorna todos os valores,
// show -> Retorna um valor em especifico,
// store -> Cria um valor,
// update -> Altera um valor,
// delete -> Deleta um valor

import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { ProductModel } from "../entities/sequelize/Product";

import { Controller } from "./Controller";

export const ProductController: Controller = {
  async index(request: Request, response: Response) {
    const productsModel = await ProductModel.findAll()

    const products = productsModel.map(productModel => {
      const product = new Product({
        id: productModel.id,
        name: productModel.name,
        description: productModel.description,
        price: productModel.price,
      })

      return product
    })

    return response.json(products)
  },

  async show(request: Request, response: Response) {
    const { product_id } = request.params

    const productModel = await ProductModel.findByPk(product_id)

    if (!productModel) {
      return response.json(null)
    }

    const product = new Product({
      id: productModel.id,
      name: productModel.name,
      description: productModel.description,
      price: productModel.price
    })

    return response.json(product)
  },

  async store(request: Request, response: Response) {
    const { name, description, price } = request.body

    const productModel = await ProductModel.create({
      name,
      description,
      price,
    })

    const product = new Product({
      id: productModel.id,
      name: productModel.name,
      description: productModel.description,
      price: productModel.price,
    })

    return response.json(product)
  },

  async update(request: Request, response: Response) {
    const { name, description, price } = request.body
    const { product_id } = request.params

    const productModel = await ProductModel.findByPk(product_id)

    if (!productModel) {
      return response.status(400).json("product not found")
    }
    if (name) {
      productModel.name = name
    }
    if (description) {
      productModel.description = description
    }
    if (price) {
      productModel.price = price
    }

    await productModel.save()

    return response.status(204).send();
  },

  async delete(request: Request, response: Response) {
    const { product_id } = request.params

    const productModel = await ProductModel.findByPk(product_id)

    if (!productModel) {
      return response.status(400).json("product not found")
    }

    await productModel.destroy()

    return response.status(204).send();
  }
}