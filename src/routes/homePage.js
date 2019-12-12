const axios = require('axios')

module.exports = async (req, res) => { 

    let resultArray = []
    for (let i = 1; i <= 20; i++) {
        const result = await axios.get('https://randomuser.me/api')
        resultArray.push(result.data.results[0])
    }

    res.json({
        status: 200,
        statusText: 'OK',
        message: 'Reading from RandomUser.me API and send to frontend',
        result: resultArray,
    })
    
}