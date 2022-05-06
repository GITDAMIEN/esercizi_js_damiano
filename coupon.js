//voglio creare un coupon casuale
// con il formato XXXX-XXXX-XXXX

let chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q','R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1','2', '3', '4', '5', '6', '7', '8', '9', '0'];


//let random = Math.floor(Math.random() * (max - min) + min);

let couponCode = ''; //creo stringa vuota

for(let index = 1; index <= 12 ; index++){
    let random = Math.floor(Math.random() * chars.length);

    couponCode += chars[random];
    if(index%4==0&&index!=12)
        couponCode += '-';
}

console.log(couponCode);