container = document.querySelector('body');
//container.style.backgroundColor = 'green'
const buttons = document.querySelectorAll('.color-box')

buttons.forEach((button)=>{
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e)
        console.log(e.target)
        const color = e.target.id;
        switch(color){
            case 'red':
                container.style.backgroundColor = 'lightcoral';
                break;
            case 'blue':
                container.style.backgroundColor = 'lightblue';
                break;
            case 'green':
                container.style.backgroundColor = 'lightgreen'
                break;
            case 'yellow':
                container.style.backgroundColor = 'goldenrod'
                break;
            default:
                console.log("Invalid click");                    
        }
    })
})