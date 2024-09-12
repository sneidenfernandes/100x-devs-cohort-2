const axios = require("axios");


async function main(){
    const response = await axios.post('https://httpdump.app/dumps/80766366-a082-454e-a2c9-9757da1a18d5', {
        username: "sneiden@gmaiL.com",
        password: "something"
    }, {
        headers: {
            Authorization: "Bearer 123"
        }
    })

    console.log(response.data)
}

main();