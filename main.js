const inputCalck = document.querySelector('.account'),
    resultCalck = document.querySelector('.result')


    function input(i){
        inputCalck.value = inputCalck.value + i
    }

    function result(){
        if(eval(inputCalck.value) == undefined){
            resultCalck.value = '0,00';
            inputCalck.value = '0,00';
        }if(eval (inputCalck.value) == Infinity){
            resultCalck.value = '0,00';
            inputCalck.value ='No number';
        }

        resultCalck.value = eval(inputCalck.value);
        inputCalck.value = eval(inputCalck.value)
    }

    function backspce(){
        inputCalck.value = inputCalck.value.substring(0, inputCalck.value.length -1)
    }

    function reset(){
        resultCalck.value= '';
        inputCalck.value ='';
    }