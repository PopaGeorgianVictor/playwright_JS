const { test, expect, request } = require('@playwright/test')
const {APIUtils} = require('./utils/APIUtils')

const loginPayLoad = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}
const orderPayload ={"orders":[{country:"Romania",productOrderedId:"6581ca979fd99c85e8ee7faf"}]}
let response
const fakePayLoadOrders = {data:[],message:"No Orders"}

test.beforeAll ( async() =>

{
    // Login API
    const apiContext = await request.newContext()
    const apiUtils = new APIUtils(apiContext,loginPayLoad)
    response = await apiUtils.createorder(orderPayload)


})



//create order is success

test.only('Place the orderrrrr', async ({page})=>{

  await page.addInitScript(value => {
  window.localStorage.setItem('token',value) // script take 2 argument , first is function , second is parameter

 }, response.token) // token is a key-value pair , value is argument , token is a second argument
  
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/620c7bf148767f1f1215d2ca",
    async  route=>{

       const response = await page.request.fetch(route.request())
       let body = fakePayLoadOrders
       route.fulfill({
        response,
        body
       })
          //intercepting response - API response ->{pw fakeresponse}-> browser ->render data on front end

            }
    ) // first argument is which element want to route, second is how to route
    await page.locator("button[routerlink*='myorders']").click()
    console.log(await page.locator(".mt-4").textContent())
  
   await page.waitForTimeout(3000)


})

