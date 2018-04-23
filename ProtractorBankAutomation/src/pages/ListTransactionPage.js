var ListTransaction=function(){
	this.rows= element.all(by.css("table")).all(by.tagName("tr"));
	this.lastRow=element.all(by.tagName("tr")).last();
	
	this.resetBtn=element(by.partialButtonText('Reset'));
	this.backBtn=element(by.partialButtonText('Back'));
/*
	this.getLastRow=function(){
	rows.count().then(function(rowCount){
		element.all(by.tagName("tr")).last();
	})
	})
	*/
	
	this.clickResetBtn=function(){
		this.resetBtn.click();
	}
	
	this.clickBackBtn=function(){
		this.backBtn.click();
	}
}
module.exports=new ListTransaction();