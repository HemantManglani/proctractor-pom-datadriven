var home_page = require('../page/home_page.js');
var test_data = require('../data/test_data.js');
var using = require('jasmine-data-provider');

describe ('Adopt an animal - Angular JS site', function(){
	
	it ('Open browser - Angular JS site', function(){
		browser.get('http://www.thetestroom.com/jswebapp');
		expect(browser.getCurrentUrl()).toContain('jswebapp');
				
	});
	
	using(test_data.testData, function (data){
	it ("Should be ablt to use page-object", function(){
		home_page.enterFieldValue(data.welcome);
		var getText = home_page.getDynamicText();
		expect(getText).toBe(data.welcome);
		var animal_page = home_page.clickContinue();
		
		animal_page.selectAnimal(data.index);
		var confirm_page = animal_page.clickContinue();
		expect(confirm_page.getTitle()).toBe(data.expectedConfirmValue);
		confirm_page.clickBackToHome();
		});
	});
});