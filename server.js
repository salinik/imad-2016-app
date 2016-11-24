var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles={ 
'article-one':
{
    title:" Article-one|salini k",
    heading: "Articleone",
    date:"Sept 29 2016",
    content:`<p>
        This is  content for my first article!!. This is  content for my first article!!. This is  content for my first article!!.This is  content for my first article!!.
            </p>
        </div>
        <div>
            <p>
                This is  content for my first article!!. This is  content for my first article!!. This is  content for my first article!!.This is  content for my first article!!.
            </p>
        </div>
        <div>
            <p>
                This is  content for my first article!!. This is  content for my first article!!. This is  content for my first article!!.This is  content for my first article!!.
            </p>`
    
},
'article-two':
{
   title:" Article-two|salini k",
    heading: "Articletwo",
    date:"Sept 30 2016",
    content:`<p>
        This is  content for my second article!!.
            </p>`
        },
'article-three':
    {
       title:" Article-three|salini k",
        heading: "Articlethree",
        date:"Sept 1 2016",
        content:`<p>
            This is  content for my three article!!.
                </p>`
            }

};
function createTemplate(data)
{
 var heading=data.heading;
 var date=data.date;
 var content=data.content;
 var title=data.title;
 
var htmlTemplate=`<html>
    <header>
               <title> ${title}</title>

  <link href="/ui/style.css" rel="stylesheet" />
  
    </header>
   
      <div class="container">
        <div>
             <a href="/">Home</a>
        </div>
        <hr/>
        <div>
            <h1>
                ${heading}
                ${date}
            </h1>
        </div>
        <div>
            <p>
            ${content}
        </div>
        </div>
        
    </body>
</html>`;
return htmlTemplate;
}

app.get('/index', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
 var counter=0;
app.get('/counter', function(req,res){
    counter=counter+1;
    res.send(counter.toString());
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'ui',"ente.html"));
});
app.get('/index.html', function (req, res) {
   res.sendFile(path.join(__dirname,'ui',"index.html"));
});
app.get('/ui/style1.css', function (req, res) {
   res.sendFile(path.join(__dirname,'ui',"style1.css"));
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-Three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-Three.html'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/mu.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mu.jpg'));
});

app.get('/ui/head.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'head.png'));
});
app.get('/ui/prof.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'prof.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
