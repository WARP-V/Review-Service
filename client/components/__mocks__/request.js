// const dummyReviews = {
//   '554724-071': [
//     {
//       '_id': '5bd9e54e4a5c4a62dbe76816',
//       'shoeID': '554724-071',
//       'author': 'Nicolas Kamin',
//       'title': 'Lorem Ipsum',
//       'stars': 2,
//       'createdAt': '2043-01-25T23:41:06.085Z',
//       '__v': 0
//     },
//     {
//       '_id': '5bd9e54e4a5c4a62dbe76817',
//       'shoeID': '554724-071',
//       'author': 'Bernadette Golston',
//       'title': 'Lorem Ipsum',
//       'stars': 0,
//       'createdAt': '2031-04-25T16:47:42.912Z',
//       '__v': 0
//     },
//     {
//       '_id': '5bd9e54e4a5c4a62dbe76818',
//       'shoeID': '554724-071',
//       'author': 'Leisha Jalbert',
//       'title': 'Lorem Ipsum',
//       'stars': 4,
//       'createdAt': '2043-03-28T18:09:26.860Z',
//       '__v': 0
//     },
//   ],
// };


// export default function request(url) {
//   return new Promise((resolve, reject) => {
//     const shoeID = parseInt(url.substr(1, '/reviews'.length), 10);
//     process.nextTick(
//       () => (
//         dummyReviews[shoeID]
//           ? (resolve(dummyReviews[shoeID]))
//           : (reject(new Error({
//             Error: `Shoe with ${shoeID} not found.`,
//           })))),
//     );
//   });
// }
