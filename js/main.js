const prompts = [
    '1/7 - Type a noun',
    '2/7 - Type an adjective',
    '3/7 - Type an adjective',
    '4/7 - Type a noun',
    '5/7 - Type an animal',
    '6/7 - Type a vegetable',
    '7/7 -Type a vegetable'
   ];

let answers=[];
// Keep track of current prompt we're on
let currentPrompt = 0;

const nextPrompt = function() {
    if (currentPrompt != 0){
        answers.push($('input').val());
    }
    if (currentPrompt < prompts.length) {
        $('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
        currentPrompt = currentPrompt + 1;
    }
        else {
        showFinal();
    }
}

var showFinal = function() {
  $('.prompt').html('Make sure your lunch <span class="fill">'+answers[0]+
    '</span> is filled with nutritions food <span class="fill">'+answers[1]+
    '</span>. Do not go to the <span class="fill">'+answers[2]+
    '</span> food stand across the street. The hamburgers they serve are fried in <span class="fill">'+answers[3]+
    '</span> and are made of <span class="fill">'+answers[4]+
    '</span> meat. So take a sandwich made of <span class="fill">'+answers[5]+'</span> or  <span class="fill">'+answers[6]+
    ',</span>, it\'s much healthier!');
  $('button').hide();
}
$('button').click(function() {
    nextPrompt();
});

nextPrompt();