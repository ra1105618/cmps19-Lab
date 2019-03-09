const Donation = require('./BookDonationAsync')
const expect = require('chai').expect;





/*


describe("Testing getBook", async function () {

    it('getBook', async function () {
        let book = await Donation.getBook('"Unlocking Android"');




    })
})

describe("Testing getAuthor", async function () {

    it('getAuthor', async function () {
        let book = await Donation.getAuthorBooks("W. Frank Ableson");




    })
})
*/

describe("Testing getAuthorBookCount", async function () {

    it('getAuthorBookCount', async function () {
        let book = await Donation.getAuthorsBookCount();




    })
})

/*describe("Testing getBookPageCount", async function () {

    it('getBookPageCount', async function () {
        let book = await Donation.getBooksWIthPageCountMoreThanX(500);




    })
})


describe("Testing getBookbyCategory", async function () {

    it('getBookbyCategory', async function () {
        let book = await Donation.getBookCategory("Java");




    })
})*/

