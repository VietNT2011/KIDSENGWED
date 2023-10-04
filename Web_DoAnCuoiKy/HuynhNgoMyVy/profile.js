const img=document.querySelectorAll(".anh")
let i=0;
setInterval(function() {
    if(i<img.length){
        for(let j=0;j<img.length;j++){
            if(j!=i)
                img[j].classList.add('hide');
            else
                img[j].classList.remove('hide');
        }
        i++;
    } else{
        i=0;
        for(let j=0;j<img.length;j++){
            if(j!=i)
                img[j].classList.add('hide');
            else
                img[j].classList.remove('hide');
        }
        i++;
        
    }
  }, 3000);
  function load(){
    i=0;
    for(let j=0;j<img.length;j++){
        if(j!=i)
            img[j].classList.add('hide');
        else
            img[j].classList.remove('hide');
    }
    i++;
  }
  window.addEventListener('load',load())