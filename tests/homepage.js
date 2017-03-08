module.exports = {
  'Load Homepage' : function (browser) {
    browser
      .url('http://www.asos.com')
      .waitForElementVisible('body', 1000)
      .assert.elementPresent("a#logo");
    },
    'Search for bikini' : function (browser) { 
      browser.setValue('input.search-box[type=text]', 'bikini')
      .click('a.go')
      .pause(1000)
      .assert.containsText('h1.search-term', 'Bikini')
      .click('li.product-container:nth-child(3) a:first-child')
      .pause(1000)
      .assert.elementPresent('a.add-button')
      .end();
    }
};

