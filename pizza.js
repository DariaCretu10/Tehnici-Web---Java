let ardei = document.querySelectorAll(".ingrediente")[0];
let branza = document.querySelectorAll(".ingrediente")[1];
let salam = document.querySelectorAll(".ingrediente")[2];
let masline = document.querySelectorAll(".ingrediente")[3];
let rosie = document.querySelectorAll(".ingrediente")[4];
let ketchup = document.querySelectorAll(".ingrediente")[5];
let varza = document.querySelectorAll(".ingrediente")[6];
let imag = document.createElement('img');
let sec = 59;
let min = 1;
let time;
PuneIngrediente = (event) => {
    console.log("event este",event);
    if(event.target !== document.body) {
        if(event.target.alt=="ardei")
            {imag.src = ardei.src}
        if(event.target.alt=="branza")
            {imag.src = branza.src}
        if(event.target.alt=="salam")
            {imag.src = salam.src}
        if(event.target.alt=="masline")
            {imag.src = masline.src}
        if(event.target.alt=="rosie")
            {imag.src = rosie.src}
        if(event.target.alt=="ketchup")
            {imag.src = ketchup.src}
        if(event.target.alt=="varza")
            {imag.src = varza.src}
        return

    }
    let div = document.createElement("div");
    let cln = imag.cloneNode(true);
    div.style.left = event.pageX+ "px";
    div.style.top = event.pageY + "px";
    div.style.width = "75px" ;
    div.style.height = "75px";
    div.style.position = "absolute" ;
    cln.style.width = "75px" ;
    cln.style.height = "75px";
    cln.classList.add("clona");
    div.append(cln);
    div.style.zIndex="999";

    document.body.appendChild(div);
}
function timer(){

     time = setInterval(function(){
        document.getElementById('cron').innerHTML='0' + min + ':' + sec;
        sec--;
        if (sec < 0)
           {if(min < 1)
           {
            clearInterval(time);
           }
            else { min = min-1; sec = 59}
        }
    }, 1000);
}

MeniuPauza = function (event) {
  if(event.key=='Enter')
    if(cont == 1)
   
        { document.body.style.opacity ="0.1";
          clearInterval(time);
          document.querySelectorAll("button")[0].style.opacity = "1";
          document.querySelectorAll("button")[1].style.opacity = "1";
          cont = 2;
            }
    else { time = setInterval(function(){
        document.getElementById('cron').innerHTML='0' + min + ':' + sec;
        sec--;
        if (sec < 0)
           {if(min < 1)
           {
            clearInterval(time);
           }
            else { min = min-1; sec = 59}
        }
    }, 1000);
    cont = 1;
    document.body.style.opacity ="1";

    }
        
    
}
let cont = 1; 


window.addEventListener("keydown", MeniuPauza); 
window.addEventListener("click",PuneIngrediente);