var Schema = require('./index');

var dummyReviews = [
  {
    shoeID: "1",
    author: "Elva Slover",
    title: "I love this shoe",
    stars: 5,
    body: "Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli 'buraya metin gelecek, buraya metin gelecek' yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır.",
  },
  {
  shoeID: "2",
  author: "Ghislaine Philpott",
  title: "not bad",
  stars: 4,
  body: "Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. Lorem Ipsum có ưu điểm hơn so với đoạn văn bản chỉ gồm nội dung kiểu Nội dung, nội dung, nội dung là nó khiến văn bản giống thật hơn, bình thường hơn.",
  },
  {
  shoeID: "3",
  author: "Brittaney Ivie",
  title: "not good",
  stars: 2,
  body: "Det er en kendsgerning, at man bliver distraheret af læsbart indhold på en side, når man betragter dens layout. Meningen med at bruge Lorem Ipsum er, at teksten indeholder mere eller mindre almindelig tekstopbygning i modsætning til Tekst her – og mere tekst her, mens det samtidigt ligner almindelig tekst.",
  },
  {
  shoeID: "4",
  author: "Brittaney Ivie",
  title: "not good",
  stars: 2,
  body: "Det er en kendsgerning, at man bliver distraheret af læsbart indhold på en side, når man betragter dens layout. Meningen med at bruge Lorem Ipsum er, at teksten indeholder mere eller mindre almindelig tekstopbygning i modsætning til Tekst her – og mere tekst her, mens det samtidigt ligner almindelig tekst.",
  },
]

const insertDummyReviews = function() {
  Schema.Review.create(dummyReviews)
    .then(() => Schema.db.disconnect());
};

insertDummyReviews();


