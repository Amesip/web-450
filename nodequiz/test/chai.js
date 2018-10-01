var test = require("../src/app/app.component.html");

var chai = require("chai");

var assert = chai.assert;

describe("GET /Quizzes", function(done) {

    it("should return a 200 response if the user logs in", function(done) {

        user.get("Quizzes")

        .expect(200, done);

    });

    it("should return a 302 response and rediract to /login", function(done) {
        request(app).get("Quizzes")
        .expect("Location", "Login")
        .expect(302, done);
    });
});