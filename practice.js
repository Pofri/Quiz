const names = document.querySelector('[data-name]');
console.log(names);
names.forEach(name =>{
    const nnn = name.dataset['id'];
    console.log(nnn)
});

// for(let i = 0; i < names.length; i++){
//     let name = names[i];
//     name.forEach(namess =>{
//         const nnnnn = namess.dataset['id'];
//         console.log(nnnnn)
//     })
// }