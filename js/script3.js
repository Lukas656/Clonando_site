// sessão dos botoes inferiores
let edgar = document.querySelector('#edgar');
let ashley = document.querySelector('#ashley');
//Os Sete
let luzEstrela = document.querySelector('#luzEstrela');
let patria = document.querySelector('#patria');
let noire = document.querySelector('#noire');
let maeve = document.querySelector('#maeve');
let tBala = document.querySelector('#tBala');
// Outros Herois
let profundo = document.querySelector('#profundo');
let soldierBoy = document.querySelector('#soldierBoy');
// The Boys
let bruto  = document.querySelector('#bruto');
let leitinho  = document.querySelector('#leitinho');
let frances = document.querySelector('#frances');
let kimiko = document.querySelector('#kimiko');
// fbsa
let hughie = document.querySelector('#hughie');
let vic = document.querySelector('#vic');

// sessão dos botoes inferiores
let conteiner1 = document.querySelector('.edgar');
let conteiner2 = document.querySelector('.ashley');
// Os Sete
let conteiner3 = document.querySelector('.luzEstrela');
let conteiner4 = document.querySelector('.patria');
let conteiner5 = document.querySelector('.noire');
let conteiner6 = document.querySelector('.maeve');
let conteiner7 = document.querySelector('.tBala');
// Outros Herois
let conteiner8 = document.querySelector('.profundo');
let conteiner9 = document.querySelector('.soldierBoy');
// The Boys
let conteiner10 = document.querySelector('.bruto');
let conteiner11 = document.querySelector('.leitinho');
let conteiner12 = document.querySelector('.frances');
let conteiner13 = document.querySelector('.kimiko');
// fbsa
let conteiner14 = document.querySelector('.hughie');
let conteiner15 = document.querySelector('.vic');
// Botoes

// Precidencia da Vought
edgar.addEventListener('click', function() {
    conteiner1.style.display = 'block';
    conteiner2.style.display = 'none';
});
ashley.addEventListener('click', function() {
    conteiner2.style.display = 'block';
    conteiner1.style.display = 'none';
});
// Os Sete
luzEstrela.addEventListener('click', function() {
    conteiner3.style.display = 'block';
    conteiner4.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteiner7.style.display = 'none';
    
});
patria.addEventListener('click', function() {
    conteiner4.style.display = 'block';
    conteiner3.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner6.style.display = 'none';
    conteiner7.style.display = 'none';
    
});
noire.addEventListener('click', function() {
    conteiner5.style.display = 'block';
    conteiner6.style.display = 'none';
    conteiner7.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner3.style.display = 'none';
    
});
maeve.addEventListener('click', function() {
    conteiner6.style.display = 'block';
    conteiner7.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner3.style.display = 'none';
    
});
tBala.addEventListener('click', function() {
    conteiner7.style.display = 'block';
    conteiner6.style.display = 'none';
    conteiner5.style.display = 'none';
    conteiner4.style.display = 'none';
    conteiner3.style.display = 'none';    
});
// Outros - Herois
profundo.addEventListener('click', function() {
    conteiner8.style.display = 'block';
    conteiner9.style.display = 'none';
});
soldierBoy.addEventListener('click', function() {
    conteiner9.style.display = 'block';
    conteiner8.style.display = 'none';
});
// The Boys
bruto.addEventListener('click', function() {
    conteiner10.style.display = 'block';
    conteiner11.style.display = 'none';
    conteiner12.style.display = 'none';
    conteiner13.style.display = 'none';
});
leitinho.addEventListener('click', function() {
    conteiner11.style.display = 'block';
    conteiner10.style.display = 'none';
    conteiner12.style.display = 'none';
    conteiner13.style.display = 'none';
});
frances.addEventListener('click', function() {
    conteiner12.style.display = 'block';
    conteiner10.style.display = 'none';
    conteiner11.style.display = 'none';
    conteiner13.style.display = 'none';
});
kimiko.addEventListener('click', function() {
    conteiner13.style.display = 'block';
    conteiner10.style.display = 'none';
    conteiner11.style.display = 'none';
    conteiner12.style.display = 'none';
});
// fbsa
hughie.addEventListener('click', function(){
    conteiner14.style.display = 'block';
    conteiner15.style.display = 'none';
});
vic.addEventListener('click', function(){
    conteiner15.style.display = 'block';
    conteiner14.style.display = 'none';
});

//sessão dos botoes superiores
let vought = document.querySelector('#vought');
let sete = document.querySelector('#sete');
let herois = document.querySelector('#herois');
let theBoys = document.querySelector('#theBoys');
let fbsa = document.querySelector('#fbsa');



//sessão dos botoes superiores
let navegacao1 = document.querySelector('.vought');
let navegacao2 = document.querySelector('.sete');
let navegacao3 = document.querySelector('.herois');
let navegacao4 = document.querySelector('.theBoys');
let navegacao5 = document.querySelector('.fbsa');


// Botoes superiores

vought.addEventListener('click', function() {
    navegacao1.style.display = 'block';
    navegacao2.style.display = 'none';
    navegacao3.style.display = 'none';
    navegacao4.style.display = 'none';
    navegacao5.style.display = 'none';
});
sete.addEventListener('click', function() {
    navegacao2.style.display = 'block';
    navegacao1.style.display = 'none';
    navegacao3.style.display = 'none';
    navegacao4.style.display = 'none';
    navegacao5.style.display = 'none';
});

herois.addEventListener('click', function() {
    navegacao3.style.display = 'block';
    navegacao2.style.display = 'none';
    navegacao1.style.display = 'none';
    navegacao4.style.display = 'none';
    navegacao5.style.display = 'none';
});
theBoys.addEventListener('click', function() {
    navegacao4.style.display = 'block';
    navegacao5.style.display = 'none';
    navegacao3.style.display = 'none';
    navegacao2.style.display = 'none';
    navegacao1.style.display = 'none';
});
fbsa.addEventListener('click', function() {
    navegacao5.style.display = 'block';
    navegacao4.style.display = 'none';
    navegacao3.style.display = 'none';
    navegacao2.style.display = 'none';
    navegacao1.style.display = 'none';
});

// troca Section


const explore = document.getElementById('explore');
const eps = document.getElementById('eps');
const trailer = document.getElementById('trailer');

explore.addEventListener('click', ()=>{
    const fundoSection = document.querySelector('.fundoSection').style.display = 'block';
    const sectionTreiler = document.querySelector('.trailer').style.display = 'block';
    const sectionEps = document.querySelector('.eps').style.display = 'none';
});
eps.addEventListener('click', ()=>{
    const sectionEps = document.querySelector('.eps').style.display = 'flex';
    const fundoSection = document.querySelector('.fundoSection').style.display = 'none';
    const sectionTreiler = document.querySelector('.trailer').style.display = 'none';
});
trailer.addEventListener('click', ()=>{
    const sectionEps = document.querySelector('.eps').style.display = 'none';
    const fundoSection = document.querySelector('.fundoSection').style.display = 'none';
    const sectionTreiler = document.querySelector('.trailer').style.display = 'block';
});