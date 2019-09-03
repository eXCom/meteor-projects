import {Template} from "meteor/templating";
import {Post} from "../../lib/post.js";
import {Tracker} from "meteor/tracker";

Meteor.startup(function() {
    Tracker.autorun(function(){
        console.log(Post.find().fetch());
    });
});

Template.postsList.helpers({
    posts: function(){
        return Post.find();
    }
});
