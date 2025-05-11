const listLinks = document.querySelectorAll ('.list__link');
const extensionThemes = document.querySelector('.extension__theme')
const extensionThemesLight = '<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#091540" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>'
const extensionThemesDark = '<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>'


listLinks.forEach( listLink => {
    listLink.addEventListener('click', function () {
        document.querySelector('.list__link--active').classList.remove('list__link--active');
        listLink.classList.add('list__link--active');
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.extension__input');
  
    inputs.forEach(function(input) {
      const slider = input.nextElementSibling;
      const swichContainer = input.parentElement;
  
      input.addEventListener("change", function () {
        if (input.disabled) return;
  
        if (input.checked) {
          slider.classList.add("slider--show");
          swichContainer.style.backgroundColor = 'hsl(0, 0%, 78%)';
        } else {
          slider.classList.remove("slider--show");
          swichContainer.style.backgroundColor = 'hsl(3, 71%, 56%)';
        }
      });
    });
  });
  
  extensionThemes.addEventListener ('click', function () {
    document.documentElement.classList.toggle('dark-theme')

    if (document.documentElement.classList.contains('dark-theme')) {
        window.localStorage.setItem('theme','dark-theme')
        extensionThemes.innerHTML = extensionThemesDark
    } else {
        window.localStorage.setItem('theme','light-theme')
        extensionThemes.innerHTML = extensionThemesLight
    }
})

if(window.localStorage.getItem('theme') === 'dark-theme') {
    document.documentElement.classList.add('dark-theme')
    extensionThemes.innerHTML = extensionThemesDark
} else {
    document.documentElement.classList.remove('dark-theme')
    extensionThemes.innerHTML = extensionThemesLight
}


function filterBoxes() {
  const activeFilter = document.querySelector('.list__link--active').textContent.trim().toLowerCase();
  const boxes = document.querySelectorAll('.extension__box');
  boxes.forEach(box => {
      const input = box.querySelector('.extension__input');
      if (activeFilter === 'all') {
          box.style.display = '';
      } else if (activeFilter === 'active') {
          box.style.display = input.checked ? '' : 'none';
      } else if (activeFilter === 'inactive') {
          box.style.display = !input.checked ? '' : 'none';
      }
  });
}

document.querySelectorAll('.list__link').forEach(link => {
  link.addEventListener('click', filterBoxes);
});

document.querySelectorAll('.extension__input').forEach(input => {
  input.addEventListener('change', filterBoxes);
});

filterBoxes();

  