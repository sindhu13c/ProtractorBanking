var Manager=function(){
	this.addCusBtn=element(by.partialButtonText('Add'));
	this.openAcc=element(by.partialButtonText('Open'));
	this.cusBtnInMan=element(by.partialButtonText('Customers'));
	
	this.clickaddBtn=function(){
		this.addCusBtn.click();
		return require('./AddCustomerPage.js')
	}
	
	this.clickopenBtn=function(){
		this.openAcc.click();
		return require('./OpenAccount.js')
	}
	
	this.clickcusBtn=function(){
		this.cusBtnInMan.click();
		return require('./CustomersPage.js')
	}
	
}
module.exports=new Manager();