var OpenAccount=function(){
	this.processBtn=element(by.partialButtonText('Process'));
	
	this.clickprocessBtn=function(){
		this.processBtn.click();
	}
	
	this.selectCustomer=function(custNm)
	{
	element.all(by.id('userSelect')).all(by.cssContainingText('option',custNm)).click();
	
	};
	
	
	this.selectCurrency=function(curNm)
	{
				var elems=element.all(by.id('currency'));
				elems.all(by.cssContainingText('option',curNm)).click();
	}
	
	this.getAlertText=function(){
		return browser.switchTo().alert();
	}
	
	
	this.acceptAlert=function(){
		browser.switchTo().alert().accept();
	}
};
module.exports=new OpenAccount();

