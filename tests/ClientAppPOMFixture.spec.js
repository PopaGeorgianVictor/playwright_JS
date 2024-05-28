const { test, expect } = require('@playwright/test')
const { customtest } = require('../utils/test-base')
const {POManager} =  require('../pageobjects/POManager')
const dataset = JSON.parse(JSON.stringify(require("../utils/placeorderTestData.json"))) //json ->convert to string ->convert to js object


for(const data of dataset)
  {
    customtest(`ClientAppPomFixture`, async ({page,testDataForOrder})=>{ 

  const poManager = new POManager(page)
  //js file- Login js, DashboardPage

   const products = page.locator(".card-body")
   const loginPage = poManager.getLoginPage()
   await loginPage.goTo()
   await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password)
   const dashboardPage = poManager.getDashboardPage()
   await dashboardPage.searchProductAddCart(testDataForOrder.productName)
   await dashboardPage.navigateToCart()

  const cartPage = poManager.getCartPage()
  await cartPage.VerifyProductIsDisplayed(testDataForOrder.productName)
  await cartPage.Checkout()

  const ordersReviewPage = poManager.getOrdersReviewPage()
  await ordersReviewPage.searchCountryAndSelect("rom","Romania")
  const orderId = await ordersReviewPage.SubmitAndGetOrderId()
  console.log(orderId)
  await dashboardPage.navigateToOrders()
  const ordersHistoryPage = poManager.getOrdersHistoryPage()
  await ordersHistoryPage.searchOrderAndSelect(orderId)
  expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy()


})
}