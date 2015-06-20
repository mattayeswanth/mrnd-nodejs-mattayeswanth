// This test case is trying to hit an invalid URL.
// Fix the assertions below so they all pass.
describe("HttpIntro Test Suite", function(){
	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request');
	jasmine.getEnv().defaultTimeoutInterval = 5000;

	it("IDontKnowBill_Gates",function(done){
    
    	request.get(
    		{url: "http://en.wikipedia.org/wiki/IDontKnowBill_Gates",
    		 timeout: 5000}, 
    		 function(error, response, body){

			// console.log(response);
			expect(response.statusCode).toBe(404);
			expect(response.statusMessage).toBe('Not Found');
			expect(response.headers["content-type"]).toBe("text/html; charset=UTF-8");

			done();
    	});
    });

	// Fix the assertions below so they all pass.

	 it("Twitter",function(done){
	    
	    	request.get(
	    		{url: "https://api.twitter.com/1.1/friends/list.json",
	    		 timeout: 30000}, 
	    		 function(error, response, body){

				// console.log(response);
				expect(response.statusCode).toBe(400);
				expect(response.statusMessage).toBe('Bad Request');
				expect(response.headers["content-type"]).toBe("application/json;charset=utf-8");

				done();
	    });
	});

	// Fix the assertions below so they pass.

	 it("Weather",function(done){
	    
	    	request.get(
	    		{url: "http://api.openweathermap.org/data/2.5/weather?q=jaganperi",
	    		 timeout: 30000}, 
	    		 function(error, response, body){

				//console.log(response);
				expect(response.statusCode).toBe(200);
				expect(response.statusMessage).toBe('OK');
				expect(response.headers["content-type"]).toBe("application/json; charset=utf-8");

				done();
	    });
	 });

	// This test case gets back json output from the openweather service.
	// Fix the test case so it can parse the json response correctly and
	// access the country field.
	 it("Weather-json",function(done){
	    
	    	request.get(
	    		{url: "http://api.openweathermap.org/data/2.5/weather?q=hyderabad",
	    		 timeout: 30000,
	    		  json: true}, 
	    		 function(error, response, body){

				//console.log(response);
				expect(body.sys.country).toBe("IN");

				done();
		    });
	});

	 it("Weather-xml",function(done){
	    
	    	request.get(
	    		{url: "http://api.openweathermap.org/data/2.5/weather?q=hyderabad&mode=xml",
	    		 timeout: 30000,
	    		  json: true}, 
	    		 function(error, response, body){
	    		     var req=require("C:/Program Files/nodejs/node_modules/npm/node_modules/request");
	    		     var x2j = require("C:/Users/user/AppData/Roaming/npm/node_modules/xml2js");
	    		     x2j = x2j.parseString;
	    		     console.log(x2j);
	    		     x2j(body, function (err, result) {
	    		         body = result;
	    		         console.log(body.current.city[0].country[0]);
	    		     });
				//console.log(response);
	    		     expect(body.current.city[0].country[0]).toBe("IN");

				done();
		    });
	});
});
