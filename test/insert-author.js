const assert = require('assert');
var authorModel = require('../02-schema-and-model/author');

describe('run demo insert author', () => {
    // it('Check Result', (done) => {
    //     var tacgia = new authorModel({
    //         name: 'Mr.D',
    //         age: 22,
    //         books: [
    //             {title: 'React', pageNumber: 100},
    //             {title: 'Nodejs', pageNumber: 90}
    //         ]
    //     });

    //     tacgia.save().then(() => {
    //         assert(tacgia.isNew === false);
    //         done();
    //     });
    // });
    it('Insert book', (done) => {
        authorModel.findOne({name: 'Mr.D'}).then((record) => {
            record.books.push({title: 'TypeScript', pageNumber: 99});
            record.save().then((result) => {
                
                    assert(result.books.length === 9);
                    done();
                
            });
        });
    });
});