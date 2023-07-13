const todoSchema=require('../models/todoSchema');

const todoAdd = async (req,res) => {
    const {title}= req.body
    
    try{
       const todo = await todoSchema.create({title}); 
       res.status(200).json({todo})    
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:err.message})
    }
       
}

async function todoGet(req,res){
    try{
        const todos = await todoSchema.find();
        res.status(200).json({todos})
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:err.message})
    }
}

const todoUpdate = async (req,res) => {
    const {id}=req.params;
    try{
        const updatedtodo = await todoSchema.findOneAndUpdate(
            {
            _id:id
        },{
            ...req.body
        },{
            new:true
        });
        res.status(200).json({updatedtodo})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}

async function todoDelete(req,res){
    const{id}=req.params
    try{
        const deletetodo = await todoSchema.findByIdAndDelete({_id:id})
        if(!deletetodo){
            return res.status(404).json({msg:"todo not found"})
        }
        res.status(200).json({msg:"todo deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).json({msg:err.message})
    }
}
module.exports={
    todoAdd,
    todoGet,
    todoUpdate,
    todoDelete
}

