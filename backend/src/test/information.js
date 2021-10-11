
const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app.js');
const conn = require('../utils/db.js')

require('dotenv').config();

describe('POST /information', () => {

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

    it('OK, getting amount of the user', (done) => {
        request(app).post('/information')
            .send({ email: "user1@test.com" })
            .then(res => {
                const body = res.body;
                expect(body).to.contain.property('amount');
                done();
            }).catch((err) => done(err));
    });

    it('OK, getting an empty {} json', (done) => {
        request(app).post('/information')
            .send({ email: "user1@fail.com" })
            .then(res => {
                const body = res.body;
                expect(Object.keys(body)).to.have.lengthOf(0);
                done();
            }).catch((err) => done(err));
    });
});