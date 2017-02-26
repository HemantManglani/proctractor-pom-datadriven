describe ('Adopt an animal - Angular JS site', function(){
	
	it ('Open browser - Angular JS site', function(){
		browser.get('http://www.thetestroom.com/jswebapp');
		expect(browser.getCurrentUrl()).toContain('jswebapp');
				
	});
	
	xit ('Enter text - Angular JS site', function(){
		var textMsg = "Hemant blllaaaa blllaaaa blaaaaa";
		element(by.model("person.name")).sendKeys(textMsg);
		
		var greeting = element(by.binding('person.name'));
		greeting.getText().then(function(text){
			console.log(text);
		});
		
		expect(greeting.getText()).toEqual('Hemant blllaaaa blllaaaa blaaaaa');
		element(by.buttonText("CONTINUE")).click();
		
	});
	
	var home_page = require('../page/home_page.js');
	it ("Should be ablt to use page-object", function(){
		home_page.enterFieldValue("hi Hemant");
		var getText = home_page.getDynamicText();
		expect(getText).toBe("hi Hemant");
		var animal_page = home_page.clickContinue();
		
		animal_page.selectAnimal(2);
		var confirm_page = animal_page.clickContinue();
		expect(confirm_page.getTitle()).toBe('Thank you');
		confirm_page.clickBackToHome();
	});
	
	xit ('Select list value & confirm - Angular JS site', function(){
		
		element(by.model("animal")).$('[value="1"]').click();	
		element(by.partialButtonText("CONT")).click();
		expect(browser.getCurrentUrl()).toContain('confirm');
	});
	
	xit ('Select list value & confirm - Angular JS site', function(){
		
		animal_page.selectAnimal(2);
		animal_page.clickContinue();
		
		//expect(browser.getCurrentUrl()).toContain('confirm');
	});
	
	
});