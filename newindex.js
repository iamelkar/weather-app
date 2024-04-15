
const weather = require('weather-js');
const express = require('express')
const app = express()

const icons = require('./data');

app.set('view engine', 'ejs')
const port = 8000;

app.use((req, res, next) => {
    console.log('Request made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
//   res.sendFile('./views/index.html', {root: __dirname});
    res.render('index', {heading: "I am not throwing away my shot", heading2: "Ayo I'm just like my country I'm young, scrappy, and hungry and I am not throwing away my shot!"})
})

app.get('/davao', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Davao, PHL', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weatherdvo: eval(JSON.stringify(result, null, 2)),
        }
        res.render('davao', data)
       }
      });
})

app.get('/bangkok', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Bangkok', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weatherbkk: eval(JSON.stringify(result, null, 2)),
        }
        res.render('bangkok', data)
       }
      });
})

app.get('/florence', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Florence', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weatherflr: eval(JSON.stringify(result, null, 2)),
        }
        data.
        res.render('florence', data)
       }
      });
})

app.get('/vancouver', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Vancouver', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weathervcv: eval(JSON.stringify(result, null, 2)),
        }
        res.render('vancouver', data)
       }
      });
})

app.get('/sydney', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Sydney, AUS', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weathersyd: eval(JSON.stringify(result, null, 2)),
            weIcons: eval(JSON.stringify(result, null, 2))
        }
        res.render('sydney', data)
       }
      });
})

app.get('/prague', function (req, res) {
    //   res.sendFile('./views/index.html', {root: __dirname});
    weather.find({search: 'Prague, Czech Republic', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
       else{
        let data = {
            weatherprg: eval(JSON.stringify(result, null, 2)),
            weIcons: eval(JSON.stringify(result, null, 2))
        }
        res.render('prague', data)
       }
      });
})


app.get('/home', (req,res) =>{
    res.redirect('/');
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', {root: __dirname});
})