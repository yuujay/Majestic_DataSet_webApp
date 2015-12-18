//Basic Attempt at Node.JS
//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var oracledb = require('oracledb');

//Call express
var app = express();

var bodyParser = require('body-parser');

var orawrap = require('orawrap');

var dbConfig = {
    user: 'gxu150030',
    password: 'pingdb',
    connectString: 'csoracle.utdallas.edu/student.csoracle.utdallas.edu',
    poolMax: 20,
    poolMin: 2,
    poolIncrement: 2,
    poolTimeout: 10
};

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/domain_search', function(req, res) {
  res.render('domain_search.html');
});

app.post('/search', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT GLOBALRANK,DOMAIN FROM MAJESTIC where DOMAIN='" + domain + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result', 
	       {
                 title: result.rows[0][0], 
				 name: result.rows[0][1],				 
               }
               );
             }
	     else {
               res.render('error',
               {
                  message: "No website with entered name please enter correct details"

               }
               );
             }  
	   }
        }
      );
});

app.get('/domain_search_index1', function(req, res) {
  res.render('domain_search_index1.html');
});

app.post('/indexOneSearch', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT GLOBALRANK,DOMAIN FROM MAJESTIC_INDEX1 where DOMAIN='" + domain + "'";
    orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_index1', 
	       {
                 title: result.rows[0][0], 
				 name: result.rows[0][1],				 
               }
               );
             }
	     else {
               res.render('error_index1',
               {
                  message: "No website with entered name please enter correct details- IN INDEX1"

               }
               );
             }  
	   }
        }
      );
});

app.get('/domain_search_index2', function(req, res) {
  res.render('domain_search_index2.html');
});

app.post('/indexTwoSearch', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT GLOBALRANK,DOMAIN FROM MAJESTIC_INDEX2 where DOMAIN='" + domain + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_index2', 
	       {
                 title: result.rows[0][0], 
				 name: result.rows[0][1],				 
               }
               );
             }
	     else {
               res.render('error_index2',
               {
                  message: "No website with entered name please enter correct details- IN INDEX TWO"

               }
               );
             }  
	   }
        }
      );
});

app.get('/domain_search_index3', function(req, res) {
  res.render('domain_search_index3.html');
});

app.post('/indexThreeSearch', function(req, res) {

 var domain = req.body.domain;
 var sql_statement =  "SELECT GLOBALRANK,DOMAIN FROM MAJESTIC_INDEX3 where DOMAIN='" + domain + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	       res.render('result_index3', 
	       {
                 title: result.rows[0][0], 
				 name: result.rows[0][1],				 
               }
               );
             }
	     else {
               res.render('error_index3',
               {
                  message: "No website with entered name please enter correct details- IN INDEX3"

               }
               );
             }  
	   }
        }
      );
});

app.get('/tld_domain', function(req, res) {
  res.render('tld_domain.html');
});

app.post('/search_TLD', function(req, res) {

 var tld_no_idx = req.body.TLD;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC where TLD='" + tld_no_idx + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('tld_error',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	     
	       		res.render('tld_result', 
	       		{	
                	 domain_no_idx:result.rows                	 
               	}
              	 );
               	
               	}             
	     else {
               res.render('tld_error',
               {
                  message: "Domain Names with this TLD for MAJESTIC table not found!!"

               }
               );
             }  
	   }
        }
      );
});

app.get('/tld_domain_index1', function(req, res) {
  res.render('tld_domain_index1.html');
});

app.post('/search_TLD_index1', function(req, res) {

 var tld_no_idx = req.body.TLD;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX1 where TLD='" + tld_no_idx + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('tld_error_index1',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	     
	       		res.render('tld_result_index1', 
	       		{	
                	 domain_no_idx:result.rows                	 
               	}
              	 );
               	
               	}             
	     else {
               res.render('tld_error_index1',
               {
                  message: "Domain Names with this TLD for MAJESTIC table not found!!"

               }
               );
             }  
	   }
        }
      );
});

app.get('/tld_domain_index2', function(req, res) {
  res.render('tld_domain_index2.html');
});

app.post('/search_TLD_index2', function(req, res) {

 var tld_no_idx = req.body.TLD;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX2 where TLD='" + tld_no_idx + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('tld_error_index2',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	     
	       		res.render('tld_result_index2', 
	       		{	
                	 domain_no_idx:result.rows                	 
               	}
              	 );
               	
               	}             
	     else {
               res.render('tld_error_index2',
               {
                  message: "Domain Names with this TLD for MAJESTIC table not found!!"

               }
               );
             }  
	   }
        }
      );
});

app.get('/tld_domain_index3', function(req, res) {
  res.render('tld_domain_index3.html');
});

app.post('/search_TLD_index3', function(req, res) {

 var tld_no_idx = req.body.TLD;
 var sql_statement =  "SELECT Domain,GlobalRank FROM MAJESTIC_INDEX3 where TLD='" + tld_no_idx + "'";
 orawrap.execute(
         sql_statement,
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('tld_error_index3',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {
	     
	       		res.render('tld_result_index3', 
	       		{	
                	 domain_no_idx:result.rows                 	 
               	}
              	 );
               	
               	}             
	     else {
               res.render('tld_error_index3',
               {
                  message: "Domain Names with this TLD for MAJESTIC table not found!!"

               }
               );
             }  
	   }
        }
      );
});
//Create Server
var port = Number(process.env.PORT || 7531);
orawrap.createPool(dbConfig, function(err, pool) {
   if (err) throw err;
   app.listen(port, function() {
       console.log('Web server listening on localhost: 7531');
   });
});
