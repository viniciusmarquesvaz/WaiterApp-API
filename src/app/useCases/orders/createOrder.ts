import { Response,Request } from 'express';

import { Order } from '../../models/Order';

export  const createOrder = async (req : Request,res: Response) => {
  try{
    const {table,products} = req.body;

    const category = await Order.create({table,products});
    res.status(201).json(category);
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};
