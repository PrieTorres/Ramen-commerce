let combosRamen = [
    {
        id: 1,
        nome: 'combo familia',
        complementos: ['3 ramens de sua escolha (2 pequenos e 1 médio)','1,5L de chá gelado','3 hashis de cortesia'],
        preco: 90.89

    },
    {
        id: 2,
        nome: 'combo casal',
        complementos: ['2 ramens de sua escolha (2 médios)','1L de chá gelado','2 hashis de cortesia'],
        preco: 63.44,
        descricao: 'Um combo pra você que quer partilhar de seus bom gosto culinário com o seu par, uma ótima refeição'
    }
]

let ramensJson = [
    {
        id: 0,
        nome: "Ramen vegetariano",
        caldo: 'vegetariano tradicional',
        carne: 'Vegetariano',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Brócolis crispy',
            'Batata doce nham nham',
            'Kombu (alga, uma delícia)'
        ],
        precos:[25.78,39.88,55.89],
        tamanho: 'medio',
        descricao: 'Um ramen pra você que não come carne mas ama uma comida oriental muito boa de qualidade garantida',
        imagem: 'img/ramens/ramen-vegetariano-cima-edit.png',
        quantidade: 1
    },
    {
        id: 1,
        nome: "Ramen Apimentado",
        caldo: 'Apimentado',
        carne: 'Chasu (porco)',
        complementos: [
            'Cebola crispy',
            'Cebolinha',
            'Kombu',
            'Gergelim',
        ],
        precos:[32.14,41.17,58.99],
        tamanho: 'medio',
        descricao: 'Um ramen pra você que assim como adora um quentinho no coração também adora um quentinho na boca, picancia garantida, recomendado a todos os fortes e corajosos, considere como um desafio',
        imagem: 'img/ramens/ramen-picante.jpg',
        quantidade: 1
    },
    {
        id: 2,
        nome: "Ramen tradicional",
        caldo: 'Tradicional',
        carne: 'Nitamago (porco e ovos)',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Brocolis crispy',
            'Batata doce nham nham',
            'algumas delícias',
            'outros complementos',
            'muito amor',
            'ingrediente secreto'
        ],
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        quantidade: 1,
        imagem: 'img/ramens/ramen-tradicional.jpg',
        descricao: 'Um ramen tradicional pra você que sempre teve um pouco de curiosidade para provar como é e quer provar o sabor mais próximo de como é servido na China, divirta-se'
    },
    {
        id: 3,
        nome: "Ramen Nitamago Agridoce",
        caldo: 'Agridoce',
        carne: 'Nitamago (porco e ovos)',
        complementos: [
            'Shitake',
            'Brocolis crispy',
            'Batata doce nham nham',
            'Legumes, essas coisas',
            'outros complementos',
            'elemento X',
            'ingrediente secreto'
        ],
        quantidade: 1,
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_4.png',
        descricao: 'Um ramen de Nitamago agridoce pra você, os detalhes? bom você só vai saber depois de experimentar'
    },
    {
        id: 4,
        nome: "Ramen Extreme",
        caldo: 'Apimentado',
        carne: 'Bacon',
        complementos: [
            'Menma',
            'Cebolinha',
            'Muito amor',
            'Ingrediente secreto',
            'Alho crispy',
            'Gergelim',
            'Geléia de pimenta'
        ],
        quantidade: 1,
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_5.png',
        descricao: 'O Extreme é para qualquer um que goste de sabores fortes, um dos rámens mais vendidos aqui, e a sua popularidade não é atoa'
    },
    {
        id: 5,
        nome: "Ramen Vegetablerr",
        caldo: 'Apimentado',
        carne: 'Vegetariano',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Brocolis crispy',
            'Batata doce nham nham',
            'algumas delícias',
            'outros complementos',
            'muito amor',
            'ingrediente secreto',
            'Alho crispy',
            'Gergelim',
            'Geléia de pimenta'
        ],
        quantidade: 1,
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_6.png',
        descricao: 'O Vegetablerr é para você, nosso colega vegetariano ou que apenas não quer carne hoje mas ainda quer desfrutar de uma completa e deliciosa refeição com uma certa picância, recomendado apenas para os fortes'
    },
    {
        id: 6,
        nome: "Ramen Diferentão",
        caldo: 'Agridoce e Picante',
        carne: 'Nitamago (porco e ovos)',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Cebola crispy',
            'Menma',
            'Gergelim',
            'Cubinhos de cenoura',
            'Kani',
            'Um pouco de caldo de galinha',
            'Sorte',
            'Brócolis picado'
        ],
        quantidade: 1,
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_7.png',
        descricao: 'Esse rámen é para você, que é o diferentão do grupo e curte algo um pouco mais diferente do padrão, não é estranho, é exótico, e é melhor ainda que seja só você que goste porque assim ninguém te pede um pouco ;)'
    },
    {
        id: 7,
        nome: "Ramen Egg hippie",
        caldo: 'Apimentado leve',
        carne: 'Ovos, obviamente',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Cebola crispy',
            'Batata doce',
            'algumas delícias',
            'ingrediente secreto',
            'Multiplos legumes',
            'Saúde'
        ],
        quantidade: 1,
        precos:[30.00,37.46,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_11.png',
        descricao: 'Um ramen quase vegetaranio para você que não quer carne mas não quer abrir mão de um ovo, uma escolha muito popular devido a ser, de fato, gostoso'
    },
    {
        id: 8,
        nome: "Ramen ChefKiss",
        caldo: 'Apimentado leve e Agridoce',
        carne: 'Nitamago (porco e ovos)',
        complementos: [
            'Shitake',
            'Cebolinha',
            'Cebola crispy',
            'Brócolis picadinho',
            'Menma',
            'algumas delícias',
            'Gergelim',
            'muito amor',
            'ingrediente secreto',
            'Fatias pequenas e crocantes de bacon',
            'Legumes'
        ],
        tamanho: 'medio',
        quantidade: 1,
        precos:[39.00,47.56,52.25],
        tamanho: 'medio',
        imagem: 'img/ramens/ramen_10.png',
        descricao: 'Simplesmente o mais famoso da casa, levemente escondido do público para ter um leve mistério envolvido, boatos dizem que foi este rámen que tornou Chuck Norris tão poderoso'
    }
];

let carrinho = [];
let ramensJson_personalizado=[];