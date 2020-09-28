//*****     THIS PART IS WRITTEN IF I WOULDN'T HAVE THE CLASS IN CSS

//Check off specifick todo by clicking
/*$("li").click(function(){
    if($(this).css("color") === "rgb(128, 128, 128)") {               //if li is grey (is mandatory to use rgb color!!!!!)
        $(this).css({                                                 
            color: "black",                                           //turn it black
            textDecoration: "none"                                    //none decoration
        });
    } else {                                                          //else
        $(this).css({                                                 
            color: "gray",                                            //turn it gray
            textDecoration: "line-through",                           //with line through
        });
    }
});*/


//THIS PART OF THE CODE IS WRITTEN AFTER CREATING THE .COMPLETED CLASS IN CSS and not at all in html!!!!!!!! 
$("ul").on("click", "li", function(){                                    //WITH .on() I AM ADDING AN EVENT LISTENER TO THE PARENT UL THAT ON CLICK WILL RUN THE CODE
    $(this).toggleClass("completed");                                    //THIS REFER TO LI WHICH WE GAVE THE CLASS ("completed")
});

//CLICK ON X TO DELETE TODO
// $("span").click(function(e){                                          //1- ADDING AN EVENT WHICH WILL HELP ME TO AVOIT REMOVING THE LI...
//     $(this).parent().remove();                                        //3- ADDING .parent WILL REMOVE ONLY THE LI AND NOT THE SPAN INSIDE THE LI!!!!
//     e.stopPropagation();                                              //2- ... THANKS TO THE stopPropagation
// });

$("ul").on("click", "span", function (e) {                               //1- ADDING AN EVENT WHICH WILL HELP ME TO AVOID REMOVING THE LI...
     $(this).parent().fadeOut(500, function() {                          //3- ADDING .fadeOut will fade the li only cos...
        $(this).remove();                                                //4- ... this here refers to the li which is the parent
     });
     e.stopPropagation();                                                //2- ... THANKS TO THE stopPropagation
});

$("input[type='text']").keypress(function(e) {
    if(e.which === 13) {
        var todoText = $(this).val();                                     //1- WITH this.val() I AM GRABBING THE VALUE OF THE STRING PUTED IN THE INPUT AND GIVING TO A VARIABLE
        $(this).val("");                                                  //3- HERE I AM CLEARING THE INPUT FIELD PASSING IN AN AMPTU STRING or better AN EMPTY VALUE
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")        //2- HERE I AM APPENDING(AGGIUNGERE) AN LI TO THE UL (element selected) WITH THE VALUE PASSED INTO A VARIABLE (todoText so STRING) and the span containing the X
    }
});

$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});