const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

//this is middleware for the json and form data being sent through
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"public")));

app.get('/movies', (req, res) => {
  knex('movies').then((results)=>{
    res.render('index', {movies:results})
  })
});

app.get('/createmovie', (req,res)=>{
    res.render('createmovie');
})

app.post('/createmovie', (req,res)=>{
  knex('movies').insert({
    title:req.body.title,
    desc:req.body.desc,
    genre:req.body.genre
  }).then(()=>{
    res.redirect('/movies');
  })
})

app.get('/upvote/:id', (req, res)=>{
  knex('movies').where('id', req.params.id)
  .then((results)=>{
    console.log('FIRST RESULT: ',results);

    let result = results[0].votes
    console.log('FIRST RESULT: ',result);
    knex('movies').where('id', req.params.id)
    .update({votes: result+1}).then(()=>{
      res.redirect('/movies')
      console.log('RESULT: ',result)

    })
    //console.log('RESULT: ',result)
    //res.redirect('/movies')
  })
})


app.get('/students/:id', (req, res) => {
  knex('students').where('class_id', req.params.id).then((result) => {
    res.render('students', {db_array:result})
  })
});

app.post('/movies', (req, res) => {
  knex('classes').insert({
    class_name: req.body.addClassName,
    class_teacher: req.body.addClassTeacher
  })
    .then(()=>{res.redirect("/")})
});

app.post('/students/:id', (req, res) => {
  knex('students').insert({
    student_name: req.body.addStudentName,
    student_age: req.body.addStudentAge,
    class_id: req.params.id
  })
    .then(()=>{res.redirect(`/students/${req.params.id}`)})
});

app.listen(port, function() {
  console.log('Listening on', port);
});
