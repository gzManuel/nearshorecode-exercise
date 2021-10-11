const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app.js');
const conn = require('../utils/db.js')

require('dotenv').config();

describe('PATCH /payments', () => {

    before((done) => {
        conn.connect()
            .then(() => done())
            .catch((err) => done(err));
    });

    after((done) => {
        conn.close()
            .then(() => done())
            .catch((err) => done(err));
    });

    it('OK, Email is new, cannot accept payment. ', (done) => {
        request(app).patch('/payments')
            .send({ email: "user3@test.com", amount: 200 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('error');
                expect(body.error).to.equal('101')
                done();
            }).catch((err) => done(err));
    });

    it('OK, Amount greater than debt, we cannot accept payment ', (done) => {
        request(app).patch('/payments')
            .send({ email: "user2@test.com", amount: 901 })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('error');
                expect(body.error).to.equal('100')
                done();
            }).catch((err) => done(err));
    });

    it('OK, The user is old, and the amount is acceptable', (done) => {
        request(app).patch('/payments')
            .send({ email: "user2@test.com", amount: 900 })
            .then(res => {

                const body = res.body;
                expect(body).to.contain.property('status');
                expect(body.status).to.equal('succeed');
                done();
            }).catch((err) => done(err));
    });
});