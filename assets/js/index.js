$(document).ready(function(){
    $("#breathing-info-1, #breathing-info-2, #breathing-info-3").hide();
});

$("#more-info-btn-1").click(function(){
        $("#breathing-info-1").toggle();
    });    

$("#more-info-btn-2").click(function(){
        $("#breathing-info-2").toggle();
    });    

$("#more-info-btn-3").click(function(){
        $("#breathing-info-3").toggle();
    });    
  

$("#range-labels").hide();

$("#custom-btn").click(function(){
    $("#range-labels").toggle();
})

$("#close-btn").click(function(){
    $("#range-labels").hide();
})