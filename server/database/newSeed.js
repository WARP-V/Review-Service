const Schema = require('./Review.js');


Schema.Review.deleteMany({}, () => {
  console.log('========>  delete old reviews => success!');
});

const shoeIDs = ['310805-408', '310806-408', '310806-002', '305381-113', '852542-306', '554724-062', '554724-113', '554724-071', '554724-610', '554724-050', '554724-109', 'AR4491-001', 'AR4491-700', 'AV3922-601', 'AV3922-348', 'AV3922-001', 'AT3146-001', 'AV1200-600', 'AV1200-007', 'AV1200-008', 'AV1200-401', 'AV1200-100', 'AV1200-200', 'AV1200-001', '315371-006', '315371-300', '310805-160', '136027-148', 'AV7008-700', 'AV7007-001', 'AR5599-006', 'AT4040-601', '820273-300', '820273-400', '820273-600', '820276-006', '554725-065', '554725-065', '640734-065', '640734-071', 'AR6351-113', 'AR6352-113', 'AT8012-601', 'AT8011-407', 'BV8017-445', '384665-104', '305368-113', '440888-148', '884129-035', '414575-035', '151186-301', '850000-301', 'AA2494-801', 'AA2494-401', 'AA2494-701', '555088-801', '555088-401', 'AQ7924-001', 'AQ7924-305', 'AQ7924-107', 'AQ7924-601', 'AQ7924-100', 'AQ9119-300', 'AQ9119-001', '555112-001', '640735-065', '640735-071', 'AT4612-500', 'AT4613-500', 'BV8018-445', 'BV8018-445', 'AR4430-016', 'AR4430-105', 'AR4430-003', 'AR4430-023', 'AR4430-200', 'AR4430-023', 'AR1000-001', 'AR1000-006', 'AR1000-003', 'AR1000-023', '580603-603', '580603-300', '580603-401', '580603-001', 'AO9744-600', '384666-104', '384667-104', 'AJ7984-002', 'AJ7984-600', 'AJ7984-001', 'AO2649-001', 'AO2649-301', 'AO2649-023', 'AO2649-007', 'AO2649-002', 'AJ7990-003', 'AJ7990-001', 'AJ7990-301', 'AJ7990-006', 'AA2517-600', 'AA2517-005', 'AA2517-002', 'AA2517-062', 'AA2517-023', 'AA2517-004', '684915-106', 'AH8109-003', 'AH8109-600', 'AH8109-100', 'AH8109-002', 'AO1561-003', 'AO1561-117', 'AO1561-010', 'AO1561-011', 'AO1561-107', 'AO1560-010', 'AO1560-117', 'AA1253-105', 'AA1253-400', 'AQ9084-063', 'AQ9084-006', 'AQ9084-100', 'AQ9084-300', 'AQ9084-010'];

const names = [
  'Elva Slover',
  'Ghislaine Philpott',
  'Brittaney Ivie',
  'Keren Gloria',
  'Carletta Elrod',
  'Will Tarwater',
  'Bernadette Golston',
  'Shawnta Bartol',
  'Malcolm Losey',
  'Leisha Jalbert',
  'Nicolas Kamin',
  'Lenny Agostini',
  'Pearly Yarborough',
  'Magnolia Kreider',
  'Alberto Larkins',
  'Iesha Ramsay',
  'Marcus Varnadoe',
  'Alyce Wilmot',
  'Milo Heuer',
  'Edythe Purdom',
];

const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const createDummyReviews = () => {
  const dummyReviews = [];
  shoeIDs.forEach((shoeID) => {
    const numberOfReviews = Math.floor(Math.random() * 4);
    for (let i = 0; i < numberOfReviews; i += 1) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const review = {
        shoeID,
        author: randomName,
        title: 'Lorem Ipsum',
        stars: Math.floor(Math.random() * 5),
        body,
        createdAt: randomDate(new Date(2030, 0, 1), new Date(2045, 0, 1)),
      };
      dummyReviews.push(review);
    }
  });
  return dummyReviews;
};

const dummyReviews = createDummyReviews();

const insertDummyReviews = () => {
  Schema.Review.create(dummyReviews)
    .then(() => {
      console.log('========>  insert dummy reviews => success!');
      process.exit();
    })
    .catch((error) => {
      console.log('========>  insert dummy reviews => failed!', error);
      process.exit();
    });
};

insertDummyReviews();


module.exports.insertDummyReviews = insertDummyReviews;
module.exports.createDummyReviews = createDummyReviews;
