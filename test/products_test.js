var chai = require('chai'); //modulo de chai
var expect = chai.expect;
var productController = require('../controllers/products'); // controlador 

describe('#products',function(){
	it('Should get all products',function(done){
		var products = productController.findProducts;
		    expect(products).to.be.a('array');
		  	expect(products).to.have.all.keys('Nombre','Precio','Cantidad', 'Like', 'Dislike', 'Imagen');
		    expect(products).should.be.a.json;
		    done();
	});
});