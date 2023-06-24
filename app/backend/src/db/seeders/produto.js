module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert(
          'produtos',[
            {
                name: 'Televisão',
                price: 3000,
                tipo: 'Eletronico',
                description: '250 polegadas marca sansung'
            },
            {
                name: 'Microondas',
                price: 450,
                tipo: 'Eletrodomestico',
                description: 'marca esmaltec, 220v'
            },
            {
                name: 'Geladeira',
                price: 5000,
                tipo: 'Eletronico',
                description: '110v, branco'
            }
          ], 
          {});
        },

        down: async (queryInterface) => {
            await queryInterface.bulkDelete('produtos', null, {});
        },
}