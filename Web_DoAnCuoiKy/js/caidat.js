const bt= document.querySelectorAll('.cd')
const md=document.querySelectorAll('.section')
for(let i=0;i<bt.length;i++){
    bt[i].addEventListener('click',function(){
        md[i].classList.remove('hide')
        for(let j=0;j<bt.length;j++){
            if(j!=i)
                md[j].classList.add('hide');
        }
    })
}
function load(){
    md[0].classList.remove('hide')
    for(let j=1;j<bt.length;j++){
            md[j].classList.add('hide');
    }
}