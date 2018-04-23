var CustomersLogin=function(){
	
	this.loginCus=element.all(by.partialButtonText('Login'));
	this.dropdownField=element.all(by.id('userSelect'));
	
	this.selectCustomer=function(custLoginNm)
	{
	element.all(by.id('userSelect')).all(by.cssContainingText('option',custLoginNm)).click();
	};
	
	this.clickLogin=function(){
		this.loginCus.click();
		return require('./AccountPage');
	}
}
module.exports=new CustomersLogin();