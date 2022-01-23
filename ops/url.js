const sequelize = require('../lib/database.js')
const Sequelize = require('sequelize')
const hash = require('hash-it');

const Url = require("../models/url.js")(sequelize, Sequelize)

Url.sync()

const get = async (event, ctx, callback) => {

    const hashcode = event.pathParameters.hashcode

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: {},
    };

    ctx.callbackWaitsForEmptyEventLoop = false

    const url = await Url.findOne({ where : { hashcode : hashcode }  })
    let message = `Success get URL from hashcode: ${hashcode}`

    if(url != null){
        response.body = JSON.stringify({
            "url" : url.original,
            "message" : message
        })
    }
    else{
        response.body = JSON.stringify({
            "url" : url,
            "message" : 'URL cannot be retrieved!'
        })
    }

    callback(null, response)
}

const create = async (event, ctx, cb) => {

    const body = JSON.parse(event.body)

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        },
        body: {},
    };

    const {
        url
    } = body

    ctx.callbackWaitsForEmptyEventLoop = false

    const hashedUrl = hash(url)
    let message = 'Long URL shortened successfully!'

    const existingHashedUrl = await Url.findOne({ where : { hashcode: hashedUrl } })

    if(existingHashedUrl != null)
        message = 'URL already shortened!'
    else{
        await Url.create({
            original: url,
            hashcode: hashedUrl
        })    
    }
    
    response.body = JSON.stringify({
        "hashcode" : hashedUrl,
        "message" : message
    })

    cb(null, response)
}

module.exports = {
    create,
    get
}