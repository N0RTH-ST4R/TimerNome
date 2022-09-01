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
        }
        menuContainer > metro {
            display: block;
            width: 500px;
            max-height: 150px;
            font-size: 12px;
            font-family: monospace;
            overflow-y: auto;
            color: white;
            box-sizing: border-box;
            padding: 5px;
            position: absolute;
            bottom: 200px;
          }`;
        document.head.appendChild(s);
        if (!document.querySelector('menuContainer')) {
            s=document.createElement("menuContainer");
            var output=document.createElement("metro");
        }
            

    }

}())
