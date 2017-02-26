require ('../page/confirm_page.js');

var animal_page = function() {
	
	this.selectAnimal = function(index){
		element(by.model("animal")).$('[value="' +index + '"]').click();
	};
	
	this.clickContinue = function(){
		element(by.buttonText("CONTINUE")).click();
		return require('./confirm_page.js');
	};
};
module.exports = new animal_page();