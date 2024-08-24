let Saturate =document.getElementById("Saturate")
let Countrast =document.getElementById("Countrast")
let Brightness =document.getElementById("Brightness")
let Speia =document.getElementById("Speia")
let Grayscale =document.getElementById("Grayscale")
let Blur =document.getElementById("Blur")
let Huerotate =document.getElementById("Hue-rotate")

 let imgtoUpload =document.getElementById("imgu")
 let imgbox =document.getElementById("imgbox")
let Download =document.getElementById("Download")
let reset =document.getElementById("reset")
let upload =document.getElementById("upload")
 

let canvas =document.getElementById("canvas")
const ctx =canvas.getContext('2d')





window.onload=function(){
    Download.style.display='none'
    reset.style.display='none'
    imgbox.style.display='none'
}
upload.onchange=function(){
    Download.style.display='block'
    reset.style.display='block'
    imgbox.style.display='block'
    let file =new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload=function(){
        imgtoUpload.src=file.result;


}
imgtoUpload.onload=function(){
    canvas.width =imgtoUpload.width
    canvas.height =imgtoUpload.height
    ctx.drawImage(imgtoUpload,0,0,canvas.width,canvas.height)
    imgtoUpload.style.display='none'
}
}

// Saturate.addEventListener("input",function(){
// imgtoUpload.style.filter=`saturate ${Saturate.value}% `

// }


let filters =document.querySelectorAll("ul li input")
filters.forEach( filter => {
    filter.addEventListener('input',function(){
        ctx.filter=`
        saturate(${Saturate.value}%) 
        contrast(${Countrast.value}%) 
        brightness(${Brightness.value}%) 
        sepia(${Speia.value}% )
        grayscale(${Grayscale.value}%)
        blur(${Blur.value}px)
        hue-rotate(${Huerotate.value}deg)
        
        `
        ctx.drawImage(imgtoUpload,0,0,canvas.width,canvas.height)
    })
}
)

reset.onclick= function (){
    
    // imgtoUpload.filter="none"
    // imgtoUpload.filter=`none`
    // // ctx.filter="none"
    ctx.filter=`none`
//    ctx.filter=  " none| blur() |brightness() |contrast()  |drop-shadow() |grayscale() |hue-rotate() |invert() |opacity() |saturate() | sepia() "
    Saturate.value='100'
    Countrast.value='100'
    Brightness.value='100'
    Speia.value='100'
    Grayscale.value='0'
    Blur.value='0'
    Huerotate.value='0'
    ctx.drawImage(imgtoUpload,0,0,canvas.width,canvas.height)
    }

Download.onclick=function(){
    Download.href =canvas.toDataURL("")
}