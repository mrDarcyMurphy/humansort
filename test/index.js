var assert = require('assert')
var humansort = require('../index.js')

describe('humansort', function(){

  it('should be a function', function(){
    assert.equal(typeof humansort, 'function')
  })

  it('should sort numbers', function(){
    var numbers = [4, 7, 3, 67, 123, 6, 12345]
    var sortedNumbers = numbers.sort(humansort)
    assert.deepEqual(sortedNumbers, [ 3, 4, 6, 7, 67, 123, 12345 ])
  })

})
