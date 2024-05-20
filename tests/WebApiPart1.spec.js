const { test, expect, request } = require('@playwright/test')
const {APIUtils} = require('./utils/APIUtils')

const loginPayLoad = {userEmail: "anshika@gmail.com", userPassword: "Iamking@000"}
const orderPayload ={"orders":[{country:"Romania",productOrderedId:"6581ca979fd99c85e8ee7faf"}]}
// let token
// let orderId
let response

test.beforeAll ( async() =>

{
    // Login API
    const apiContext = await request.newContext()
    const apiUtils = new APIUtils(apiContext,loginPayLoad)
    response = await apiUtils.createorder(orderPayload)



    // const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,{data:loginPayLoad})
    // expect(loginResponse.ok()).toBeTruthy()
    // const loginResponseJson = await loginResponse.json()
    // token = loginResponseJson.token
    // console.log(token)


//     const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
//     {
//       data : orderPayload,
//       headers: {
//               'Authorization': token,
//               'Content-Type': 'application/json'
//       },
//     })
//    const orderResponseJson =  await orderResponse.json()
//    console.log(orderResponseJson)
//    orderId = orderResponseJson.orders[0]


// })


})



//create order is success

test('Place the order', async ({page})=>{

  // const ApiUtils = new ApiUtils(apiContext,loginPayLoad)
  // const orderId = createOrder(orderPayload)
  await page.addInitScript(value => {
  window.localStorage.setItem('token',value) // script take 2 argument , first is function , second is parameter

 }, response.token) // token is a key-value pair , value is argument , token is a second argument
  
    await page.goto("https://rahulshettyacademy.com/client/")
    await page.locator("button[routerlink*='myorders']").click()
    await page.locator("tbody").waitFor() //wait until the table order showing up
    const rows = await page.locator("tbody tr")

    for(let i = 0; i < await rows.count(); ++i)
    {
      const roworderId =await  rows.nth(i).locator("th").textContent() //grab orderid for product added to cart
      if (response.orderId.includes(roworderId))
      {
        await rows.nth(i).locator("button").first().click() //click on view order, open the view details
        break
      }
    }

    const orderIdDetails = await page.locator(".col-text").textContent()
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy()

  
  //  await page.pause()

   await page.waitForTimeout(3000)


})

// Verify if order created is swoing in history page
// Precondition - create order 
