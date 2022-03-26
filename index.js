const dnes = dayjs();
const narozeniny = dayjs('2022-08-24');
const zprava = document.querySelector('#msg');

if (dnes.isAfter(narozeniny)) {
  zprava.innerHTML = 'Narozeniny mám zase až příští rok :(';
  zprava.classList.add('narozeniny--invalid');
} else {
  zprava.innerHTML = 'Už brzy budu mít narozeniny!';
  zprava.classList.add('narozeniny--valid');
}
