Template.Profile.uname = function() {
    return Meteor.user().name;
};

Template.Profile.emails = function() {
  return Meteor.user().emails;
}
