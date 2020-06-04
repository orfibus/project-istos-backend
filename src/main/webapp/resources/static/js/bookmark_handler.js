//Since there are going to be more than one bookmarks, index config is important! This is an example for one bookmark only.
$(document).ready(function() {
    var remove_bookmark_button = document.getElementsByClassName('remove_bookmark');
    var bookmark_box = document.getElementsByClassName('single_bookmark_box');
    for (var i = 0; i < remove_bookmark_button.length; i++) {
        (function(index) {
            //This is where the bookmark removal will take place
            remove_bookmark_button[index].onclick = function(){
                //bookmark_box[index].style.display = "none";
                console.log("Index: ",index);
                $('.single_bookmark_box').eq(index).remove();
                //console.log(bookmark_box.length);
                if(bookmark_box.length === 0){
                    var empty_bookmark_list = document.getElementById('no_bookmarks');
                    empty_bookmark_list.style.display = "inline";
                }
            }
        })(i);
    }
});