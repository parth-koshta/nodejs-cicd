var request = require('supertest');
var app = require("../routes/index");



describe('GET /hello', function() {
 it('responds with Hello World!', function(done) {

 //navigate to root and check the the response is "hello world"
 request(app).get('/hello').expect('Hello World!', done());

 });
});