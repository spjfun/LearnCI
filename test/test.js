var assert = require("assert");

describe('Array', function(){
	describe('#indexOf()', function(){
		it('should return -1 when the value is not present', function(){
			
			// //一筆錯誤的測試 
			// //結果顯示 1 failing，測試沒通過，因為 [1,2,3].indexOf(0) 回傳的值不等於 -1
			// assert.equal(1, [1,2,3].indexOf(0));

			//一筆正確的測試 
			assert.equal(-1, [1,2,3].indexOf(0));

			//test-github-flow
			assert.equal(3, [1,2,3].indexOf(5))
		})
	})
})