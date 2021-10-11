const expect = require('chai').expect;
const request = require('supertest');

const app = require('../app.js');

describe('POST /information',()=>{
    it('OK, getting amount of the user',(done)=>{
        request(app).post('/information')
        .send({email:"user1@test.com"})
        .then(res=>{
            const body = res.body;
            expect(body).to.contain.property('amount');
            done();
        })
    })

});

describe('POST /information',()=>{
    it('OK, getting an empty {} json',(done)=>{
        request(app).post('/information')
        .send({email:"user1@fail.com"})
        .then(res=>{
            const body = res.body;
            expect(Object.keys(body)).to.have.lengthOf(0);
            done();
        })
    })

});