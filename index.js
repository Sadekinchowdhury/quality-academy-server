const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())


const category = require('./Data/Category.json')
const course = require('./Data/cours.json')
const premium = require('/Data/primium.json')

app.get('/', (req, res) => {
    res.send('api running')
})
app.get('/category', (req, res) => {
    res.send(category)
})
app.get('/course', (req, res) => {
    res.send(course)
})


app.listen(port, () => {

    console.log('tik ache')
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id
    const selected = course.find(cur => cur._id === id)
    res.send(selected)

})

app.get('/category/:id', (req, res) => {
    const id = req.params.id
    const categorycours = category.filter(n => n.category_id === id)
    res.send(categorycours)
})

app.get('/premium/:id', (req, res) => {
    const id = req.params.id
    const select = premium.find(pre => pre.id === id)
    res.send(select)

})

module.exports = app;