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


//alert("Javascript読み込めました");

$('.menu-trigger').on('click',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');
    $('.overlay').removeClass('open');
  } else {
    $(this).addClass('active');
    $('main').addClass('open');
    $('nav').addClass('open');
    $('.overlay').addClass('open');
  }
});
$('.overlay').on('click',function(){
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $('.menu-trigger').removeClass('active');
    $('main').removeClass('open');
    $('nav').removeClass('open');      
  }
});

function previewFile(file) {
  // プレビュー画像を追加する要素
  const preview = document.getElementById('preview');

  // FileReaderオブジェクトを作成
  const reader = new FileReader();

  // ファイルが読み込まれたときに実行する
  reader.onload = function (e) {
    const imageUrl = e.target.result; // 画像のURLはevent.target.resultで呼び出せる
    const img = document.createElement("img"); // img要素を作成
    img.src = imageUrl; // 画像のURLをimg要素にセット
    preview.appendChild(img); // #previewの中に追加
  }

  // いざファイルを読み込む
  reader.readAsDataURL(file);
}


// <input>でファイルが選択されたときの処理
const fileInput = document.getElementById('example');
const handleFileSelect = () => {
  const files = fileInput.files;
  for (let i = 0; i < files.length; i++) {
    previewFile(files[i]);
  }
}
fileInput.addEventListener('change', handleFileSelect);

const ninja = document.getElementById("ninjabutton");

ninja.addEventListener("click", function(){
  console.log("aaaaa");
});