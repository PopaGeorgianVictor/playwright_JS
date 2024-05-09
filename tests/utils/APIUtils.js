class APIUtils
{

    constructor(apiContext)
    {
        this.apiContext = apiContext //this is reffer to the current class
    }
   async getToken()
        {
            const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login" ,{data:loginPayLoad})
            expect(loginResponse.ok()).toBeTruthy()
            const loginResponseJson = await loginResponse.json()
            token = loginResponseJson.token
            console.log(token)
            return token
        
        }
    
        async createorder()
        {
            
        }
}
