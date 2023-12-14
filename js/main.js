document.addEventListener("click", function(e) {
   if_id = e . target. id;

   if(if_id == "change_background")
   {
     if_id = document.getElementById(if_id);

     if(if_id .style . background == "red")
     {
        if_id .style . background = "#efefef";
     }
     else
     {
        if_id .style . background = "red";
     }
   }
});