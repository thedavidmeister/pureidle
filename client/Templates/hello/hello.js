Template.hello.greeting = function () {
  return "Welcome to pureidle.";
};

Template.hello.events({
  'click input' : function (event) {
    var user = Meteor.user();
    user.profile = typeof user.profile !== 'undefined' ? user.profile : {};
    user.profile.score = user.profile.score ? user.profile.score : 0;
    user.profile.score++;
    Meteor.users.update(Meteor.user()._id, {$set: {profile: user.profile}});
  }
});
