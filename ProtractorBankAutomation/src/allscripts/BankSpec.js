var data=require(process.cwd()+'/src/utility/BankData.json')
var login=require(process.cwd()+'/src/pages/LoginPage.js')
describe('Banking e2e automation',function(){
	beforeEach(function() {
		browser.get(data.url);
		browser.manage().window().maximize();
	});
	
	it('login page',function(){
		browser.sleep(4000);
		expect(login.cusBtn.isPresent()).toBeTruthy();
		expect(login.manBtn.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	it('Manager Login page',function(){
		//click Manager login
		var manager=login.clickManBtn();
		expect(manager.addCusBtn.isPresent()).toBeTruthy();
		expect(manager.openAcc.isPresent()).toBeTruthy();
		expect(manager.cusBtnInMan.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	it('Add Customer',function(){
		browser.sleep(4000);
		var manager=login.clickManBtn();
		console.log('manager clicked');
		browser.sleep(2000);
		//click add customer button
		var addMan=manager.clickaddBtn();
		console.log('add manager clicked');
		addMan.enterFirstName(data.firstName);
		addMan.enterLastName(data.lastName);
		addMan.enterPostCode(data.postCode);
		//click add customer after entering details
		addMan.clickaddCus();
		//console.log('alert message');
		//browser.sleep(6000);
		var alertText=addMan.getAlertText();
		//validate alert message
		alertText.getText().then(function(text){
			expect(text).toContain(data.expAlertmsgAddCustomer);
		});
		addMan.acceptAlert();
		browser.sleep(4000);
	});
	it('Open Account Dollar',function(){
		var manager=login.clickManBtn();
		//click open account
		var addMan=manager.clickopenBtn();
		//select customer
		addMan.selectCustomer(data.openaccountCusNm);
		browser.sleep(6000);
		//select currency as dollar
		addMan.selectCurrency(data.selectdollar);
		//click process button
		addMan.clickprocessBtn();
		browser.sleep(6000);
		var alertText=addMan.getAlertText();
		//validate alert message
		alertText.getText().then(function(text){
			expect(text).toContain(data.expAlertMsgopenaccount);
		});
		addMan.acceptAlert();
		browser.sleep(4000);
	});
	it('Open Account Pound',function(){
		var manager=login.clickManBtn();
		//click open account
		var addMan=manager.clickopenBtn();
		//select customer
		addMan.selectCustomer(data.openaccountCusNm);
		browser.sleep(2000);
		//select currency as dollar
		addMan.selectCurrency(data.selectpound);
		//click process button
		addMan.clickprocessBtn();
		browser.sleep(6000);
		var alertText=addMan.getAlertText();
		//validate alert message
		alertText.getText().then(function(text){
			expect(text).toContain(data.expAlertMsgopenaccount);
		});
		addMan.acceptAlert();
		browser.sleep(4000);
	});
	it('Open Account Rupee',function(){
		var manager=login.clickManBtn();
		//click open account
		var addMan=manager.clickopenBtn();
		//select customer
		addMan.selectCustomer(data.openaccountCusNm);
		browser.sleep(2000);
		//select currency as dollar
		addMan.selectCurrency(data.selectrupee);
		//click process button
		addMan.clickprocessBtn();
		browser.sleep(6000);
		var alertText=addMan.getAlertText();
		//validate alert message
		alertText.getText().then(function(text){
			expect(text).toContain(data.expAlertMsgopenaccount);
		});
		addMan.acceptAlert();
		browser.sleep(4000);
	});
	it('Delete Customer',function(){
		var manager=login.clickManBtn();
		//click customer
		browser.sleep(4000);
		var customer=manager.clickcusBtn();
		//select customer
		customer.enterCustomerName(data.deleteCusfirstName);
		browser.sleep(4000);
		customer.deleteCustomer();

		browser.sleep(4000);
	});
	it('Customer Login',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//verify account page
		expect(account.welcomeMsg.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	it('Verify Currency Type',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//verify account page
		//expect(account.defaultAccNo).toBe("1004");
		expect(account.defaultAccNo.isPresent()).toBeTruthy();
		expect(account.dollarlabel.isPresent()).toBeTruthy();
		//select account no : 1005
		account.selectAccount(data.accNoPound);
		expect(account.poundlabel.isPresent()).toBeTruthy();
		//select account no : 1006
		account.selectAccount(data.accNoRupee);
		expect(account.rupeelabel.isPresent()).toBeTruthy();

		browser.sleep(4000);
	});
	it('Customer Initial Transaction',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//click Transaction
		var transactionResult=account.clickTransaction();
		//verify no data available
		transactionResult.rows.count().then(function(rowCount){
			expect(rowCount).toBe(1);
		})
		
		browser.sleep(4000);
	});
	it('Deposit Money',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		//verify balance
		expect(account.balancelabel.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	it('Transaction After Deposit',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		browser.sleep(6000);
		//click Transaction
		var transactionResult=account.clickTransaction();
		//select least row
		//verify least row data
		browser.sleep(6000);
		transactionResult.lastRow.getText().then(function(text){
			expect(text).toContain("Credit");
			expect(text).toContain("2000");
		})
		
		browser.sleep(6000);
	});
	
	it('Withdraw Error',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click withdraw
		account.clickWithdrawBtn();
		//enter withdraw amount
		account.enterWithdraw(data.withdrawAmountMore);
		//click withdraw btn
		account.clickWithdrawBtn2();
		//verify error message
		browser.sleep(6000);
		account.error.getText().then(function(text){
			expect(text).toContain(data.withdrawError)
		})
		browser.sleep(4000);
	});
	
	it('Withdraw Success',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		//click withdraw
		account.clickWithdrawBtn();
		//enter withdraw amount
		account.enterWithdraw(data.withdrawAmount);
		//click withdraw btn
		account.clickWithdrawBtn2();
		//verify success message
		account.error.getText().then(function(text){
			expect(text).toContain(data.withdrawSuccess)
		})
		browser.sleep(4000);
	});
	
	it('Transaction After Withdraw',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		browser.sleep(4000);
		//click withdraw
		account.clickWithdrawBtn();
		//enter withdraw amount
		account.enterWithdraw(data.withdrawAmount);
		//click withdraw btn
		account.clickWithdrawBtn2();
		browser.sleep(4000);
		//click Transaction
		var transactionResult=account.clickTransaction();
		//select least row
		//verify least row data
		browser.sleep(4000);
		transactionResult.lastRow.getText().then(function(text){
			expect(text).toContain("Debit");
			expect(text).toContain("1000");
		})
		
		browser.sleep(4000);
	});
	
	it('Transaction Reset',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		//click Transaction
		browser.sleep(4000);
		var transactionResult=account.clickTransaction();
		browser.sleep(4000);
		//click reset
		transactionResult.clickResetBtn();
		//verify empty table
		browser.sleep(4000);
		transactionResult.rows.count().then(function(rowCount){
			expect(rowCount).toBe(1);
		})
		
		browser.sleep(4000);
	});
	
	it('Transaction Back',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click deposit tab
		account.clickDeposit();
		//enter deposit amount
		account.enterDeposit(data.depositAmount);
		//click deposit button
		account.clickDepositBtn();
		//click Transaction
		browser.sleep(4000);
		var transactionResult=account.clickTransaction();
		browser.sleep(4000);
		//click reset
		transactionResult.clickBackBtn();
		browser.sleep(4000);
		//verify home page
		expect(account.welcomeMsg.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	
	it('Logout',function(){
		var customer=login.clickCusBtn();
		//select customer name
		customer.selectCustomer(data.custLoginNm);
		//click login
		var account=customer.clickLogin();
		//select account no:1006
		account.selectAccount(data.accNoRupee);
		//click logout
		account.clickLogout();
		//verify select customer page
		expect(customer.dropdownField.isPresent()).toBeTruthy();
		browser.sleep(4000);
	});
	
	
});