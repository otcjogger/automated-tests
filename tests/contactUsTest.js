var ContactUs_Page = require("../pageObjects/ContactUs_Page.js");

beforeEach(async() => {
	await browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', () => {

	it('Should be able to submit a successful submission via contact us form', () => {
		ContactUs_Page.submitAllInformationViaContactUsForm('joe', 'blogs', 'abc@mail.com', 'send nudes');
		ContactUs_Page.successfulSubmissionHeader.waitForDisplayed(3000);
		try {
			expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal("Thank You for your Message!");
		} catch(err) {
			console.log("Exception: " + err);
			assert.fail();
		}
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
		ContactUs_Page.setLastName('Jomes');
		ContactUs_Page.setEmailAddress('sarah_Jomes@mail.com');
		ContactUs_Page.clickSubmitButton();
		ContactUs_Page.unsuccessfulSubmissionHeader.waitForDisplayed(3000);
		try {
			expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.have.string("Error:")
		} catch(err) {
			console.log("Exception: " + err);
			assert.fail();
		}
	});
});
