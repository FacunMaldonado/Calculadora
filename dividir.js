function dividir (num1, num2){
    let total = num1 / num2
    if ((num1 != 0 ) && (num2 !=0)){
        return total
    }else{
        return "No se puede dividir por cero"
    }
}

//console.log (dividir(0,2))

module.exports = dividir;
