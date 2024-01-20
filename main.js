//Number 1 --------------------------------------------------
    
const list = document.querySelectorAll('.dino-cross') 
    
    for(let i = 0; i < list.length; i++){
        list[i].addEventListener('click', ()=>{
            list[i].style.textDecoration = 'line-through' 
        })
    }
    

//Number 2 ----------------------------------------------
    
const fadeOut = document.querySelectorAll('#fade-out') 
    
    for(let i = 0; i < fadeOut.length; i++){
        fadeOut[i].addEventListener('click', ()=>{
            fadeOut[i].style.opacity = '0%' 
        })}


//Number 3 -------------------------------------------------

const image = document.querySelectorAll('img') 
    
    for(let i = 0; i < image.length; i++){
        image[i].addEventListener('click', ()=>{
            image[i].style.width = '0px'
        })}


//Number 4 -------------------------------------------------

const destroyAll = document.querySelector('#destroy-all')

destroyAll.addEventListener('click', ()=>{
    for(let i = 0; i < list.length; i++){
        list[i].style.textDecoration = 'line-through'
    }
    for(let i = 0; i < fadeOut.length; i++){
        fadeOut[i].style.opacity = '0%'
    }
    for(let i = 0; i < image.length; i++){
        image[i].style.width = '0px'
    }
})


// let items = [list[i].style.textDecoration, fadeOut[i].style.opacity, image[i].style.width]
// destroyAll.addEventListener('click', ()=>{
// items.forEach(function(item){
//     console.log(item)
// })
// })

