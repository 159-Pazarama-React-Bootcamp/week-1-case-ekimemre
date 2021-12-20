// const isCreditCardNumberValid = (cardNumber) => {

// }


function notANumberControl(str) {
    let nanCheck = true;
    for(let i=0; i < str.length; i++){
        if( Number(str[i]) || str[i] === '0') {
            // sartlari sagladigi icin bos gecilecek.
        }else{
            nanCheck = false;
            console.log(str[i])
            return nanCheck;
        }
    }
    return nanCheck;
  }
    
  function differentNumandEvenCheck(str) {
    let evenCheck = false;
    let twoDiffNum = false;
  
    if(str[str.length-1] % 2 == 0) { evenCheck = true; } //Çift sayı kontrolü.
    for(let i=0; i<str.length-1 ; i++) {
        if(str[i] !== str[i+1]){ //Girilen kartın içinde eğer iki farklı sayı var mı kontrolü.
            twoDiffNum = true;
        }
    }
    return evenCheck && twoDiffNum;
  }
    
  function arraySum(str) {
    var sum = 0;
    for(let i=0; i<str.length; i++){
      sum += Number(str[i]);
    }
    return sum;
  }
  
  function luhnControl(str){
    //TODO
  }
  
  //Daha kontrollü bir algoritma için Luhn, NaN, arraySum ve minumun 2 farklı sayı kontrolleri ayrı birer fonksiyon olarak gerçekleştirildi. 
  
  function creditCardCheck(input){ 
    var numbersOfCard = [];
  
    if(notANumberControl(input)){ 
  
      if(differentNumandEvenCheck(input)){ 
        numbersOfCard = input.split("");
        let sum = arraySum(numbersOfCard);
        if(sum>16) {
          return "valid card!"
        }else{
          return "invalid car because of sum!"
        }
      }else{
        return "invalid card because of two different num or even"  
      }
    }else{
      return "invalid card because of NaN"
    }
  }
  
  function validateCard(){
  
    //Kullanicidan alinacak kartin 2 farklı formatı olabileceği için ilk olarak uzunluk üzerinden format kontrolü yapılıyor, 16 veya 19 değilse direkt çıkış yapıyor.
  
    var userInput = document.getElementById("textID_1").value;
    if(userInput.length === 16){
      result = creditCardCheck(userInput);
    }
    else if(userInput.length === 19){
  
      if(userInput[4]==='-' && userInput[9]==='-' && userInput[14]==='-'){
        var newInput = userInput.split("-").join("");
        result = creditCardCheck(newInput);
      }
    }
    else{
      result = "invalid card beacause of length"
    }
    document.getElementById("res").innerHTML = result;
  }
  
  