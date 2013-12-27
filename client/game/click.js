/**
 * Check that a click is valid before using it for gameplay.
 *
 * Checking properties of a click event will never be a foolproof way to avoid
 * abuse, but it's a good place to start.
 */
function clickIsValid(event) {
  var valid = true;

  // If the event has no originalEvent property it is programatic.
  valid &= !!event.originalEvent;

  // Do nothing if there is no user signed in.
  valid &= !!Meteor.user();

  return valid;
}

$(document).on('click', function(event) {
  if (clickIsValid(event)) {
    var user = Meteor.user();

    // Ensure and increment the user's score.
    user.profile.score = user.profile.score ? user.profile.score : 0;
    user.profile.score++;

    Meteor.users.update(Meteor.user()._id, {$set: {profile: user.profile}});
  }
});
