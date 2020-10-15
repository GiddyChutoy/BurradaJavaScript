function mates(){
    let numero1 = Math.floor(Math.random() * (100 - 1)) + 1;
    let numero2 = Math.floor(Math.random() * (100 - 1)) + 1;
    let numero3 = Math.floor(Math.random() * (100 - 1)) + 1;

    let arrayNum = [numero1, numero2, numero3];

    arrayNum.sort(
        function(elem1, elem2) {
            if (elem1 > elem2){
            return 1;
            }
            if (elem1 < elem2) {
             return -1;
            }
            return 0;
        })
    
    console.log(arrayNum.toString());
}

mates();