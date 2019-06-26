describe('test that the button is clickable once the ajax loader completes loading', function() {
  //this first test won't work by design
    it('attempt to click the button asap', function(done) {
        browser.url('/Ajax-Loader/index.html');
        browser.click('#button155');
    });

    it('attempt to click the button after 7 seconds', function(done) {
        browser.url('/Ajax-Loader/index.html');
        this.timeout(20000); //increasing default timeout from 10 to 20 seconds
        browser.pause(7000); //pause to wait for ajax loader to finish loading
        browser.click('#button1');
        browser.pause(7000); //pause so we can visually confirm test when it runs
    });
});
