describe('Test Radio Buttons Page', function() {
	browser.url("Dropdown-Checkboxes-RadioButtons/index.html");
		browser.setViewportSize({
			width: 1200,
			height: 800
		})

	it('Should be able to focus on radio button elements', function(done) {
		browser.pause(2000);
		browser.click('#checkboxes label:nth-of-type(1) [type]');
		var radioButtonOne = browser.hasFocus('#checkboxes label:nth-of-type(1) [type]');
		console.log('Radio button one has a value of: ' + radioButtonOne);
		expect(radioButtonOne, 'The checkbox (One) should have focus!').to.be.true;

		var radioButtonTwo = browser.hasFocus('#checkboxes label:nth-child(5) [type]');
		console.log('Radio button two has a value of: ' + radioButtonTwo);
		expect(radioButtonTwo, 'The radio (Two) should have focus!').to.be.false;
	});
});
