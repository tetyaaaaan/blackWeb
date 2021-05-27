// クリックイベントを設定
var list = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4",
            "Cp3", "Dp3", "Fp3", "Gp3", "Ap3" ];

const url = "https://tetyaaaaan.github.io/Piano_yaruo/";
/*let audioObj={};
for(i=0; i<list.length; i++){
    var path = url+"audio/"+this.id+ext;
    audioObj = new Audio(path);
}*/

var ext = '.wav';
if((new Audio()).canPlayType('audio/ogg') == 'maybe') { ext = '.ogg'; }
for(var i=0; i<list.length; i++){
    var ele = document.getElementById(list[i]);
    ele.addEventListener("mousedown", function(){
                         var path = url+"audio/"+this.id+ext;
                         var audioObj = new Audio(path);
                         audioObj.volume = 0.3;
                         audioObj.play();
                         pressing(this.id);
                         }, true);
    ele.addEventListener("mouseup", function(){
                         nopressing(this.id);
                         }, true);
    ele.addEventListener("mouseleave", function(){
                         nopressing(this.id);
                         }, true);
}

// キーボード入力に対応させる
var keydata = [
               { key : "Z", sound : "C3", isPressing : false },
               { key : "X", sound : "D3", isPressing : false },
               { key : "C", sound : "E3", isPressing : false },
               { key : "V", sound : "F3", isPressing : false },
               { key : "B", sound : "G3", isPressing : false },
               { key : "N", sound : "A3", isPressing : false },
               { key : "M", sound : "B3", isPressing : false },
               { key : String.fromCharCode(188), sound : "C4", isPressing : false },
               { key : "S", sound : "Cp3", isPressing : false },
               { key : "D", sound : "Dp3", isPressing : false },
               { key : "G", sound : "Fp3", isPressing : false },
               { key : "H", sound : "Gp3", isPressing : false },
               { key : "J", sound : "Ap3", isPressing : false }
               ]
document.addEventListener("keydown", function(e){
                          var k = String.fromCharCode(e.keyCode);
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].key){
                          if(!keydata[i].isPressing){
                          var path = url+"audio/"+keydata[i].sound+ext;
                          var audioObj = new Audio(path);
                          audioObj.volume = 0.3;
                          audioObj.play();
                          }
                          pressing(keydata[i].sound);
                          keydata[i].isPressing=true;
                          }
                          }
                          }, true);

document.addEventListener("keyup", function(e){
                          var k = String.fromCharCode(e.keyCode);
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].key){
                          nopressing(keydata[i].sound);
                          keydata[i].isPressing=false;
                          }
                          }
                          }, true);

function pressing(e){
    const div = document.getElementById(e);
    div.classList.add("pressing");
}
function nopressing(e){
    const div = document.getElementById(e);
    div.classList.remove("pressing");
}
