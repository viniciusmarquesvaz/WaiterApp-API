import { Response,Request } from 'express';

import { Order } from '../../models/Order';

export  const cancelOrder = async (req : Request,res: Response) => {
  try{
    const {orderId} = req.params;
    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  }catch(error){
    console.log(error);
    res.status(500).json({
      error: 'Internal Server Error'
    });
  }
};
