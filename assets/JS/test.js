$(document).ready(function() {
    const $Title = $("#Title").text("Change ME");
    // $("p").html("<strong> Random Text Here :) </strong>");
    $("p.custom-class").text("Changed Again");
    $("#paraId").text("LoL sO Funny");
    $("p span strong ").text("Stronk");

    $('#customId').html('<h2 class="color-red"> Red </h2>');
    let blue = $('.color-red').html('<h2 class="color-blue"> Blue </h2>');

    $('#customId').text('<p> </p> VS  <span>' + blue);
    // const value = $("input").val("Changed!");
    // console.log(value);
    const text = $('section').text();
    console.log(text);
    $('h3').text('Changed Text').append('<span> Span </span>').prepend('<a href="#"> Link </a>');
    $('#target').before("<h1> Hello world this is a title </h1>").after("<p> This is a paragraph. #2</p>");
    // $('*').remove(); Removes Everything
    // $('#deleteMe').empty().html('<h2>Emptyed!</h2>');
    const $deleteMe = $('#deleteMe');
    $deleteMe.empty();
    $deleteMe.html('stuff here, no child elements.');

    // $("button").click(function(){
    //     console.log("Clicked!");
    // });

    // $("button").on("click", function() {
    //     console.log("Clicked Again");
    // });

    // $(document).on("click", "button", function(){
    //     console.log("3333333333")
    // });

    const $parent = $("#putButtonHere");
    $parent.html("<button> Click Me dynamic button </button>") 

    $(document).on("click", "#doSomethingButton", function() {
        console.log("works!")
        $Title.css("color", "red");
        
    });

    $("#box")
    .on("mouseenter", function(){
        console.log("over lol");
    })
    .on("mouseleave", function(){
        console.warn("You left the box area");
    });

    const $strong =  $("strong").on("mouseenter", function(){
        $strong.css("color", "lightblue");
    }).on("mouseleave", function(){
        $strong.css("color", "black");
    });

    $(".select-me").on("keyup", function(){
    //    const $input = $(".select-me")
    //     console.log("yoyoyoy:", $input.val());
        console.log($(this).val());
    });

});