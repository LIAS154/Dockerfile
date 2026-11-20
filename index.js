const express = require('express');
const { chromium } = require('playwright');
const app = express();

app.get('/', async (req, res) => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  const title = await page.title();
  await browser.close();
  res.send(`取得したタイトル: ${title}`);
});

app.listen(process.env.PORT || 3000);
