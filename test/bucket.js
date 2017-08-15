//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();


describe('#Test for bucket apis', function(){

	beforeEach((done) => { 
	    chai.use(chaiHttp);  
	    done();
	});

	describe('Test for /bucket api', function(){
		//
	});

	describe('Test for /buckets api', function(){
		it('it should return array of bucket list', (done) => {
			chai.request(app)
			.get('/buckets')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body[0].should.be.a('object');
				done();
			});
		});
	});

	describe('Test for /bucket/:id api', function(){
		
	});
		
});