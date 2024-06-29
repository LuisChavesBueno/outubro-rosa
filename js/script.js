const verMais = document.querySelector('.click-mais')
const aparecer = document.getElementById('aparecer') 
const clickOcudar = document.querySelector('.click-ocudar')

verMais.addEventListener('click' , () => {
    aparecer.style.display = 'block'
    verMais.style.display = 'none'
})

clickOcudar.addEventListener('click' , () => {
    aparecer.style.display = 'none'
    verMais.style.display = 'block'
})