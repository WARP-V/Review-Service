var Schema = require('./index');

var shoeIDs = [
  '310806-002',
  '310806-408',
  '554724-062',
  '554724-113',
  '554724-071',
  '554724-610',
  '554724-050',
  '554724-109',
  'AT3146-001',
  'AH7389-302c',
];

var names = [
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

var body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

var createDummyReviews = () => {
  var dummyReviews = [];
  shoeIDs.forEach((shoeID) => {
    var numberOfReviews = Math.floor(Math.random() * 4);
    for (var i = 0; i < numberOfReviews; i++) {
      var randomName = names[Math.floor(Math.random() * names.length)];
      var review = {
        shoeID,
        author: randomName,
        title: 'Lorem Ipsum',
        stars: Math.floor(Math.random() * 5),
        body
      };
      dummyReviews.push(review);
    }
  });
  return dummyReviews;
}

const insertDummyReviews = function() {
  Schema.Review.create(dummyReviews)
    .then(() => Schema.db.disconnect());
};

insertDummyReviews();