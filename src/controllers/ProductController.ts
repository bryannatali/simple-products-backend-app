// index -> Retorna todos os valores,
// show -> Retorna um valor em especifico,
// store -> Cria um valor,
// update -> Altera um valor,
// delete -> Deleta um valor

import { Request, Response } from "express";

import { Controller } from "./Controller";

export const ProductController: Controller = {
  async index(request: Request, response: Response) {
    return response.json([])
  },

  async show(request: Request, response: Response) {
    const { product_id } = request.params;

    return response.json({ productId: product_id })
  },

  async store(request: Request, response: Response) {
    const { name, description } = request.body;

    const newProduct = {
      id: 1,
      name,
      description
    }

    return response.json(newProduct)
  },

  async update(request: Request, response: Response) {
    return response.status(404).send();
  },

  async delete(request: Request, response: Response) {
    return response.status(404).send();
  }
}