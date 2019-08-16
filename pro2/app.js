const Express = require("express");

var app = new Express();

app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/addbook',(req,res)=>{
    res.render('addbook');
});

Books=[{
    
   
    'title':'The pilgrims thoughts',
    'author':'john bunyan',
    'publisher':'pearson',
    'date_of_publication':2013,
    'distributor':'pearson',
    'price':300,
    'Description':'Englsh Classic'
},

     
    {
        'title':'Robinson crusoe',
        'author':'Daniel defoe',
        'publisher':'pearson',
        'date_of_publication':1984,
        'distributor':'pearson',
        'price':200,
        'Description':'novel'

    },
    {
        'title':'Gulliver travels',
        'author':'Jonathan swift',
        'publisher':'pearson',
        'date_of_publication':2012,
        'distributor':'pearson',
        'price':400,
        'Description':'Novel'
    },
    {
        'title':'Clarrisa',
        'author':'richardson',
        'publisher':'pearson',
        'date_of_publication':2013,
        'distributor':'pearson',
        'price':205,
        'Description':'Novel',

    },
    {
        'title':'Tom jones',
        'author':'Henry Fielding',
        'publisher':'pearson',
        'date_of_publication':1988,
        'distributor':'pearson',
        'price':300,
        'Description':'Novel'

    },
    {
        'title':'The life and opinions',
        'author':'Laurence Sterne',
        'publisher':'pearson',
        'date_of_publication':1998,
        'distributor':'pearson',
        'price':260,
        'Description':'Novel'
    },
    {
        'title':'Emma',
        'author':'jane austene',
        'publisher':'pearson',
        'date_of_publication':1999,
        'distributor':'pearson',
        'price':225,
        'Description':'Novel'

    },
    {
        'title':'Frankenstiene',
        'author':'Mary shelly',
        'publisher':'pearson',
        'date_of_publication':1978,
        'distributor':'pearson',
        'price':225,
        'Description':'English classic'

    },
    {
        'title':'Nightmare',
        'author':'Thomas love',
        'publisher':'pearson',
        'date_of_publication':1987,
        'distributor':'pearson',
        'price':280,
        'Description':'novel'
    },
    {
        'title':'Sybli',
        'author':'Benjamine Disraeli',
        'publisher':'pearson',
        'date_of_publication':1989,
        'distributor':'pearson',
        'price':400,
        'Description':'novel'
    }];


app.get('/viewbook',(req,res)=>{
    res.render('viewbook',Books);
});

app.listen(3003,()=>{
    console.log("Server running on 3003");
});


   

