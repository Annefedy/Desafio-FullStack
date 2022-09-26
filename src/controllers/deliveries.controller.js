const Delivery = require('../models/delivery.model')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

module.exports = {   
    async index(req,res){
        const entrega = await Delivery.find();
    res.json(entrega);
},
async create(req,res){
    const { client, delivery_date, target_start, target_end } = req.body;
    let data = {};
    let entrega = await Delivery.findOne({client });
    if(!entrega){
        data = {  client, delivery_date, target_start, target_end };
        entrega = await Delivery.create(data);
                          
        return res.status(200).json(entrega);
    }else{
        return res.status(500).json(entrega);
    }
   },
   async detalhes(req,res){
    const {_id} = req.params;
    const entrega = await Delivery.findOne({_id});
    res.json(entrega);
   },
   async deletar(req,res){
    const {_id} = req.params;
    const entrega = await Delivery.findByIdAndDelete({_id});
   return res.json(entrega);
   },
   async update(req,res){
    const {_id, client, delivery_date, target_start, target_end } = req.body;
    const data = {};
    const entrega = await Delivery.findOneAndUpdate({_id},data,{new:true});
    res.json(entrega);
   }
}

