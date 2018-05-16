$(document).ready(function(){

    $("#lukeEnemy, #hanEnemy, #vaderEnemy, #bobaEnemy, #lukeDefend, #hanDefend, #vaderDefend, #bobaDefend").hide();

    $("#luke").click(function(){
        $("#han, #vader, #boba").hide();
        $("#hanEnemy, #vaderEnemy, #bobaEnemy").show();
    });

    $("#han").click(function(){
        $("#luke, #vader, #boba").hide();
        $("#lukeEnemy, #vaderEnemy, #bobaEnemy").show();
    });

    $("#vader").click(function(){
        $("#luke, #han, #boba").hide();
        $("#lukeEnemy, #hanEnemy, #bobaEnemy").show();
    });

    $("#boba").click(function(){
        $("#luke, #han, #vader").hide();
        $("#lukeEnemy, #hanEnemy, #vaderEnemy").show();
    });

    $("#lukeEnemy").click(function(){
        $("#lukeEnemy").hide();
        $("#lukeDefend").show();
    });

    $("#hanEnemy").click(function(){
        $("#hanEnemy").hide();
        $("#hanDefend").show();
    });

    $("#vaderEnemy").click(function(){
        $("#vaderEnemy").hide();
        $("#vaderDefend").show();
    });

    $("#bobaEnemy").click(function(){
        $("bobaEnemy").hide();
        $("#bobaDefend").show();
    });


});