var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getfullscreen = document.getElementById('btn-fullscreen');
var getclosescreen = document.getElementById('btn-closescreen');
var getclosebtn = document.querySelector('.btn-close');

getbtnsignup.addEventListener('click',function(){
    getmodal.style.display = "block";
});

getclosebtn.addEventListener('click',function(){
    getmodal.style.display = "none";
});

window.onclick = function(e){
//  console.log(e.target);

    if(e.target === getmodal){
        getmodal.style.display = "none";
    }
}

var getde = document.documentElement;
// console.log(getde);

getfullscreen.addEventListener('click',function(){
    if(getde.requestFullscreen){
        getde.requestFullscreen();
    }else if(getde.msRequestFullscreen){
        getde.msRequestFullscreen();
    }else if(getde.webkitRequestFullscreen){
        getde.webkitRequestFullscreen();
    }

    getclosescreen.style.display = 'inline-block';
});

getclosescreen.addEventListener('click',function(){
    if(document.exitFullscreen){
        document.exitFullscreen();
    }else if(document.msExitFullscreen){
        document.msExitFullscreen();
    }else if(document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    }

    getclosescreen.style.display = 'none'
});

