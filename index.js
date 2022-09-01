(function(){
    var s;
    if(!document.querySelector('style.TimerNome')){
        s=document.createElement("style");
        s.className=('TimerNome');
        s.innerHTML=`
        menuContainer{
            display:block;
            position: fixed;
            width: 500px;
            height: 350px;
            background: rgba(0,0,0,0.8);
            top: 0;
            left: 0;
            right: 0;
            margin: 50px auto;
            font-size: 0;
            z-index: 100000;
        }`;
    }

}
