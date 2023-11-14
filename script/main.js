const img = document.getElementById("img")

const imgs = document.querySelectorAll("#img img")

let idx = 0;

/*function carrossel(){
	idx++;
	
	if(idx > imgs.length - 1){
		idx = 0;
	}
	
	img.style.transform = `translateX(${-idx * 100}%)`
}
setInterval(carrossel, 2300)
*/
 let posicao = document.getElementById("sobreMim")

 //217.90625
 let p = posicao.getBoundingClientRect()

 let sobreMim = document.getElementById("sobre")

 let oqFaco = document.getElementById("faco")

 let projeto = document.getElementById("projeto")

 let objetivo = document.getElementById("objetivo")

 let contato = document.getElementById("contato")

 sobreMim.addEventListener("click", function() {

	window.scrollTo(0, 850)
	
 })
 oqFaco.addEventListener("click", function() {

	window.scrollTo(0, 1440)
	
 })

 projeto.addEventListener("click", function() {

	window.scrollTo(0, 1103.53125)
	
 })

 objetivo.addEventListener("click", function() {

	window.scrollTo(0, 2300)
	
 })

 contato.addEventListener("click", function() {

	window.scrollTo(0, 420)
	
 })

 document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('scroll', revealContent);
  });
  
  function revealContent() {
	var content = document.getElementById('content');
	var content2 = document.getElementById('content2');
	var content3 = document.getElementById('content3');

	var contentPosition = content.getBoundingClientRect().top;
	var contentPosition2 = content2.getBoundingClientRect().top;
	var contentPosition3 = content3.getBoundingClientRect().top;


	var screenPosition = window.innerHeight / 1.3; // Ajuste conforme necessário
	var screenPosition2 = window.innerHeight / 1.6; // Ajuste conforme necessário
	var screenPosition3 = window.innerHeight / 2; // Ajuste conforme necessário
  
  
	if (contentPosition < screenPosition) {
	  content.style.opacity = '1';
	  content.style.transform = 'translateX(0)';
	}

	  if (contentPosition2 < screenPosition2) {
		content2.style.opacity = '1';
		content2.style.transform = 'translateX(0)';
	}

	if (contentPosition3 < screenPosition3) {
		content3.style.opacity = '1';
		content3.style.transform = 'translateX(0)';
	}
  }
  

