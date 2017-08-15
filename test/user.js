//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();


describe('Test for user apis', function(){

	beforeEach((done) => { 
	    chai.use(chaiHttp);  
	    done();
	});
	
	describe('Test for /user api', function(){
		//
	});

	describe('Test for /users api', function(){
		it('it should return array of user list', (done) => {
			chai.request(app)
			.get('/users')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body[0].should.be.a('object');
				done();
			});
		});
	});

	describe('Test for /user/:id api', function(){
		
	});
		
});