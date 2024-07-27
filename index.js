var al = document.querySelectorAll(".item").length;
for(i=0 ; i< al; i++){
    document.querySelectorAll(".item")[i].addEventListener("click", function () {
       var inner = this.innerHTML;
         soundkey(inner);

    });
}

document.addEventListener("keydown", function (event) {
    soundkey(event.key);
     
});


function soundkey(key){
    switch (key) {
        case "a":
            var audio = new Audio('sounds/a.wav');
            audio.play();
            document.querySelector(".a").classList.add("apple")
            setTimeout(function () {
                document.querySelector(".a").classList.remove("apple");
                
            }, 2000);
            break;
        case "b":
            var audio = new Audio('sounds/b.wav');
            audio.play();
             document.querySelector(".b").classList.add("ball")
            setTimeout(function () {
                document.querySelector(".b").classList.remove("ball");
                
            }, 2000);
            break;
        case "c":
            var audio = new Audio('sounds/c.wav');
            audio.play();
            document.querySelector(".c").classList.add("cat")
            setTimeout(function () {
                document.querySelector(".c").classList.remove("cat");
                
            }, 2000);
            break;
        case "d":
            var audio = new Audio('sounds/d.wav');
            audio.play();
            document.querySelector(".d").classList.add("dog")
            setTimeout(function () {
                document.querySelector(".d").classList.remove("dog");
                
            }, 2000);
            break;
        case "e":
             var audio = new Audio('sounds/e.wav');
            audio.play();
            document.querySelector(".e").classList.add("elephant")
            setTimeout(function () {
                document.querySelector(".e").classList.remove("elephant");
                
            }, 2000);
            break;

        case "f":
            var audio = new Audio('sounds/f.wav');
            audio.play();
            document.querySelector(".f").classList.add("frog")
            setTimeout(function () {
                document.querySelector(".f").classList.remove("frog");
                
            }, 2000);
            break;
         case "g":
            var audio = new Audio('sounds/g.wav');
            audio.play();
            document.querySelector(".g").classList.add("goat")
            setTimeout(function () {
                document.querySelector(".g").classList.remove("goat");
                
            }, 2000);
            break; 
        case "h":
            var audio = new Audio('sounds/h.wav');
            audio.play();
            document.querySelector(".h").classList.add("horse")
            setTimeout(function () {
                document.querySelector(".h").classList.remove("horse");
                
            }, 2000);
            break;
        case "i":
             var audio = new Audio('sounds/i.wav');
            audio.play();
            document.querySelector(".i").classList.add("ice")
            setTimeout(function () {
                document.querySelector(".i").classList.remove("ice");
                
            }, 2000);
            break;     
        case "j":
            var audio = new Audio('sounds/j.wav');
            audio.play();
            document.querySelector(".j").classList.add("jacket")
            setTimeout(function () {
                document.querySelector(".j").classList.remove("jacket");
                
            }, 2000);
            break;
        case "k":
             var audio = new Audio('sounds/k.wav');
            audio.play();
            document.querySelector(".k").classList.add("kite")
            setTimeout(function () {
                document.querySelector(".k").classList.remove("kite");
                
            }, 2000);
            break;
        case "l":
            var audio = new Audio('sounds/l.wav');
            audio.play();
            document.querySelector(".l").classList.add("lion")
            setTimeout(function () {
                document.querySelector(".l").classList.remove("lion");
                
            }, 2000);
            break;
        case "m":
             var audio = new Audio('sounds/m.wav');
            audio.play();
            document.querySelector(".m").classList.add("monkey")
            setTimeout(function () {
                document.querySelector(".m").classList.remove("monkey");
                
            }, 2000);
            break;
        case "n":
            var audio = new Audio('sounds/n.wav');
           audio.play();
           document.querySelector(".n").classList.add("night")
           setTimeout(function () {
               document.querySelector(".n").classList.remove("night");
               
           }, 2000);
           break;
        case "o":
            var audio = new Audio('sounds/o.wav');
           audio.play();
           document.querySelector(".o").classList.add("orange")
           setTimeout(function () {
               document.querySelector(".o").classList.remove("orange");
               
           }, 2000);
           break;
        case "p":
            var audio = new Audio('sounds/p.wav');
           audio.play();
           document.querySelector(".p").classList.add("peacock")
           setTimeout(function () {
               document.querySelector(".p").classList.remove("peacock");
               
           }, 2000);
           break;
        case "q":
            var audio = new Audio('sounds/q.wav');
           audio.play();
           document.querySelector(".q").classList.add("quiz")
           setTimeout(function () {
               document.querySelector(".q").classList.remove("quiz");
               
           }, 2000);
           break;
        case "r":
            var audio = new Audio('sounds/r.wav');
           audio.play();
           document.querySelector(".r").classList.add("rainbow")
           setTimeout(function () {
               document.querySelector(".r").classList.remove("rainbow");
               
           }, 2000);
           break; 
        case "s":
            var audio = new Audio('sounds/s.wav');
           audio.play();
           document.querySelector(".s").classList.add("snake")
           setTimeout(function () {
               document.querySelector(".s").classList.remove("snake");
               
           }, 2000);
           break; 
        case "t":
            var audio = new Audio('sounds/t.wav');
           audio.play();
           document.querySelector(".t").classList.add("tiger")
           setTimeout(function () {
               document.querySelector(".t").classList.remove("tiger");
               
           }, 2000);
           break; 
        case "u":
            var audio = new Audio('sounds/u.wav');
           audio.play();
           document.querySelector(".u").classList.add("umbrella")
           setTimeout(function () {
               document.querySelector(".u").classList.remove("umbrella");
               
           }, 2000);
           break;  
        case "v":
            var audio = new Audio('sounds/v.wav');
           audio.play();
           document.querySelector(".v").classList.add("van")
           setTimeout(function () {
               document.querySelector(".v").classList.remove("van");
               
           }, 2000);
           break; 
        case "w":
            var audio = new Audio('sounds/w.wav');
           audio.play();
           document.querySelector(".w").classList.add("winner")
           setTimeout(function () {
               document.querySelector(".w").classList.remove("winner");
               
           }, 2000);
           break;
        case "x":
            var audio = new Audio('sounds/x.wav');
           audio.play();
           document.querySelector(".x").classList.add("xray")
           setTimeout(function () {
               document.querySelector(".x").classList.remove("xray");
               
           }, 2000);
           break;
        case "y":
            var audio = new Audio('sounds/y.wav');
           audio.play();
           document.querySelector(".y").classList.add("yard")
           setTimeout(function () {
               document.querySelector(".y").classList.remove("yard");
               
           }, 2000);
           break;
        case "z":
            var audio = new Audio('sounds/z.wav');
           audio.play();
           document.querySelector(".z").classList.add("zebra")
           setTimeout(function () {
               document.querySelector(".z").classList.remove("zebra");
               
           }, 2000);
           break;     
        default:
            break;
       }
}

setTimeout(function() {
                activebutton.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtkzZMTh_n9DE3CznuCnA8wVdQI7IQT9sDng&s')";
                
            }, 100);