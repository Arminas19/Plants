$(document).ready(function() {
    $("#Title").text("Change ME");
    // $("p").html("<strong> Random Text Here :) </strong>");
    $("p.custom-class").text("Changed Again");
    $("#paraId").text("LoL sO Funny");
    $("p span strong ").text("Stronk");

    $('#customId').html('<h2 class="color-red"> Red </h2>');
    let blue = $('.color-red').html('<h2 class="color-blue"> Blue </h2>');

    $('#customId').text('<p> </p> VS  <span>' + blue);
    const value = $("input").val("Changed!");
    console.log(value);
    const text = $('section').text();
    console.log(text);
    $('h3').text('Changed Text').append('<span> Span </span>').prepend('<a href="#"> Link </a>');
    $('#target').before("<h1> Hello world this is a title </h1>").after("<p> This is a paragraph. #2</p>");
    // $('*').remove(); Removes Everything
});