const moreInfo1Button = document.getElementById('more-info-1');
const moreInfo1Content = document.getElementById('more-info-1-content');

moreInfo1Button.addEventListener('click', () => {
if (moreInfo1Content.style.display === 'none') {
moreInfo1Content.style.display = 'block';
moreInfo1Content.innerHTML = '<p>Me gusta aprender nuevos lenguajes de programación y experimentar con nuevas tecnologías.</p>';
} else {
moreInfo1Content.style.display = 'none';
moreInfo1Content.innerHTML = '';
}
});

const moreInfo2Button = document.getElementById('more-info-2');
const moreInfo2Content = document.getElementById('more-info-2-content');

moreInfo2Button.addEventListener('click', () => {
if (moreInfo2Content.style.display === 'none') {
moreInfo2Content.style.display = 'block';
moreInfo2Content.innerHTML = '<ul><li>Desarrollo de aplicaciones móviles utilizando Flutter</li><li>Gestión de bases de datos utilizando MySQL y MongoDB</li></ul>';
} else {
moreInfo2Content.style.display = 'none';
moreInfo2Content.innerHTML = '';
}
});

const moreInfo3Button = document.getElementById('more-info-3');
const moreInfo3Content = document.getElementById('more-info-3-content');

moreInfo3Button.addEventListener('click', () => {
if (moreInfo3Content.style.display === 'none') {
moreInfo3Content.style.display = 'block';
moreInfo3Content.innerHTML = '<ul><li>Desarrollo de aplicaciones web utilizando Angular</li><li>Gestión de proyectos utilizando metodologías ágiles</li></ul>';
} else {
moreInfo3Content.style.display = 'none';
moreInfo3Content.innerHTML = '';
}
});

const moreInfo4Button = document.getElementById('more-info-4');
const moreInfo4Content = document.getElementById('more-info-4-content');

moreInfo4Button.addEventListener('click', () => {
if (moreInfo4Content.classList.contains('displays-none')) {
moreInfo4Content.classList.remove('displays-none');
moreInfo4Content.innerHTML = '<p>He trabajado en proyectos de e-commerce utilizando Magento y WooCommerce.</p>';
} else {
moreInfo4Content.classList.add('displays-none');
moreInfo4Content.innerHTML = '';
}
});
