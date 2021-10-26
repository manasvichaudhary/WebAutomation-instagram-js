// node InstaAutomation.js --url=https://www.instagram.com/ --config=config.json

let minimist = require("minimist");
let puppeteer = require("puppeteer");
let fs = require("fs");

let args = minimist(process.argv);

let configJSON = fs.readFileSync(args.config, "utf-8");
let configJSO = JSON.parse(configJSON);

async function run() {
    // start the browser
    let browser = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ],
        defaultViewport: null
    });


// get the tab
let pages = await browser.pages();
let page = pages[0];

// open the url
await page.goto(args.url);

// type userid
await page.waitForSelector("input[aria-label='Phone number, username, or email']");
await page.type("input[aria-label='Phone number, username, or email']", configJSO.username, {delay:20});

//type password
await page.waitForSelector("input[aria-label='Password']");
await page.type("input[aria-label='Password']", configJSO.password, {delay:20});

//click on login
await page.waitForSelector("div[class='            qF0y9          Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              ']");
await page.click("div[class='            qF0y9          Igw0E     IwRSH      eGOV_         _4EzTm                                                                                                              ']");

await page.waitFor(4000);

//click on safe info or not now
await page.waitForSelector("button[class='sqdOP yWX7d    y3zKF     ']");
await page.click("button[class='sqdOP yWX7d    y3zKF     ']");

await page.waitFor(3000);

//click on turn on notification or not now 
await page.waitForSelector("button[class='aOOlW   HoLwm ']");
await page.click("button[class='aOOlW   HoLwm ']");

//click on search then type NAME 1
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search1, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

//click on search then type NAME 2
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search2, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

//click on search then type NAME 3
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search3, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

//click on search then type NAME 4
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search4, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

//click on search then type NAME 5
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search5, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

//click on search then type NAME 6
await page.waitForSelector("input[placeholder='Search']");
await page.click("input[placeholder='Search']");
await page.type("input[placeholder='Search']", configJSO.search6, {delay:10});

//click name
await page.waitForSelector("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");
await page.click("div[class='_7UhW9   xLCgt       qyrsm KV-D4          uL8Hv         ']");

//follow
await page.waitForSelector("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");
await page.click("button[class='_5f5mN       jIbKX  _6VtSN     yZn4P   ']");

await page.waitFor(3000);

}

run();

