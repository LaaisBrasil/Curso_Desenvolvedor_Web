const express = require('express')
const app = express()
const BodyParser = require ('body-parser')
const { request } = require('express')
const bodyParser = require('body-parser')

app.use(BodyParser.urlencoded({ extended: true}))

app.post ('/usuarios', (req, resp) => {
   console.log(req,body)
   resp.send (<h1>Enviado! Obrigado.</h1>) 
})

app.listen(3003)
