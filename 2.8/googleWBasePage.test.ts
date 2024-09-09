//fill out a page object to google your favorite show or candy
//create a test and use your page object that is extending your base page to run it.

import { Google } from "./googlePage";
const fs = require('fs');
const page = new Google();

test ('do a search', async() => {
    await page.navigate();
    await page.search('Shark Tank');
    let pageResult = await page.getResults();
    expect(pageResult).toContain('Shark Tank');
    await fs.writeFile('${__dirname}/Shark Tank.png',
        await page.driver.takeScreenshot(), "base64",
        (e) => {
            if (e) console.error(e)
            else console.log ('This is an interesting show to watch');
        });
        await page.driver.quit();
});