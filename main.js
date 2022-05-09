function tinhtoan(toantu){
    let so1 = +document.getElementById("so1").value;
    let so2 = +document.getElementById("so2").value;
    let ketqua;
    switch(toantu){
        case '+':{
            ketqua = so1 + so2;
            break;
        }
        case '-':{
            ketqua = so1 - so2;
            break;
        }
        case '*':{
            ketqua = so1 * so2;
            break;
        }
        case '/':{
            ketqua = so1 / so2;
            break;
        }
    }
    document.getElementById("ketqua").innerHTML = ketqua;
}