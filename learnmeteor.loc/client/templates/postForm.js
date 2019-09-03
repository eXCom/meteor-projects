import {Template} from "meteor/templating";
export {Post} from "../../lib/post.js";

Template.postForm.events({
    'submit form': function(event){
        event.preventDefault();
        var content = document.getElementById('content').value;
        Post.insert({content: content, created: new Date()});
        event.target.reset();
    }
});