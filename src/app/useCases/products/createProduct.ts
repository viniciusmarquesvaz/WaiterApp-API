import { Response,Request } from 'express';

import { Product } from '../../models/Product';

export  const createProduct = async (req : Request,res: Response) => {
  try{
    const imagePath = req.file?.filename;
    const {name,description,price,category,ingredients} = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      category,
      ingredients: ingredients ?  JSON.parse(ingredients) : [],
    });

    res.status(201).json(product);

  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }

};
