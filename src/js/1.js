const selected = document.querySelector('.selected');
const optionsContainer = document.querySelector('.options-container');
const info = document.querySelector('.info');
const category = document.querySelector('.cat');
const name = document.querySelector('.f_name');

const automobiles = document.querySelector('.automobiles');
const film = document.querySelector('.film');
const science = document.querySelector('.science');
const sport = document.querySelector('.sport');
const art = document.querySelector('.art');
const tutorials = document.querySelector('.tutorials');

const optionsList = document.querySelectorAll('.option');
const option_filmName = document.querySelectorAll('.option_filmName');

const ULL = document.querySelectorAll('.opt');

selected.addEventListener('click', () => {
  info.classList.remove('active');
  optionsContainer.classList.toggle('active');
});

optionsList.forEach(e => {
  e.addEventListener('click', () => {
    selected.value = e.querySelector('label').innerHTML;
    optionsContainer.classList.remove('active');

    category.innerHTML = e.querySelector('label').innerHTML;
    const selectedCategory = e.querySelector('label').innerHTML.toLowerCase();
    ULL.forEach(ull => {
      if (ull.classList.contains(selectedCategory)) {
        ull.addEventListener('click', () => {
          info.classList.add('active');
        });

        ull.classList.remove('op');
      }
      if (!ull.classList.contains(selectedCategory)) {
        ull.classList.add('op');
        ull.classList.remove('active');
      }
    });
  });
});

option_filmName.forEach(e => {
  e.addEventListener('click', () => {
    name.innerHTML = e.querySelector('label').innerHTML;
  });
});
