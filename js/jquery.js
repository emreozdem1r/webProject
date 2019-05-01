function load(){
$(document).ready(function(){
    $("#p1").slideDown(5000).slideUp(3000);
 setTimeout(load(), 100);
});
}