
const { test, expect } = require('@playwright/test')

var userid

test("Get users", async ({request}) => {

   const response =  await request.get('https://reqres.in/api/users?page=2')
   console.log(await response.json())
   expect(response.status()).toBe(200)
})

test.only("Create user", async ({request}) => {

    const response =  await request.post('https://reqres.in/api/users',
                                {                  
                                data: { "name": "zaheu","job": "vames"  },
                                headers:{"Accept": "application/json"}
                            })

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userid=res.id
                     
}) 
 
test("Update user", async ({request}) => {
})

test("Delete user", async ({request}) => {
})