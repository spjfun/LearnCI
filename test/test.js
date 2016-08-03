var assert = require("assert");

describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			//一筆錯誤的測試 
			assert.equal(1, [1,2,3].indexOf(0));
		})
	})
})