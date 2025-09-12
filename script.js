const avanca=document.querySelectorAll ('.btn-proximo');
const reiniciarbtn=document.getElementById('btn-reiniciar');


avanca.forEach(button=> {
button.addEventListener('click', function(){
const atual=document.querySelector('.ativo');
const proximopasso='passo-'+this.getAttribute('data-proximo');

atual.remove('ativo');
const proximoElemento=document.getElementById(proximopasso);


if(proximoElemento){
proximoElemento.classList.add('ativo');
}else
    console.error('Elemento com ID"$ {proximopasso}'não encontrado. )

})
})
