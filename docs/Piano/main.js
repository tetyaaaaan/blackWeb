// クリックイベントを設定
var list = ["A1", "B1",
            "Ap1",
            "C2", "D2", "E2", "F2", "G2", "A2", "B2",
            "Cp2", "Dp2", "Fp2", "Gp2", "Ap2",
            "C3", "D3", "E3", "F3", "G3", "A3", "B3",
            "Cp3", "Dp3", "Fp3", "Gp3", "Ap3",
            "C4", "D4", "E4",
            "Cp4", "Dp4" ];

const url = "./audio/";

let adios={};
for(i=0; i<list.length; i++){
    var path = url+list[i]+".mp3";
    adios[list[i]] = new Audio(path);
}

for(var i=0; i<list.length; i++){
    var ele = document.getElementById(list[i]);
    ele.addEventListener("mousedown", function(){
                         var path = url+"audio/"+this.id+".mp3";
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
               { code : "KeyZ" , sound : "A1", isPressing : false },
               { code : "KeyX" , sound : "B1", isPressing : false },
               /*{ code : "KeyA", sound : "Gp1", isPressing : false },*/
               { code : "KeyS", sound : "Ap1", isPressing : false },
               
               { code : "KeyC" , sound : "C2", isPressing : false },
               { code : "KeyV" , sound : "D2", isPressing : false },
               { code : "KeyB" , sound : "E2", isPressing : false },
               { code : "KeyN" , sound : "F2", isPressing : false },
               { code : "KeyM" , sound : "G2", isPressing : false },
               { code : "Comma", sound : "A2", isPressing : false },
               { code :"Period", sound : "B2", isPressing : false },
               
               { code : "KeyF", sound : "Cp2", isPressing : false },
               { code : "KeyG", sound : "Dp2", isPressing : false },
               { code : "KeyJ", sound : "Fp2", isPressing : false },
               { code : "KeyK", sound : "Gp2", isPressing : false },
               { code : "KeyL", sound : "Ap2", isPressing : false },
               
               { code : "Slash" , sound : "C3", isPressing : false },
               { code : "IntlRo", sound : "D3", isPressing : false },
               
               { code : "Quote", sound : "Cp3", isPressing : false },
               /*{ code : "Backslash", sound : "Dp3", isPressing : false }*/
               
               
               { code : "KeyQ" , sound : "A2", isPressing : false },
               { code : "KeyW" , sound : "B2", isPressing : false },
               
               { code : "Digit2", sound : "Ap2", isPressing : false },
               
               { code : "KeyE", sound : "C3", isPressing : false },
               { code : "KeyR", sound : "D3", isPressing : false },
               { code : "KeyT", sound : "E3", isPressing : false },
               { code : "KeyY", sound : "F3", isPressing : false },
               { code : "KeyU", sound : "G3", isPressing : false },
               { code : "KeyI", sound : "A3", isPressing : false },
               { code : "KeyO", sound : "B3", isPressing : false },
               
               { code : "Digit4", sound : "Cp3", isPressing : false },
               { code : "Digit5", sound : "Dp3", isPressing : false },
               { code : "Digit7", sound : "Fp3", isPressing : false },
               { code : "Digit8", sound : "Gp3", isPressing : false },
               { code : "Digit9", sound : "Ap3", isPressing : false },
               
               { code : "KeyP" , sound : "C4", isPressing : false },
               { code : "BracketLeft", sound : "D4", isPressing : false },
               { code : "BracketRight", sound : "E4", isPressing : false },
               
               { code : "Minus", sound : "Cp4", isPressing : false },
               { code : "Equal", sound : "Dp4", isPressing : false }
               ]

document.addEventListener("keydown", function(e){
                          var k = e.code;
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].code){
                          if(!keydata[i].isPressing){
                          var path = url+"audio/"+keydata[i].sound+".mp3";
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
                          var k = e.code;
                          for(var i=0; i<keydata.length; i++){
                          if (k == keydata[i].code){
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
