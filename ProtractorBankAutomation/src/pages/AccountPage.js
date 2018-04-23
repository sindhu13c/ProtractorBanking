
var Account=function(){
	this.welcomeMsg=element.all(by.cssContainingText('strong','Welcome'));
	//this.defaultAccNo=element.all(by.css('option[selected="selected"]'));
	this.defaultAccNo=element.all(by.cssContainingText('strong','1004'));
	this.dollarlabel=element.all(by.cssContainingText('strong','Dollar'));
	this.poundlabel=element.all(by.cssContainingText('strong','Pound'));
	this.rupeelabel=element.all(by.cssContainingText('strong','Rupee'));
	this.balancelabel=element.all(by.cssContainingText('strong','2000'));
	
	this.transactBtn=element(by.partialButtonText('Transaction'));
	this.depositBtn=element(by.partialButtonText('Deposit'));
	this.withdrawBtn=element(by.partialButtonText('Withdraw'));
	this.logoutBtn=element(by.partialButtonText('Logout'));

	this.withdrawBtn2=element.all(by.partialButtonText('Withdraw')).get(1);
	
	this.depositAmtField=element(by.model('amount'));
	this.depositBtn2=element.all(by.partialButtonText('Deposit')).get(1);
	
	this.error=element(by.className('error ng-binding'));



	this.selectAccount=function(accNo)
	{
		element.all(by.id('accountSelect')).all(by.cssContainingText('option',accNo)).click();
	};
	
	this.clickTransaction=function()
	{
		this.transactBtn.click();
		return require('./ListTransactionPage.js');
	}
	
	this.clickDeposit=function()
	{
		this.depositBtn.click();
	}
	
	this.enterDeposit=function(depAmt)
	{
		this.depositAmtField.sendKeys(depAmt);
	}
	
	this.enterWithdraw=function(withdrawAmt)
	{
		this.depositAmtField.sendKeys(withdrawAmt);
	}
	
	
	this.clickDepositBtn=function()
	{
		this.depositBtn2.click();
	}
	
	this.clickWithdrawBtn=function()
	{
		this.withdrawBtn.click();
	}
	
	this.clickWithdrawBtn2=function()
	{
		this.withdrawBtn2.click();
	}
	
	this.clickLogout=function()
	{
		this.logoutBtn.click();
	}
	


}
module.exports=new Account();