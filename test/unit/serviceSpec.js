'use strict';

describe('Dashboard services', function() {


  // load modules
  beforeEach(module('greenBoard'));

  // Test service availability
  describe('View Service', function(){

      it('check the existence of View factory', inject(function(View) {
          expect(View).toBeDefined();
       }));

      it('check full timeline results', inject(function(View) {
          View.get({}, function(data){
              dump(data);
              expect(View).toBeDefined();
          });
       }));
  });

});
