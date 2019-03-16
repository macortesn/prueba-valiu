var expect  = require('chai').expect;
var request = require('request');
var chai = require('chai');
chai.use(require('chai-json'));


it('COP TO EUR value', function(done) {
    request({uri:'http://35.198.4.18:3000/rates/convert',qs:{from:"COP", to:"EUR", amount:"2500"}},  function(error, response, body) {
        expect(JSON.parse(body).data.result).approximately(0.7,0.01);

        done();
    });
});

it('COP TO EUR Rate', function(done) {
    request({uri:'http://35.198.4.18:3000/rates/convert',qs:{from:"COP", to:"EUR", amount:"2500"}},  function(error, response, body) {
        expect(JSON.parse(body).data.rate).approximately(0.00,0.01);
        done();
    });
});


it('EUR TO USD value', function(done) {
    request({uri:'http://35.198.4.18:3000/rates/convert',qs:{from:"EUR", to:"USD", amount:"1"}},  function(error, response, body) {
        expect(JSON.parse(body).data.result).approximately(1.13,0.01);
        done();
    });
});

it('USD TO VEF value', function(done) {
    request({uri:'http://35.198.4.18:3000/rates/convert',qs:{from:"USD", to:"VEF", amount:"2"}},  function(error, response, body) {
        expect(JSON.parse(body).data.result).approximately(19.97,0.01);
        done();
    });
});



it('KGS TO PAB value', function(done) {
    request({uri:'http://35.198.4.18:3000/rates/convert',qs:{from:"KGS", to:"PAB", amount:"12"}},  function(error, response, body) {
        expect(JSON.parse(body).data.result).approximately(0.17,0.01);
        done();
    });
});
