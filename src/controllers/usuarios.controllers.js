const Usuario = require('../models/usuario.model')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         

module.exports = {   
    async index(req,res){
        const user = await Usuario.find();
    res.json(user);
},
async create(req,res){
    const {nome, email, tipo, senha} = req.body;
    let data = {};
    let user = await Usuario.findOne({email});
    if(!user){
        data = {nome, email, tipo, senha};
        user = await Usuario.create(data);
                          
        return res.status(200).json(user);
    }else{
        return res.status(500).json(user);
    }
   },
   async detalhes(req,res){
    const {_id} = req.params;
    const user = await Usuario.findOne({_id});
    res.json(user);
   },
   async deletar(req,res){
    const {_id} = req.params;
    const user = await Usuario.findByIdAndDelete({_id});
   return res.json(user);
   },
   async update(req,res){
    const {_id, nome, email, senha, tipo } = req.body;
    const data = {nome, email, senha, tipo};
    const user = await Usuario.findOneAndUpdate({_id},data,{new:true});
    res.json(user);
   }
}

