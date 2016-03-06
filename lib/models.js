/**
 * Create new collection if not present.
 */
if (Meteor.isServer) {
    Meteor.startup(function () {
        Messages = new Meteor.Collection('messages');


        Messages.allow({
            insert: function (userId, doc) {
                return true;
            }
        });

        Messages.latest = function () {
            return Messages.find({}, {sort: {time: -1}, limit: 10});
        }
        Meteor.publish("messages", function () {
            Messages.find({});
        });
    })

}