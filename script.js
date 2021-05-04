const coin = document.getElementById('coin');
const btn = document.getElementById('flipBtn');
var repeat = 0; //2 = back, 1 = front
var repeatSwitch = 0; //0 = y-rot motion, 1 = x-rot motion

function playAudio(url) {
  new Audio(url).play();
}

btn.addEventListener('click', function(){
  removeAll();
  var fb = randomAngle();
  if(fb){
    console.log('front ' + " repeat: " + repeat + " repeatSwitch: " + repeatSwitch);
    if(repeat == 1){
      if(repeatSwitch){
        console.log('repeating (regular)')
        coin.classList.add('flipFront');
        repeatSwitch = 0;
      } else{
        console.log('repeating (flipfrontY)')
        coin.classList.add('flipFrontY');
        repeatSwitch = 1;
      }
    } else{
      console.log('regular')
      coin.classList.add('flipFront');
      repeat = 1;
      repeatSwitch = 0;
    }
  } else{
    console.log('back ' + " repeat: " + repeat + " repeatSwitch: " + repeatSwitch);
    if(repeat == 2){
        if(repeatSwitch){
          console.log('repeating (regular)')
          coin.classList.add('flipBack');
          repeatSwitch = 0;
        } else{
          console.log('repeating (flipbackY)')
          coin.classList.add('flipBackY');
          repeatSwitch = 1;
        }
      } else{
        console.log('regular')
        coin.classList.add('flipBack');
        repeat = 2;
        repeatSwitch = 0;
      }
    }
})

function removeAll(){
  coin.classList.remove("flipFront", "flipBack", "flipFrontY", "flipBackY");
}

function randomAngle(){
  var rnd = Math.floor(Math.random() * 100);
  return rnd%2;
}
