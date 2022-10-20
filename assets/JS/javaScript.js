// function change() {
// let fruit = ['apple', 'bananna', 'orange', 'graps'];
// fleng = fruit.length
    
// fruit[0] = 'lemon'
// let text = '<ul>';
// for(i = 0; i < fleng; i++) {
// text+= '<li>' + fruit[i] + '</li>';
// }
// text += '</ul>';
// document.getElementById('demo1').innerHTML = "Changed JavaScript.";
// document.getElementById('demo1').style.color = "red";
// document.getElementById('demo2').innerHTML = "Changed Text.";
// document.getElementById('demo3').innerHTML = text;
// console.log(text);

// };
    

// let fruit = ['apple', 'bananna', 'orange', 'graps'];
// fleng = fruit.length
// let text = '<ul>';
// for(i = 0; i < fleng; i++) {
// text+= '<li>' + fruit[i] + '</li>';
// }
// text += '</ul>';
// function NewChange() {
// document.getElementById('demo1').style.color = "cyan";
// document.getElementById('demo1').innerHTML = "Timmy Gay";
// document.getElementById('demo2').innerHTML = "Struna Fat Plum";
// document.getElementById('demo2').style.color = "yellow";
// document.getElementById('demo3').innerHTML = 'You stick theys in your bum (struna & Timmy)' + text;
// document.getElementById('demo3').style.fontSize = '40px';
// document.getElementById('demo3').style.color = 'limegreen';
// };


// let pressed = 0
// // jQuery
// $(document).ready(function() {
//     $('#blob').click(function() {
//         $(this).css("color", "yellow");
//     });
//     $('p').click(function() {
//         $(this).hide()
//     });

//     $("button").click(function() {
//         pressed += 1
//         $("p").toggle();
//         $("#blob").toggle(1000);
//         $("button").after("Pressed!!" + pressed);
//     });
// });
$(document).ready(function() {

    $('#get-pokemon-button').on('click', function() {
        $.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', function(data, status){
            console.log(data)

            let string = "";

            string += "<table class='table'>";
    
            $.each(data.results, function(index, item){
                string += "<tr><td><a href='"+item.url+"'>"+item.name+"</td><td><button class='hide-button btn btn-primary'>Hide</button></td></tr>";
            });
    
            string += "</table>";
    
            $('#poke-list').html(string); 

            if(status) {
                $('.hide-button').on('click', function(){
                    $(this).parent().parent().hide();
                });
            };

        });
    });
});