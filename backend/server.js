const express = require('express');
const app  = express();
let job_id = 0;
let user_id = 0;
let text = [];

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(8082);
console.log("App running! yay");

// app.get('/jobs', (req, res) => {
//     let title = req.params;
//     res.send(jobs_array)
// })

// takes a job title and adds the job to the jobs array hashmap and returns the job
app.post('/jobs', (req, res) => {
    let job = req.body;
    job_id += 1;
    job.jobId = job_id
    jobs_array.set(job_id, job);
    res.send(job)
})

// get all jobs
app.post('/all-jobs', (req, res) => {
    let jobs_arr = []
    for (let i = 0, len = jobs_array.length; i < len; i++) {
        jobs_arr.push(jobs_array[i]);
      }
    res.send(jobs_arr)
})

// get all users
app.post('/all-users', (req, res) => {
    let users_arr = []
    for (let i = 0, len = users_array.length; i < len; i++) {
        users_arr.push(users_array[i]);
      }
    res.send(users_arr)
})

// send user info
app.post('/send-user', (req, res) => {
    let user = req.body;
    user_id += 1;
    user.user_id = user_id;
    // users_array.set("user_id", user_id);
    users_array.set(user_id, user);
    res.send(user)
  })


app.post('/jobs/:jobid', (req, res) => {
    
    let id_req = req.body.job_id.toString();
    // console.log(typeof(id_req));
    res.send(jobs_array.get(id_req))
})

var jobs_array = new Map([["3", "SWE2"], ["4", "Test Engineer"]]);
// test
var users_array = new Map();
