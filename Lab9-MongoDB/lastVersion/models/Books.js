const mongoose = require('mongoose');

const Schema=mongoose.Schema

const bookSchema = new Schema({

    Id:{type:Number,required:true,unique:true},
    title:{type:String},
    isbn:{type:String,},
    status:{type:String,enum:["PUBLISH","PENDING"]},
    thumbnailUrl:{type:String},
    shortDescription:{type:String,required:true},
    longDescription:{type:String},
    pageCount:{type:Number},


    categories:[String],


    authors: [{
       author: {
            type: Schema.Types.ObjectId,
            ref: 'Authors',
        },
       author: {
            type: String,

        },



    }]

});


const Book=mongoose.model('Books',bookSchema)
module.exports=Book












