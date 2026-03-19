const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } })
  await page.goto('http://127.0.0.1:5556/hm1.html', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)

  const imgs = await page.$$('.jp-OutputArea-output img')

  // Try index 4 - might be a nice 2D scatter with regression line
  const targetIdx = Math.min(4, imgs.length - 1)
  if (targetIdx >= 0) {
    const box = await imgs[targetIdx].boundingBox()
    if (box) {
      const vp = page.viewportSize()
      const scrollY = box.y + box.height / 2 - vp.height / 2
      await page.evaluate((y) => window.scrollTo(0, Math.max(0, y)), scrollY)
      await page.waitForTimeout(500)
    }
  }

  await page.screenshot({
    path: '/Users/yoavsborovsky/Documents/GitHub/private-website/src/assets/images/ml_projects.png',
    type: 'png',
  })

  await browser.close()
})()
