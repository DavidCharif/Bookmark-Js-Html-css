// extraer del dom

const cambioPestana = (pos) => {
    
    let opcion1 = document.getElementById("option1")
    let opcion2 = document.getElementById("option2")
    let opcion3 = document.getElementById("option3")
    let button1 = document.getElementById("button1")
    let button2 = document.getElementById("button2")
    let button3 = document.getElementById("button3")

    switch(pos){
        case 1:
            /* border-bottom: 5px solid  hsl(0, 94%, 66%); */    
            button1.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";
            button2.style.borderBottom = "1px solid  grey";
            button3.style.borderBottom = "1px solid  grey";
            opcion1.style.display = ""
            opcion2.style.display = "none"
            opcion3.style.display = "none"
            break;
        case 2:
            button1.style.borderBottom = "1px solid  grey";
            button2.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";
            button3.style.borderBottom = "1px solid  grey";
            opcion1.style.display = "none"
            opcion2.style.display = ""
            opcion3.style.display = "none"
            break;
        case 3:
            button1.style.borderBottom = "1px solid grey";
            button2.style.borderBottom = "1px solid  grey";
            button3.style.borderBottom = "3px solid  hsl(0, 94%, 66%)";            
            opcion1.style.display = "none"
            opcion2.style.display = "none"
            opcion3.style.display = ""
            break;
    }
}
