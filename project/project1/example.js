var Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

nightmare
  .goto('https://duckduckgo.com')
  .type('#search_form_input_homepage', 'yahoo')
  .click('#search_button_homepage')
  .wait(5000)
  .back()
  .type('#search_form_input_homepage', 'google')
  .click('#search_button_homepage')
  .wait(5000)
  .back()
  .wait('#r1-0 a.result__a')
  .evaluate(() => document.querySelector('#r1-0 a.result__a').href)
  .then(console.log)
  .catch((error) => {
    console.error('Search failed:', error);
  });