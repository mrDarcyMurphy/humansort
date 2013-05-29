var assert = require('assert')
var humansort = require('../index.js')

describe('humansort', function(){

  it('should be a function', function(){
    assert.equal(typeof humansort, 'function')
  })

  it('should sort numbers', function(){
    var unsorted = [4, 7, 3, 67, 123, 6, 12345]
    var sorted = unsorted.sort(humansort)
    assert.deepEqual(sorted, [ 3, 4, 6, 7, 67, 123, 12345 ])
  })

  it('should sort letters', function(){
    var unsorted = ['kjrtuoivcnse', 'skfjh', 'efiufbsd', 'wehjkbf', 'kus', 'asldkjfh']
    var sorted = unsorted.sort(humansort)
    assert.deepEqual(sorted, ["asldkjfh","efiufbsd","kjrtuoivcnse","kus","skfjh","wehjkbf"])
  })

  it('should sort letters and numbers', function(){
    var unsorted = ['kjrtuoivcnse', 4, 7, 3, 6, 12345, 'skfjh', 67, 123, 'efiufbsd', 'wehjkbf', 'kus', 'asldkjfh']
    var sorted = unsorted.sort(humansort)
    assert.deepEqual(sorted, [3,4,6,7,67,123,12345,"asldkjfh","efiufbsd","kjrtuoivcnse","kus","skfjh","wehjkbf"])
  })

  it('should sort mixed strings', function(){
    var unsorted = ['#a345!sdfjh', 'skfjh', '456675efiufbsd', 'wh$ehjkbf', 'kus', '1kus', 'kus1', 'asldkjfh']
    var sorted = unsorted.sort(humansort)
    assert.deepEqual(sorted, ["#a345!sdfjh","1kus","456675efiufbsd","asldkjfh","kus","kus1","skfjh","wh$ehjkbf"])
  })

  it('should sort BSON IDs', function(){
    var unsorted = ['51a523b0bbe4ba6df6000016', '51a523b0bbe4ba6df600000a', '51a523b0bbe4ba6df6000010']
    var sorted = unsorted.sort(humansort)
    assert(sorted, ['51a523b0bbe4ba6df600000a', '51a523b0bbe4ba6df6000010', '51a523b0bbe4ba6df6000016'])
  })

})
