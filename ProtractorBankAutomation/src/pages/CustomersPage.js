var Customer=function(){
	this.customerName=element(by.model('searchCustomer'));
	this.delCus=element.all(by.partialButtonText('Delete'));
	
	this.enterCustomerName=function(fNm){
		this.customerName.sendKeys(fNm);
		return this;
	}
	
	this.deleteCustomer=function(){
		this.delCus.click();
	}
}
module.exports=new Customer();