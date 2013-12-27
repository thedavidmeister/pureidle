Template.Profile.uname = function() {
  var user = Meteor.user();
  return user && user.name ? user.name : null;
};

Template.Profile.emails = function() {
  var user = Meteor.user();
  return user && user.emails ? user.emails : null;
};
