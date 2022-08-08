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
            photoUrl: 'https://www.travelandleisure.com/thmb/DinYJgpUu-KCCKOUvV2RoSd-ab4=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/madrid-spain-MADRIDTG0621-b2347a98186a4281a0874992b213ade0.jpg',
            name: 'Madrid',
            links: ['https://www.timeout.com/madrid/things-to-do/best-things-to-do-in-madrid', 'https://www.travelandleisure.com/travel-guide/madrid]'],
            category: categories[0],
        },
        {
            photoUrl: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_233/vue-sur-les-toits-de-la-tour-saint-jacques-%7C-740x380-%7C-%C2%A9-elodie-gutbrod-cr%C3%A9atividie/21581411-1-fre-FR/Vue-sur-les-toits-de-la-tour-Saint-Jacques-%7C-740x380-%7C-%C2%A9-Elodie-Gutbrod-Cr%C3%A9atividie.jpg',
            name: 'Paris',
            links: ['https://en.parisinfo.com/', 'https://www.tripadvisor.com/Tourism-g187147-Paris_Ile_de_France-Vacations.html'],
            category: categories[0],
        },
        {
            photoUrl: 'https://imageio.forbes.com/specials-images/imageserve/1154990774/Colourful-houses-on-Stortorget-square-in-Old-town--Stockholm--Sweden-/960x0.jpg?format=jpg&width=960',
            name: 'Stockholm',
            links: ['https://sweden.se/', 'https://visitsweden.com/'],
            category: categories[0],
        },
        {
            photoUrl: 'https://media.timeout.com/images/105240237/1372/772/image.jpg',
            name: 'Japan',
            links: ['https://www.timeout.com/japan'],
            category: categories[0],
        },
        {
            photoUrl: 'https://media.getty.edu/iiif/image/e08a9be7-39f5-4fff-bf5f-c2a81ab394fc/0,222,1999,1124/1200,/0/default.jpg',
            name: 'Getty Museum',
            links: ['https://www.getty.edu/museum/'],
            category: categories[1],
        },
        {
            photoUrl: 'https://static.wixstatic.com/media/8afd0f_d333b47d7ef2406699f3a77961530c95~mv2.jpeg/v1/fill/w_1536,h_1030,al_t,q_85,enc_auto/8afd0f_d333b47d7ef2406699f3a77961530c95~mv2.jpeg',
            name: 'Paddle Board',
            links: ['https://paddlemethod.com/', 'https://www.prosupshop.com/', 'https://www.paddlehouserb.com/'],
            category: categories[1],
        },
        {
            photoUrl: 'https://www.vangoghla.com/wp-content/uploads/1.png',
            name: 'Van Gogh Light Show',
            links: ['https://www.vangoghla.com/'],
            category: categories[1],
        },
        {
            photoUrl: 'https://pictures.topspeed.com/IMG/crop_webp/202112/2022-zeromotorcycles-sr-s-6_800x0.webp',
            name: 'Get Electric Motocycle',
            links: ['https://www.zeromotorcycles.com/'],
            category: categories[2],
        },
        {
            photoUrl: 'https://media.istockphoto.com/photos/dance-sports-couple-red-dress-black-suit-tail-picture-id1067048488?k=20&m=1067048488&s=612x612&w=0&h=1vomo4OFc51f8NpXQkrY_qjNmR-6SolkG4jWzcdiN6w=',
            name: 'Learn Latin Dance',
            links: ['https://www.lizlira.com/', 'https://www.beverlyhillsdancestudio.com/'],
            category: categories[3],
        },
        {
            photoUrl: 'https://learnenglishteens.britishcouncil.org/sites/teens/files/styles/article/public/istock_000021332103small_1_0.jpg?itok=P15SBc5Q',
            name: 'Learn Spanish',
            links: ['https://www.laspanishschool.com/', 'https://www.lalcenter.net/'],
            category: categories[3],
        },
    ]);

    console.log(items)

    process.exit();
})();

    



