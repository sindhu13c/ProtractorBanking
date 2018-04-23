var AddCustomer=function(){
	this.firstName=element(by.model('fName'));
	this.lastName=element(by.model('lName'));
	this.postCode=element(by.model('postCd'));
	this.addCus=element.all(by.partialButtonText('Add')).get(1);

	this.enterFirstName=function(fNm){
		this.firstName.sendKeys(fNm);
		return this;
	}
	
	this.enterLastName=function(lNm){
		this.lastName.sendKeys(lNm);
		return this;
	}
	
	this.enterPostCode=function(pCode){
		this.postCode.sendKeys(pCode);
		return this;
	}
	this.clickaddCus=function(){
		this.addCus.click();
		//return this.browser.alert();
		//return this;
		//browser.sleep(4000);
		//return browser.switchTo().alert();
	}
	this.getAlertText=function(){
		return browser.switchTo().alert();
	}
	
	
	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
	}
	
}
module.exports=new AddCustomer();