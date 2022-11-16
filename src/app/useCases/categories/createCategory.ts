import { Response,Request } from 'express';

import { Category } from '../../models/Category';

export  const createCateegories = async (req : Request,res: Response) => {
  try{
    const {icon,name} = req.body;
    if(!name){
      return res.status(404).json({
        error: 'Name is required'
      });
    }
    if(!icon){
      return res.status(404).json({
        error: 'Name is required'
      });
    }
    const category = await Category.create({icon,name});
    res.status(201).json(category);
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};
