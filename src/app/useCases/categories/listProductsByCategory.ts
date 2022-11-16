import { Response,Request } from 'express';

import { Product } from '../../models/Product';

export  const listProductsByCategory = async (req : Request,res: Response) => {
  try{
    const {categoryId} = req.params;
    console.log(categoryId);
    const products = await Product.find().where('category').equals(categoryId);
    res.json(products);
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }

};
