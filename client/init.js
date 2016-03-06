Meteor.startup(function() {
  // Potentially prompts the user to enable location services. We do this early
  // on in order to have the most accurate location by the time the user shares
  Geolocation.currentLocation();
});

if (Meteor.isClient) {
  Meteor.startup(function(){
    Messages = new Meteor.Collection('messages');
    Meteor.subscribe("messages");
    Messages.allow({
      insert: function(userId, doc) {
        return true;
      }
    });
  });

}