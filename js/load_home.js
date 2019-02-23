
    addLoadEvent(prepareSwitches);
    addLoadEvent(prepareDate);
    
function prepareDate()
{
    var d = new Date();
    var monthNames = [ "January", "February", "March", 
        "April", "May", "June", "July", "August", "September", 
        "October", "November", "December" ];

    var day = d.getDate();
    var makeDate = document.createTextNode(monthNames[d.getMonth()] + ' ' + day);
    var theDate = document.getElementById("date");

    theDate.appendChild(makeDate);

}

$(document).ready(function(){
    $("#ggs-switch").click(function(){
        if($(this).hasClass('ggs-switch'))
        {
            var txt_a = $('nav');
            var txt_b = $('.main_content');
            txt_a.add(txt_b).animate({left: "+=300"}, "slow", "linear");
            $(this).removeClass('ggs-switch');
        }
        else
        {
            var txt_a = $('nav');
            var txt_b = $('.main_content');
            txt_a.add(txt_b).animate({left: "-=300"}, "slow", "linear");
            $(this).addClass('ggs-switch');
        }
    })
})

$(document).ready(function(){
        animateStreamRight()
    })

    function animateStreamLeft() {
        $(".stream-bar").animate({top: "+=1310"}, 30000, "linear", animateStreamRight);
    }
    function animateStreamRight() {
        $(".stream-bar").animate({top: "-=1310"}, 30000, "linear", animateStreamLeft);
    }

function addLoadEvent(func)
{
    var oldOnLoad = window.onload;

    if(typeof window.onload !== 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function() {
            oldOnLoad();
            func();
        };
    }
}