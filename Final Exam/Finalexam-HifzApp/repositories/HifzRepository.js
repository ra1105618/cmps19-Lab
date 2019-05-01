const fs = require('fs-extra');
const path = require('path');
const surahFilePath = path.join(__dirname, '../data/surah.json');
const hifzFilePath = path.join(__dirname, '../data/hifz.json');
const Surah=require('../models/surah')
const Hifz=require('../models/hifz')



class HifzRepository {
    //ToDo: Implement using MongoDB. You must filter data using a database query.
    async getSurahs(surahType) {
        return await Surah.find({surahType: type})

    }

    async getHifz(){
        return await Hifz.find({});
    }

    async addHifz(hifz) {

        return await Hifz.create()
    }

    async addSurah(surah){
        return await Surah.create(surah)



    }

    async getSurahsCount() {
        return await Surah.count({});
    }

    async gethifzCount() {
        return await Hifz.count({});
    }


    async emptyDB() { //in case needed during testing
        await Surah.remove({});

    }


    async emptyDB(){

        await Hifz.remove({})
    }

    async initSurahDb()
{

    try {
        //Uncomment to empty the database
        await
        this.emptyDB();
        //If the db is empty then init the db with data in json files
        const surahsCount = await
        this.getSurahsCount();
        console.log(`Surahs Count: ${surahsCount}. Comment out emptyDB() to stop re-initializing the database`);
        if (surahsCount == 0) {
            await
            this.loadDataFromJsonFiles();
        }
    }
    catch (err) {
        console.log(err);
    }


}


    async loadDataFromJsonFiles() {
        const fs = require('fs-extra');



        const surahs = await fs.readJson('data/surah.json');
        //const books = JSON.stringify(data)

        console.log('Retrieved surahs from json file and added to MongoDB surahs Collection: ' + surahs.length);

        for (const surah of surahs) {
            //Assign store1 to even and store2 to odd ISBNs

            await this.addSurah(surah)

        }

        const hifzs = await fs.readJson('data/hifz.json');
        //const books = JSON.stringify(data)

        console.log('Retrieved hifzs from json file and added to MongoDB hifzs Collection: ' + hifzs.length);

        for (const hifz of hifzs) {
            //Assign store1 to even and store2 to odd ISBNs

            await this.addHifz(hifz)

        }

    }




    async initHifzDB() {

        try {
            //Uncomment to empty the database
            await
                this.emptyDB();
            //If the db is empty then init the db with data in json files
            const hifzsCount = await
                this.gethifzCount();
            console.log(`Hifzs Count: ${hifzsCount}. Comment out emptyDB() to stop re-initializing the database`);
            if (hifzsCount == 0) {
                await
                    this.loadDataFromJsonFiles();
            }
        }
        catch (err) {
            console.log(err);
        }





    }
}

module.exports = new HifzRepository();