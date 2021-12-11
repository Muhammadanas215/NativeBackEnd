
// console.log("inside index file");

// for (var i = 0; i < 100; i++) {
//     console.log(i);
// }

// console.log('loop finished again');























// import React from 'react';
// var React = require('react');

// var http = require('http');

// http.createServer(function (req, res) {

//     if (req.url === '/login') {
//         res.end('Login route working fine');
//     }
//     else if (req.url === '/signup') {
//         res.end('signup route working fine');
//     }
//     else {
//         res.end("Hello World");
//     }

// }).listen(4000);































































// import express from 'express';

// const app = express();

// app.use((req, res, next) => {
//     // console.log(req.url);
//     next();
// });

// app.get("/signup", (req, res, next) => {
//     console.log('inside signup ');
//     res.end('Signup run');
// });

// app.use((req, res) => {
//     console.log('inside second middleware 1');
//     res.end();
// })

// app.listen(7000, () => {
//     console.log('=================== server started on 7000 ===================');
// });
















































































// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import Student from './models/student.js'
// import morgan from 'morgan';
// import cors from 'cors';

// const app = express();

// mongoose.connect("mongodb+srv://anas12:abc123456@cluster0.9pr56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

// mongoose.connection.once('open', () => {
//     console.log('=================== ISI Secrete Database Connected ===================');
// });
// mongoose.connection.on('error', () => {
//     console.log('=================== Black Vigo is outside your home ===================');
// });


// app.use(cors());

// app.use(bodyParser.json({ limit: '2mb' }));
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(morgan('tiny'));



// app.get('/get-one-student/:studentName', async (req, res) => {
//     let { studentName } = req.params;
//     console.log(studentName);
//     let allStudents = await Student.findOne({ studentName: studentName }); // returns one object
//     res.json(allStudents);
// });

// app.post('/update-student/:id', async (req, res) => {
//     let { id } = req.params;
//     // console.log(req.body, id);
//     let updated = await Student.findOneAndUpdate({ _id: id },
//         { rollNumber: req.body.rollNumber });
//     res.json(updated);
// });

// app.post('/delete-student/:id', async (req, res) => {
//     let { id } = req.params;
//     // console.log(req.body, id);
//     let deleted = await Student.findOneAndDelete({ _id: id })
//     res.json(deleted);
// });



// app.get('/get-all-students', async (req, res) => {
//     console.log(req.url);
//     let allStudents = await Student.find().limit(3); // returns array
//     res.json(allStudents);
// });


// app.get('/get-student/:studentName', async (req, res) => {
//     let { studentName } = req.params;
//     console.log(studentName);
//     let allStudents = await Student.find({ studentName: studentName }); // returns array
//     res.json(allStudents);
// });



// app.get('/get-student-pagination/:pageNumber/:studentPerPage', async (req, res) => {
//     let { pageNumber, studentPerPage } = req.params;
//     console.log(pageNumber, studentPerPage)
//     let skipCount = (pageNumber - 1) * studentPerPage;
//     let allStudents = await Student.find().limit(Number(studentPerPage)).skip(skipCount); // returns array
//     res.json(allStudents);
// });


// app.post('/add-student', async (req, res) => {
//     console.log(req.body);
//     let student = new Student({
//         studentName: req.body.stName,
//         email: req.body.emailAddress,
//         rollNumber: req.body.rollNum
//     });
//     try {
//         let savedData = await student.save();
//         res.json(savedData);
//     } catch (e) {
//         console.log(e);
//         res.json(e);
//     }



//     // student.save(function (e, savedData) {
//     //     if (express) {
//     //         res.json(e);
//     //     }
//     //     else {
//     //         res.json(savedData);
//     //     }
//     // })

//     // student.save()
//     //     .then((savedData) => {
//     //         res.json(savedData);
//     //     })
//     //     .catch((e) => {
//     //         res.json(e);
//     //     })

// });

// // app.use((req, res) => {
// //     console.log(req.body, '***************');
// //     res.end();
// // });

// app.listen('5000', () => {
//     console.log('=================== server started on 5000 ===================');
// });


import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Student from './models/student.js'
import morgan from 'morgan';
import cors from 'cors';
import bookInfo from './models/book.js';


const app = express();

mongoose.connect("mongodb+srv://anas12:abc123456@cluster0.9pr56.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

mongoose.connection.once('open', () => {
    console.log('=================== Books Collection ===================');
});
mongoose.connection.on('error', () => {
    console.log('=================== You are not Authorised ===================');
});


app.use(cors());

app.use(bodyParser.json({ limit: '2mb' }));
app.use(bodyParser.urlencoded({ extended: false }))

app.use(morgan('tiny'));

app.post('/add-books', async (req, res) => {
        console.log(req.body);
        let books = new bookInfo({
            bookName: req.body.bookname,
            authorName: req.body.author,
            bookPrice: req.body.price,
            genre:  req.body.genre
        });
        try {
            let savedData = await books.save();
            res.json(savedData);
        } catch (e) {
            console.log(e);
            res.json(e);
        }
    })

    
app.get('/get-all-books', async (req, res) => {
    console.log(req.url);
    let allBooks = await bookInfo.find(); // returns array
    res.json(allBooks);
});

app.get('/get-one-book/:bookname', async (req, res) => {
        let { bookname } = req.params;
        console.log(bookname);
        let allBooks = await bookInfo.findOne({ bookName: bookname }); // returns one object
        res.json(allBooks);
    });
    
    app.post('/update-book/:id', async (req, res) => {
        let { id } = req.params;
        // console.log(req.body, id);
        let updated = await bookInfo.findOneAndUpdate({ _id: id },
            { bookPrice: req.body.price });
        res.json(updated);
    });
    
    app.post('/delete-book/:id', async (req, res) => {
        let { id } = req.params;
        // console.log(req.body, id);
        let deleted = await bookInfo.findOneAndDelete({ _id: id })
        res.json(deleted);
    });
    



app.listen('5000', () => {
    console.log('=================== server started on 5000 ===================');
});