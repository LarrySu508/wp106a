const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ray-lancer.000webhostapp.com/');
  await page.screenshot({path: 'example.png', fullPage:true});

  await browser.close();
})();