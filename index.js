const express = require ('express')
const Cats = require ('./cats' )

const app = express ()

app.set ('view engine', 'pug')

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.render ('index', {})
   
})

app.all('*', (request, response)=> {
    return response.sendStatus (404)
})

app.listen(1338, () => {
    console.log('Listening on 1338...')// eslint-disable-line no-console
})