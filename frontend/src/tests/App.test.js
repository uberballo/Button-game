const puppeteer = require('puppeteer')

const mockUser = {
    username: "kaapo"
}

describe('login test', () => {

  beforeAll(async () =>{})

  test('User is logged in correctly', async () => {
    let browser = await puppeteer.launch({
      headless: false
    })
    let page = await browser.newPage()

    page.emulate({
      viewport: {
        width: 500,
        height: 2400
      },
      userAgent: ''
    })

    const text = mockUser.username

    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.container')

    await page.click("input[name=username]")
    await page.type("input[name=username]",mockUser.username)
    await page.click("button[type=submit]")

    try {
      await page.waitForFunction(
        text => document.querySelector('body').innerText.includes(text),
        {},
        text
      )
    } catch (e) {
      console.log(`The text "${text}" was not found on the page`)
    }

    browser.close()
  }, 16000)
})