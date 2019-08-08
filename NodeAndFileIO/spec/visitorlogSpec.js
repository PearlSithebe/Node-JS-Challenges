let Visitor = require('../visitorlog')
let visitor;
describe("Visitor", function(){
});
beforeEach (function() {
    visitor = new Visitor("Lee fin", 24, "4 May 2019", "13:30" ,"Good", "Sam");
});
it ("should able to define the visitor", function(){
    expect(visitor).toBeDefined();
})
it ("should be able to save visitors data", function () {
    expect(visitor.save()).toBe("saved");
})

it ("should be able to load visitor data", function() {
    expect(visitor.load(1)).toEqual({"fullName":"Lee fin","age":24,"date":"4 May 2019","time":"13:30","comment":"Good","nameOfAssistant":"Sam"})
})