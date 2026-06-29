const revealItems = document.querySelectorAll('.reveal');
function revealOnScroll(){
  revealItems.forEach(item=>{
    if(item.getBoundingClientRect().top < window.innerHeight - 80){
      item.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

document.querySelectorAll('.q').forEach(button=>{
  button.addEventListener('click',()=>{
    button.nextElementSibling.classList.toggle('open');
    button.classList.toggle('active');
  });
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));

document.getElementById('leadForm').addEventListener('submit', event=>{
  event.preventDefault();
  alert('Заявка отправлена! Мы скоро свяжемся с вами.');
});

// Премиум-анимации: мягкое свечение за мышкой и 3D-наклон плашек
window.addEventListener('pointermove', (event)=>{
  const x = Math.round((event.clientX / window.innerWidth) * 100);
  const y = Math.round((event.clientY / window.innerHeight) * 100);
  document.documentElement.style.setProperty('--mx', x + '%');
  document.documentElement.style.setProperty('--my', y + '%');
});

document.querySelectorAll('.card,.direction,.price').forEach((el)=>{
  el.addEventListener('pointermove', (event)=>{
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rx = ((y / rect.height) - .5) * -8;
    const ry = ((x / rect.width) - .5) * 8;
    el.style.setProperty('--rx', rx.toFixed(2) + 'deg');
    el.style.setProperty('--ry', ry.toFixed(2) + 'deg');
  });
  el.addEventListener('pointerleave', ()=>{
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  });
});
