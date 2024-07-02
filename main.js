let harp = prompt('Ismingizni yozing')
let hapf = prompt('Harf yozing')
if(harp.toLocaleLowerCase().includes(hapf.toLocaleLowerCase())){
    alert(`Ismingizda ${hapf} harfi bor`)
}else{
    alert(`Ismingizni ${hapf} harfi yoq`);
}