const display = document.querySelector('#display');
const buttons = document.querySelectorAll("button");
buttons.forEach((item) =>{
   item.onclick = ()=>{
       if(item.id=="clear"){
           display.innerText = "";
        }
        else if(item.id =="backspace"){
            let string = display.innerText.toString();
            display.innerText = string.substr(0,string.length-1);
        }
        else if (display.innertext != "" && item.id =="equal"){
            display.innerText = eval(display.innerText);
        }
        else if (display.innertext == "" && item.id =="equal"){
            display.innerText = 'Empty!';
            setTimeout(()=>(display.innertext =''),2000);
        }
        else {
            display.innerText += item.id;
        }
};
});

    const themeToggleBtn = document.querySelector('.theme-toggler');
    const  calculator= document.querySelector('.calculator');
    const toggleicon=document.querySelector('.toggler-icon');

    let isDark = false;
    themeToggleBtn.onclick = ()=>{
        calculator.classList.toggle('dark');
        themeToggleBtn.classList.toggle('active');
        isDark = !isDark;

    };


