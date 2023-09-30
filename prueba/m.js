// const div = document.getElementById('myDiv');

// document.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const divX = div.getBoundingClientRect().left;
//     const divY = div.getBoundingClientRect().top;

//     const diffX = mouseX - divX - div.clientWidth / 2;
//     const diffY = mouseY - divY - div.clientHeight / 2;

//     const distance = Math.sqrt(diffX * diffX + diffY * diffY);

//     const angle = Math.atan2(diffY, diffX);
//     const speed = 5; // Puedes ajustar la velocidad

//     const moveX = Math.cos(angle) * speed;
//     const moveY = Math.sin(angle) * speed;

//     if (distance > speed) {
//         div.style.left = divX + moveX + 'px';
//         div.style.top = divY + moveY + 'px';
//     }
// });
// const div = document.getElementById('myDiv');

// document.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const divX = div.getBoundingClientRect().left + div.clientWidth / 2;
//     const divY = div.getBoundingClientRect().top + div.clientHeight / 2;

//     const diffX = mouseX - divX;
//     const diffY = mouseY - divY;

//     const angle = Math.atan2(diffY, diffX);

//     // Aplicamos una rotación a la div basada en el ángulo hacia el puntero
//     div.style.transform = `rotate(${angle}rad)`;
// });

// const div = document.getElementById('myDiv');

// document.addEventListener('mousemove', (e) => {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const divX = div.getBoundingClientRect().left + div.clientWidth / 2;
//     const divY = div.getBoundingClientRect().top + div.clientHeight / 2;

//     const diffX = mouseX - divX;
//     const diffY = mouseY - divY;

//     const angleX = -(diffY / 10); // Inclinación en el eje X
//     const angleY = -(diffX / 10); // Inclinación en el eje Y

//     // Aplicamos rotación en los ejes X e Y para la inclinación
//     div.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
// });
const div = document.getElementById('myDiv');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const divX = div.getBoundingClientRect().left + div.clientWidth / 2;
    const divY = div.getBoundingClientRect().top + div.clientHeight / 2;

    const diffX = mouseX - divX;
    const diffY = mouseY - divY;

    const angleX = -(diffY / 70); // Inclinación en el eje X (ajustado para menos inclinación)
    const angleY = -(diffX / 70); // Inclinación en el eje Y (ajustado para menos inclinación)

    div.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

