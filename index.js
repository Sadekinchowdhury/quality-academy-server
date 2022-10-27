const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())


const category = require('./Data/Category.json')
const course = require('./Data/cours.json')


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
    const categorycours = category.find(n => n.id === id)
    res.send(categorycours)
})




module.exports = app;