const puppeteer = require('puppeteer');

var folder = process.argv[2];
console.log('Printing '+folder);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost/2018/bpm/ASQ/upload/'+folder+'/index-svginjected.html?print', {waitUntil: 'networkidle2'});
  await page.emulateMedia('print');
  //console.log(await page.evaluate(`displayAsqSolutions()`));
  await page.pdf({path: ''+folder+'.pdf', format: 'A4', scale: 0.75});

  await browser.close();
})();