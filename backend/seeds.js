var axios = require('axios');


for(let i = 0; i <= 101; i++) {

    config = {

        method: 'POST',
        url: 'http://localhost:3000/api/users',
        headers: { 
            'Content-Type': 'application/json', 
            'X-Requested-With': 'XMLHttpRequest', 
        },
        data: {
          user: {
            email: `john${i}@jacob.com`,
            password: "1234678",
            username: `john${i}`
          }
        }
    }

    axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
        
      
}