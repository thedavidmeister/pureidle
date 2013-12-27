Template.hello.greeting = function () {
  return "Welcome to pureidle.";
};

Template.hello.events({
  'click input' : function (event) {
    console.log('foo');
  }
});
