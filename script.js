
function getInfos(){
    const ddd = document.getElementById("ddd");
    const phone = document.getElementById("phone");
    const btn = document.getElementById("btn");
    
    return ddd, phone, btn;
}
function openApp(event){
    event.preventDefalt;
    
    getInfos();
    let full = ddd.value + phone.value;
    
    window.open(`whatsapp://send?phone=55${full}&text=Olá!`);
}

function app(){
    btn.addEventListener("click",openApp);
}
app();