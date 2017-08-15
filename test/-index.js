var should = require('chai').should();
require('../index');
function sayLine(){
	return __line;
}
describe('Line Number', function(){
	it('Line Number', function(){
		__line.should.equal(8);
	})
});