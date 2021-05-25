const accordionBtns = document.querySelectorAll('.accordion-question')

accordionBtns.forEach(btn => {
 btn.addEventListener('click', (event)=>{


 if(!btn.classList.contains('open')){

  btn.nextElementSibling.style.display = 'block'
  let accHeight = btn.nextElementSibling.clientHeight


  setTimeout(() =>{
 btn.nextElementSibling.style.height = accHeight + 'px'
  btn.nextElementSibling.style.display = ''
  }, 1)
 
   btn.nextElementSibling.classList = 'accordion-collapse collapsing'


  setTimeout(() => {

    btn.nextElementSibling.classList = 'accordion-collapse open'
  
  }, 300)
 }
else{

  btn.nextElementSibling.classList = 'accordion-collapse collapsing'
  setTimeout(() => {
    btn.nextElementSibling.style.height = '0px'
  }, 1)

  setTimeout(() =>{

    btn.nextElementSibling.classList = 'accordion-collapse collapse'
    btn.nextElementSibling.style.height = ''
  })

 
}

  btn.classList.toggle('open')
  console.log( btn);
 
 })
});