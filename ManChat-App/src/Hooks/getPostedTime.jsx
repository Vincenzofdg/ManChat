export default function getPostedTime(date) {
  const currentDate = new Date();
  const [month, day, year] = date.split('/');
  const postDate = new Date(year, month - 1, day);
  const hoursDiff = Math.floor((currentDate - postDate) / (1000 * 60 * 60));

  return hoursDiff;
}
