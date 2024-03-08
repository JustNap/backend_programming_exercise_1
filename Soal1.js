function prima(angka){
    if (angka <= 1){
        return false;
    }
    if (angka <= 3){
        return true;
    }
    
    if(angka % 2 === 0 || angka % 3 === 0){
        return false;
    }

    let i = 5;
    while (i * i <= angka){
        if (angka % i === 0 || angka % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

for(let i = 1; i <= 1000; i++){
    if(prima(i)){
        console.log(i);
    }
}