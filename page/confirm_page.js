require ('../page/home_page.js');

var confirm_page = function() {
	
	this.getTitle = function(index){
		return element(by.css('h1')).getText();
	};
	
	this.clickBackToHome = function(){
		element(by.buttonText("BACK TO HOME")).click();
		return require('./home_page.js');
	};
};
module.exports = new confirm_page();