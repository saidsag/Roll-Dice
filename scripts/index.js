function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let dice = {
  value: 1,
  roll: function() {
    this.value = getRandomInt(1, 6)
    return this.value;

  }
};

let dice2 = {
  value: 1,
  roll: function() {
    this.value = getRandomInt(1, 6)
    return this.value;

  }
};


function printNumber(number1, number2){
  let value1 = document.querySelector('#sqr1');
  let value2 = document.querySelector('#sqr2');
  // value1.innerText = dice.value
  // value2.innerText = dice2.value
  value1.style['background-image'] = `url(/images/inverted-dice-${number1}.svg)`;
  value2.style['background-image'] = `url(/images/inverted-dice-${number2}.svg)`;
}


let button = document.querySelector('#button');
button.addEventListener('click' , function() {
  let result1 = dice.roll();
  let result2 = dice2.roll();


  printNumber(result1, result2);


});

printNumber(dice.value, dice2.value);








//
// function getNumber(number){
//   let rolli = document.querySelector('#subb');
//   rolli.innerText(number);
// }
//   let button = document.querySelector('#subb');
//   button.addEventListener('onclick' event => {
//     let result = roll.dice();
//     getNumber(result);
//   });
// document.querySelector('input[type=button]').addEventListener('click', function(){rollTheDice();});
// var rollTheDice = function() {
//    var i,
//        Value,
//        output = '',
//        diceCount = document.querySelector('input[type=number]').value || 2;
//    for (i = 0; i < diceCount; i++) {
//        Value = Math.floor(Math.random() * 6);
//        output += "&#x268" + Value + "; ";
//    }
//    document.getElementById('dice').innerHTML = output;
