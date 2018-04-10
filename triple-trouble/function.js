function tripledouble(num1, num2) {
    let returner = "0";
    let check1 = false;
    let check2 = true;

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        returner = 0;
    } else {
        var a =  num1.toString().split('');
        var b =  num2.toString().split('');

        for (let i = 0; i < a.length - 2; i++){
            if(a[i] === a[i+1] && a[i] === a[i+2]){
                check1 = a[i];
            }
        }

        if (check1) {
            for (let j = 0; j < b.length - 1; j++){
                if(b[j] === b[j+1]){
                    check2 = b[j]; 
                }
            }
        }

        if (check1 == check2) {
            returner = "1";
        }
    }

    return returner;
}