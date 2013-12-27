Template.Statistics.score = function() {
  var user = Meteor.user();
  return user && user.profile.score ? user.profile.score : 0;
}
