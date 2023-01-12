const express = require('express');
const app = express()


const courses = [
    {id: 1, name: 'Web Dev'},
    {id: 2, name: 'IT'},
    {id: 3, name: 'Cybersecurity'}
]

app.get('/', (req, res) => {
    res.send('Hello There')
})

app.get('/api/courses', (req, res)=>{
    res.send(courses);
})

app.get('/api/courses/:id', (req,res)=> {
    let course = courses.find(c=> c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send('The course was not found')
        return
    }
    res.send(course);
})

app.listen(3000, () => {
    console.log("Listening on port 3000 ..")
})