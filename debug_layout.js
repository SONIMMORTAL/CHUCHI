import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:5174/');
  await page.waitForTimeout(3000); // wait for framer motion

  // Take top screenshot
  await page.screenshot({ path: 'screenshot-top.png' });
  console.log("Captured top screenshot.");

  // Get positions
  const heroRect = await page.evaluate(() => document.getElementById('home')?.getBoundingClientRect());
  const nonprofitRect = await page.evaluate(() => document.getElementById('nonprofit')?.getBoundingClientRect());
  
  console.log("Hero Rect:", heroRect);
  console.log("Nonprofit Rect:", nonprofitRect);

  await page.evaluate(() => window.scrollBy(0, 1000));
  await page.waitForTimeout(1000); // wait for scroll

  await page.screenshot({ path: 'screenshot-scrolled.png' });
  console.log("Captured scrolled screenshot.");

  await browser.close();
})();
