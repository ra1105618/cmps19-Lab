// ToDo: Implement the schema of the hifz entity

const mongoose=require('mongoose')

const Schema=mongoose.Schema

const hifzSchema = new Schema({

   surah:{
        type:Schema.Types.ObjectId,

       ref:'Surah',
        required:[true,"surah should not be null"]
    },
   fromAya:{

       type:Number
   },

    toAya:{

       type:Number
   },
    masterLevel:{

       type:Number
    }

});



const Hifz = mongoose.model('Hifz', hifzSchema);
module.exports=Hifz
