const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app.js');
const conn = require('../utils/db.js')

require('dotenv').config();

describe('PATCH /loan', () => {
    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    })

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    })

    it('OK, Loan exceed amount of 1000$ ', (done) => {
        request(app).patch('/loan')
            .send({ email: "user1@test.com", amount: 200 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('error');
                expect(body.error).to.equal('100')
                done();
            }).catch((err) => done(err));
    })

    it('OK, Loan exceed doesn\'t exceed 1000 ', (done) => {
        request(app).patch('/loan')
            .send({ email: "user2@test.com", amount: 100 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('status');

                expect(body.status).to.equal('succeed');
                done();
            }).catch((err) => done(err));
    })

    it('OK, New users can\' loan more than 50$ ', (done) => {
        request(app).patch('/loan')
            .send({ email: "user3@test.com", amount: 100 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('error');
                expect(body.error).to.equal('101')
                done();
            }).catch((err) => done(err));
    });

    it('OK, New users can loan less than 50$ ', (done) => {
        request(app).patch('/loan')
            .send({ email: "user3@test.com", amount: 50 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('status');
                expect(body.status).to.equal('succeed')
                done();
            }).catch((err) => done(err));
    });
    
    
});
