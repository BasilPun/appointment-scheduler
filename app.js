import express from 'express';

const app = express();
const PORT = 3011;
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const appointments = [];

app.get('/', (req, res) =>{
    res.sendFile(`${import.meta.dirname}/views/home.html`)
});

app.get('/admin', (req, res) =>{
    res.send(appointments);
});

app.listen(PORT, () =>{
    console.log(`Server is running at: http://localhost:${PORT}`);
});

//post
app.post('/submit-appointment', (req, res) => {
    console.log(req.body);
    //
     const appointment = req.body;
     //appointment.timestamp = new Date();
     console.log(appointment);

     appointments.push(appointment);

     //confirm it happned
     console.log(appointments);

     res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})


//add a contact route to displays a CONFIRM view page
app.get('/confirm', (req, res) => {
    //send this file
    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
})





