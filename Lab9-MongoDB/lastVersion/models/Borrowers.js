const mongoose=require('mongoose')

const Schema=mongoose.Schema

const borrowerSchema=new Schema({

    Id:{

        type:Number,
        required:[true,"should not be empty"],
        unique:[true]
    },

    firstName:{

        type:String
    },

    lastName:{

        type:String
    },

    borrowerBook: [{
        book: {
            type: Schema.Types.ObjectId,
            ref: 'Borrowers',
        },
        id: {
            type: Number,
            required:true,

        }



    }]



})

const Borrower=mongoose.model('Borrowers',borrowerSchema)
module.exports=Borrower