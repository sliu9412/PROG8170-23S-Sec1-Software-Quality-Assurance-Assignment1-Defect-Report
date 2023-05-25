/**
 * File Name: jsfile.js
 *
 * Revision History:
 *       Baljeet Bilkhu: 01/06/2023 - code added and created
 *
 */


let outputUpper = document.querySelector('#upper');
 
    let outputLower = document.querySelector('#lower');

    function num(e) {
      if (outputLower.innerHTML === '0') {
        outputLower.innerHTML = e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }


    function allClear() {
      outputUpper.innerHTML = '';
      outputLower.innerHTML = '0';
    }


    function clear() {
      outputLower.innerHTML = outputLower.innerHTML.slice(0, -1);
    }

    
    function equals() {
      let exp = outputLower.innerHTML;
      outputUpper.innerHTML = exp;
      exp = exp.replace(/×/g, '*').replace(/÷/g, '/');
      let result;
      try {
        result = eval(exp);
    
        if (result.toString().indexOf('.') !== -1) {
          result = result.toFixed(4);
        }
      } catch (e) {
        result = 'Error';
      }
      outputLower.innerHTML = result;
    }

    function operator(e) {
    
      let lastOperator = outputLower.innerHTML.slice(-1);
      if (lastOperator.includes('+', '-', '×', '÷')) {
        output.innerHTML = outputLower.innerHTML.slice(0, -1) + e.innerHTML;
      } else {
        outputLower.innerHTML += e.innerHTML;
      }
    }

    function dot() {
      outputLower.innerHTML += '.';
    }

        
    document.addEventListener('keydown', function (e) {
      switch (e.key) {
        case '0':
          num(document.querySelector('button:nth-child(2)'));
          break;
        case '1':
          num(document.querySelector('button:nth-child(5)'));
          break;
        case '2':
          num(document.querySelector('button:nth-child(6)'));
          break;
        case '3':
          num(document.querySelector('button:nth-child(7)'));
          break;
        case '4':
          num(document.querySelector('button:nth-child(9)'));
          break;
        case '5':
          num(document.querySelector('button:nth-child(10)'));
          break;
        case '6':
          num(document.querySelector('button:nth-child(11)'));
          break;
        case '7':
          num(document.querySelector('button:nth-child(13)'));
          break;
        case '8':
          num(document.querySelector('button:nth-child(14)'));
          break;
        case '9':
          num(document.querySelector('button:nth-child(15)'));
          break;
        case '+':
          operator(document.querySelector('button:nth-child(4)'));
          break;
        case '-':
          operator(document.querySelector('button:nth-child(8)'));
          break;
        case '*':
          operator(document.querySelector('button:nth-child(12)'));
          break;
        case '/':
          operator(document.querySelector('button:nth-child(16)'));
          break;
        case '.':
          dot();
          break;
        
        case 'Enter':

          e.preventDefault();
          equals();
          break;
        case 'Backspace':
          clear();
          break;
        case 'Escape':
          allClear();
          break;
      }
    });