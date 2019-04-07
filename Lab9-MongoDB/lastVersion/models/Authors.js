const mongoose=require('mongoose')

const Schema=mongoose.Schema

const authorSchema=new Schema({




    author:{type:String,required:true},
    country:{type:String,required:true},
    imageLink:{type:String,required:true},
    language:{type:String,required:true},
    link:{type:String,required:true},
    title:{type:String,},
    pages:{type:Number},

    books:[{

        type:Schema.Types.ObjectId,
        ref:'Books',
        required:true
    }],





});

const Author=mongoose.model('Authors',authorSchema)
module.exports=Author;