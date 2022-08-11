require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function () {
    
    await Category.deleteMany({});
    const categories = await Category.create([
        { name: 'Travel', sortOrder: 10 },
        { name: 'Experience', sortOrder: 20 },
        { name: 'Things', sortOrder: 30 },
        { name: 'Skills', sortOrder: 40 },
    ]);

    await Item.deleteMany({});
    const items = await Item.create([
        {
            name: 'Madrid',
            links: ['https://www.timeout.com/madrid/things-to-do/best-things-to-do-in-madrid', 'https://www.travelandleisure.com/travel-guide/madrid]'],
            category: categories[0],
        },
        {
            name: 'Paris',
            links: ['https://en.parisinfo.com/', 'https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html'],
            category: categories[0],
        },
        {
            name: 'Stockholm',
            links: ['https://sweden.se/', 'https://visitsweden.com/'],
            category: categories[0],
        },
        {
            name: 'Japan',
            links: ['https://www.timeout.com/japan'],
            category: categories[0],
        },
        {
            name: 'Getty Museum',
            links: ['https://www.getty.edu/museum/'],
            category: categories[1],
        },
        {
            name: 'Paddle Board',
            links: ['https://paddlemethod.com/', 'https://www.prosupshop.com/', 'https://www.paddlehouserb.com/'],
            category: categories[1],
        },
        {
            name: 'Van Gogh Light Show',
            links: ['https://www.vangoghla.com/'],
            category: categories[1],
        },
        {
            name: 'Get Electric Motocycle',
            links: ['https://www.zeromotorcycles.com/'],
            category: categories[2],
        },
        {
            name: 'Learn Latin Dance',
            links: ['https://www.lizlira.com/', 'https://www.beverlyhillsdancestudio.com/'],
            category: categories[3],
        },
        {
            name: 'Learn Spanish',
            links: ['https://www.laspanishschool.com/', 'https://www.lalcenter.net/'],
            category: categories[3],
        },
    ]);

    console.log(items)

    process.exit();
})();

    



