const $frase = document.getElementById("Citacao");
const $autor = document.getElementById("Autor");


let frases = {
    "Ano Hana": "Eu sempre quis te ver de novo.Te pedir desculpas.Dizer que te amava.",
    "Donquixote Doflamingo": "Aqueles que estão no topo determinam o que está errado e o que está certo! Este lugar é muito neutro! Você acha que a justiça vai prevalecer? Mas é claro que vai! Quem vencer esta guerra vai se tornar a justiça!",
    "Pain": "Por vezes você precisa de sofrer para saber, cair para crescer, perder para ganhar porque a maiores lições na vida são aprendidas através da dor.",
    "Aizen Sousuke": "Ninguém começa no topo do mundo. Nem eu, nem você, nem mesmo Deus... Mas o vazio insuportável do trono do céu acabou. De agora em diante, EU ESTAREI SENTADO NELE!",
    "Godo": " Escute, esse é o conselho de um velho: O ódio é o lugar para onde vai o homem que não é capaz de suportar a tristeza.",
    "Isaac Netero": "A oração vem do coração. Se o coração alcança a forma correta, torna-se emoção...E emoções podem ser manifestadas",
    "Monge Takuan": "Preocupado com uma única folha, você não verá a árvore. Preocupado com uma única árvore você não perceberá toda a floresta. Não se preocupe com um único ponto. Veja tudo em sua plenitude sem se esforçar.",
    "Edward Elric": "Não somos anjos nem demônios, somos apenas meros humanos fracos que não são capazes de salvar nem uma criança indefesa.",
    "L": "Não importa o quanto tente, você sozinho não pode mudar o mundo. Mas este é o lado bonito do mundo.",
    "Endou": "Não há vergonha em errar, vergonha é não ter dado tudo de si por ter medo de errar.",
    "Seiya de Pégaso": "Cicatrizes são marcas da coragem… são verdadeiras medalhas da coragem! Como é que vc que não conhece a dor, pode ter orgulho de sua vitória?!"
};


let citações = Object.keys(frases);
console.log(citações)

function gerar() {
    const random = Math.floor(Math.random() * citações.length);
    $frase.innerHTML = frases[citações[random]];
    $autor.innerHTML = citações[random];
}

gerar()