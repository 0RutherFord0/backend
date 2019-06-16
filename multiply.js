const array = [1,2,3,4,5,6,7];
let mult = () => {
    var product = 1;
    for (let i=0; i<array.length; i++) { 
        product = product * array[i];
    }
    console.log(product);
}

mult();