var Login=function(){
	
	this.cusBtn=element(by.partialButtonText('Customer'));
	this.manBtn=element(by.partialButtonText('Manager'));
	
	this.clickManBtn=function(){
		this.manBtn.click();
		return require('./ManagerLoginPage.js');
	}
	
	this.clickCusBtn=function(){
		this.cusBtn.click();
		return require('./CustomersLoginPage.js');
	}
	
}
module.exports=new Login();