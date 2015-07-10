//
// test/test.js
//

var request = require('request')
  , expect = require('chai').expect

// DESCRIBE WHAT WE ARE TESTING
  // SAY WHAT BEHAVIOR 'IT' AUGHT TO HAVE
    // SEND THE REQUEST
      // USE CHAI-EXPECT TO EXPECT THE STATUS RESULT
      // CHECK FALSE VALUE TO SEE IF WE CAN MAKE TEST FAIL
      // CALL DONE();

// describe('http://localhost:3000', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('http://localhost:3000/api/', function(err, res, body) {
//       // console.log(err);
//       expect(res.statu).to.equal(200);
//      // expect(res.statusCode).to.equal(300);
//       done();
//     });
//   });
// });
// describe('test to see if it had the string that i want.', function() {
//   it('should have a HTTP of 200 - success', function(done) {
//     request('http://localhost:3000/api/', function(err, res, body) {
//        //  expect(body).to.have.string('Catchphrasely ');
//         expect(body).to.have.string('Catchphras ');// error
//      // expect().to.equal(300);
//       done();...
//        console.log(body);
//     });
//   });
// });

// describe('test to see if it has an id--', function() {
//   it('test to see if it has anid--', function(done) {
//     request('http://localhost:3000/api/phrases/', function(err, res, body) {
//         expect(body).to.have.string('Cat');//fail
//         // expect(body).to.have.string('word');// 
//      // expect().to.equal(300);
//       done();
//        console.log(body);
//     });
//   });
// });

describe('test to see if it has an a called string--', function() {
  it('test to see if it has a string that we call--', function(done) {
   request.post('http://localhost:3000/api/phrases', {form:{ id:"33",word: "dummy", definition:" dun person" }}, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        // console.log();//fail
        expect(body).to.have.string('dummy');// 
        // expect().to.equal(300);
      done();
       
    });
  });
});


describe('test to see if it has an a called string--', function() {
  it('test to see if it has a string that we call--', function(done) {
   request.post('http://localhost:3000/api/phrases', {form:{ id:"33",word: "dummy", definition:" dun person" }}, function(err, res, body) {
        expect(res.statusCode).to.equal(200);
        // console.log();//fail
        expect(body).to.have.string('dummy');// 
        // expect().to.equal(300);
      done();
       
    });
  });
});











