let combosRamen = [
    {
        id: 1,
        nome: 'combo familia',
        ingredientes: ['3 ramens de sua escolha (2 pequenos e 1 medio)','1,5L de chá gelado','3 hashis de cortesia'],
        preco: 90.89

    },
    {
        id: 2,
        nome: 'combo casal',
        ingredientes: ['2 ramens de sua escolha (2 medios)','1L de chá gelado','2 hashis de cortesia'],
        preco: 63.44,
        descricao: 'Um combo pra você que quer partilhar de seus bom gosto culinário com o seu par, uma ótima refeição'
    }
]

let ramensJson = [
    {
        id: 0,
        nome: "Ramen vegetariano",
        caldo: 'vegetariano tradicional',
        carne: 'nao',
        ingredientes: [
            'Shitake',
            'Cebolinha',
            'Brócolis crispy',
            'Batata doce nham nham',
            'Kombu (alga, uma delícia)'
        ],
        tamanhos:[1,2,3],
        precos:[25.78,39.88,55.89],
        descricao: 'Um ramen pra você que não come carne mas ama uma comida oriental muito boa de qualidade garantida',
        imagem: 'img/ramens/ramen-vegetariano-cima.png'
    },
    {
        id: 1,
        nome: "Ramen Apimentado",
        caldo: 'Apimentado',
        carne: 'Chasu (porco)',
        ingredientes: [
            'Cebola crispy',
            'Cebolinha',
            'Kombu',
            'Gergelim',
        ],
        tamanhos:[1,2,3],
        precos:[32.14,41.17,58.99],
        descricao: 'Um ramen pra você que assim como adora um quentinho no coração também adora um quentinho na boca, picancia garantida, recomendado a todos os fortes e corajosos, considere como um desafio',
        imagem: 'img/ramens/ramen-picante.jpg'
    },
    {
        id: 2,
        nome: "Ramen tradicional",
        caldo: 'Tradicional',
        carne: 'Nitamago (porco e ovos)',
        ingredientes: [
            'Shitake',
            'Cebolinha',
            'Brocolis crispy',
            'Batata doce nham nham',
            'algumas delícias',
            'outros ingredientes',
            'muito amor',
            'ingrediente secreto'
        ],
        tamanhos:[1,2,3],
        precos:[30.00,37.46,52.25],
        imagem: 'img/ramens/ramen-tradicional.jpg',
        descricao: 'Um ramen tradicional pra você que sempre teve um pouco de curiosidade para provar como é e quer provar o sabor mais próximo de como é servido na China, divirta-se'
    }
];

let carrinho = [];
let ramensJson_personalizado=[];