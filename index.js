const dnes = dayjs();
const narozeniny = dayjs('2022-08-24');
const zprava = document.querySelector('#msg');

if (dnes.isAfter(narozeniny)) {
  zprava.textContent = 'Narozeniny mám zase až příští rok :(';
  zprava.classList.add('narozeniny--invalid');
} else {
  zprava.textContent = 'Už brzy budu mít narozeniny!';
  zprava.classList.add('narozeniny--valid');
}
