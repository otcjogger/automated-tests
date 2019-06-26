beforeEach(function() {
  browser.url("/Accordion/index.html");
})

describe('Verify that the correct text appears on the accordian page', function() {
  it('Verify loading complete text is visible after a set duration of time', function() {
    this.timeout(20000);
    elem = $('#hidden-text');
    console.log("Current Text " + elem.getText());
    elem.waitForText(1000);

    //#hidden-text doesn't equal LOADING COMPLETE. Pause for 1 second (since this is a while loop, it will keep pausing until the text does equal LOADING COMPLETE.)
    while(elem.getText() != 'LOADING COMPLETE.') {
      browser.pause(1000);
    }
    console.log(elem.getText());
  });
});
