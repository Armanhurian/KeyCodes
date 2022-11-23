let starter = document.getElementById('starter')
let ascii = document.getElementById('ascii')
let infos = document.getElementById('infos')

let keyCode =document.getElementById('keyCode')
let eventKey =document.getElementById('key')
let eventLocation =document.getElementById('location')
let eventWhich =document.getElementById('which')
let eventCode =document.getElementById('code')


document.body.addEventListener('keydown', function(event){
    
    starter.style.display='none'
    ascii.style.display='flex'
    infos.style.display='flex'

    keyCode.innerHTML=event.which
    eventWhich.innerHTML= event.which
    eventLocation.innerHTML= event.location
    eventCode.innerHTML= event.code
    eventKey.innerHTML= event.key
})