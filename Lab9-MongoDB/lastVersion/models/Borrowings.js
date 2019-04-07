const mongoose=require('mongoose')

const Schema=mongoose.Schema

const borrowingSchema=new Schema({


    id:{type:Number,required:true,unique:true},

    bookId:[{

        type:Schema.Types.ObjectId,
        ref:'Books',
        required:true
    }],

    borrowerId:[{
        type:Schema.Types.ObjectId,
        ref:'Borrowers',
        required:true

    }]







})