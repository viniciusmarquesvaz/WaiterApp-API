import { Response,Request } from 'express';

import { Category } from '../../models/Category';

export  const listCateegories = async (req : Request,res: Response) => {
  try{
    const categories = await Category.find();
    res.json(categories);

  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};
