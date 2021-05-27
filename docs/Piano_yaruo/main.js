// クリックイベントを設定
var list = ["C3", "D3", "E3", "F3", "G3", "A3", "B3", "C4",
            "Cp3", "Dp3", "Fp3", "Gp3", "Ap3" ];

const url = "https://tetyaaaaan.github.io/";
var ext = '.wav';
if((new Audio()).canPlayType('audio/ogg') == 'maybe') { ext = '.ogg'; }
for(var i=0; i<list.length; i++){
    var ele = document.getElementById(list[i]);
    ele.addEventListener("mousedown", function(){
                         var path = "audio/"+this.id+ext;
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
               { key : "Z", sound : "C3" },
               { key : "X", sound : "D3" },
               { key : "C", sound : "E3" },
               { key : "V", sound : "F3" },
               { key : "B", sound : "G3" },
               { key : "N", sound : "A3" },
               { key : "M", sound : "B3" },
               { key : String.fromCharCode(188), sound : "C4" },
               { key : "S", sound : "Cp3" },
               { key : "D", sound : "Dp3" },
               { key : "G", sound : "Fp3" },
               { key : "H", sound : "Gp3" },
               { key : "J", sound : "Ap3" }
               ]
document.addEventListener("keydown", function(e){
                          var k = String.fromCharCode(e.keyCode);
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].key){
                          var path = "audio/"+keydata[i].sound+ext;
                          var audioObj = new Audio(path);
                          audioObj.volume = 0.3;
                          audioObj.play();
                          pressing(keydata[i].sound);
                          }
                          }
                          }, true);

document.addEventListener("keyup", function(e){
                          var k = String.fromCharCode(e.keyCode);
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].key){
                          nopressing(keydata[i].sound);
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
