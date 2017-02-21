const expect = require('chai').expect;
const dcNames = require('./index');

describe('dc-names' , () => {

  describe('all' , () => {
    it('should be a string array' , () => {
      expect(dcNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(it => typeof it == 'string');
      }
    });
  });

  describe('random' , () => {
    it('should bring a name from dcNames.all' , () => {
      expect(dcNames.all).to.include.members([dcNames.random()]);
    });
  });

});
