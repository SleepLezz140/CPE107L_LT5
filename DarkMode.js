//a function needed for the css element to change the text color
function DarkModeON() {
    var btn = document.body;
    btn.classList.toggle("dark-mode");
    
  }

  //This changes the text of the button
  var clicked= false;
function DMode(){
    
    if(!clicked){
        clicked = true;
        document.getElementById("btn").innerHTML = "Turn off dark mode";
    } else{
        clicked = false;
        document.getElementById("btn").innerHTML = "Turn on dark mode";
    }
    
}

//This switches the themes for the website
function Dark(){
    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'LT4Dark.css') { 
        theme.setAttribute('href', 'LT4.css'); 
    } else { 
        theme.setAttribute('href', 'LT4Dark.css'); 
    } 
}

//Gi isahan ko nalang ang functions sa isang function
function BtnClick(){
    DarkModeON()
    DMode()
    Dark()
}


