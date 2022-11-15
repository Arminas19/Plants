$(document).ready(function() {

    $(window).on("resize", function() {
        console.log( $(window).width(), 'X', $(window).height());
        if( $(window).width() < 700) {
            $("body").css('background-color', 'green');
        }
        else {
            $("body").css('background-color', 'white');
        };
    })

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
    $("[name='mytextarea']").on("focus", function(){
        console.log("You focused on the textarea!");
    });
    $("#inputHere").on("focus", function() {
        console.warn("You Entered the input!!");
    });
    $('#unfocus').on('blur', function() {
        let websiteUrl = $(this).val();
        if(websiteUrl.substr(0, 4) !== 'http') {
            websiteUrl = `http://${websiteUrl}`
        };
        $(this).val( websiteUrl );
        
    });

    // $('form').on('submit', function(event) {
    //     event.preventDefault();
    //     console.log('form was not submited!!');
    // });

    $("#submitButton").on('click', function(event) {
        event.preventDefault();
        console.log("Button is useless!!");
    });

    $(".button4").on('click', function(e) {
        e.preventDefault();
        // $('.black-box').hide();
        $('.black-box').show(function() {
            console.warn('black box has appeard!!');
            $('.black-box').fadeToggle(1500, () =>{
                console.log('fade Toggle appeard!!');
                
            });
        });
        $('.change-box').show();
        $('.change-box-width-button').show();

    });

    $(".change-box").on('click', function(e) {
        e.preventDefault();
        setTimeout(() => {
            $(".black-box").addClass('purple-class');
        }, 1000);
      
    });

    $('.change-box-width-button').on('click', function(e) {
        e.preventDefault();
        $('.black-box').addClass('change-box-width');
        $('.black-box').removeClass('change-box-width-to-small');
        $('.width-to-small').show();
        $('.Togglefade-button').show();
        
    });

    $('.width-to-small').on('click', function() {
        $('.width-to-small').hide();
        $('.Togglefade-button').hide();
        $('.black-box').removeClass('change-box-width');
        $('.black-box').addClass('change-box-width-to-small');

    });

    $('.fadeOut-button').on('click', function() {
        $('.black-box').fadeOut(4500);
    })

    $('.Togglefade-button').on('click', function() {
        $('.black-box').toggle();
    })

    const $box2 = $('.box-2');
    // $('#toggle-button').on('click', () => {
    //     // $('.box-2').toggleClass("green");
    //     // $box2.toggleClass("green");
    // });

    $('#toggle-input').on('keyup', function() {
        const value = $(this).val();
        if (value === 'arminas') {
            // $box2.toggleClass('green');
            $box2.addClass('green');
        }
        else {
            $box2.removeClass('green');
        };
    });

    $('#box')
    // .css('background-color', 'orange')
    // .css('border', '1px solid black')
    // .css('border-radius', '50%')
    .css({
        backgroundColor: "red",
        border: "10px solid blue",
        borderRadius: "10px"
    })

    $('.animation-button').on('click', function() {
        $('.animate-box').animate({
            opacity: 0.6,
            width: "800px"
        }, 4000);
    });
});