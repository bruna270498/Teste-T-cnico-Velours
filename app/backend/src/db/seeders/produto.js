module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
          'produtos',[
            {
                name: 'Televisão',
                price: 3000,
                tipo: 'Eletronico',
                image: 'https://s2-techtudo.glbimg.com/ppNkzAMfS2rLyYwWa8ORyNm2ovU=/0x0:695x463/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/p/b/AunsLbRASXhHCFPTMeaQ/2015-08-04-led.jpg',
                description: '50 polegadas marca sansung'
            },
            {
                name: 'Microondas',
                price: 450,
                tipo: 'Eletrodomestico',
                image: 'https://cdn.dooca.store/611/products/mcs10tsb-1-1_640x640+fill_ffffff.jpg?v=1601491433&webp=0',
                description: 'marca esmaltec, 220v'
            },
            {
                name: 'Geladeira',
                price: 5000,
                tipo: 'Eletronico',
                image: 'https://compracerta.vtexassets.com/arquivos/ids/193612/Brastemp_Geladeira_BRM44HB_Imagem_3_4.jpg?v=636549178870830000',
                description: '110v, branco'
            }
          ], 
          {});
        },

        down: async (queryInterface) => {
            await queryInterface.bulkDelete('produtos', null, {});
        },
}