

function entryChange2(){
    if(document.getElementById('changeSelect')){
    id = document.getElementById('changeSelect').value;
}
}


function entryChange1(){
radio = document.getElementsByName('entryPlan') 
if(radio[0].checked) {
//フォーム
document.getElementById('firstBox').style.display = "";
document.getElementById('secondBox').style.display = "none";
document.getElementById('thirdBox').style.display = "none";
document.getElementById('fourthBox').style.display = "none";

}else if(radio[1].checked) {
//フォーム
document.getElementById('firstBox').style.display = "none";
document.getElementById('secondBox').style.display = "";
document.getElementById('thirdBox').style.display = "none";
document.getElementById('fourthBox').style.display = "none";

}else if(radio[2].checked) {
    //フォーム
    document.getElementById('firstBox').style.display = "none";
    document.getElementById('secondBox').style.display = "none";
    document.getElementById('thirdBox').style.display = "";
    document.getElementById('fourthBox').style.display = "none";

}else if(radio[3].checked) {
    //フォーム
    document.getElementById('firstBox').style.display = "none";
    document.getElementById('secondBox').style.display = "none";
    document.getElementById('thirdBox').style.display = "none";
    document.getElementById('fourthBox').style.display = "";
}
}
//オンロードさせ、リロード時に選択を保持
window.onload = entryChange1;
