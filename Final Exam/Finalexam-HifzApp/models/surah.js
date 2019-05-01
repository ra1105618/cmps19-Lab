// ToDo: Implement the schema of the surah entity

const mongoose=require('mongoose')

const Schema=mongoose.Schema

const surahSchema = new Schema({

    name:{
        type:String,
        required:[true,"name should not be null"]
    },
    englishName:{
        type:String
    },
    ayaCount:{
        type:Number
    },
    type:{

        type:String,
        enum:["Meccan","Medinan"]
    }

});

const Surah = mongoose.model('Surah', surahSchema);
module.exports =Surah;