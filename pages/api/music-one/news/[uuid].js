import { newsdata } from '../../../../components/MusicOne/news-data';

export default async (req, res) => {

  const newsId = req.query.tourId;
  const result = newsdata.filter((data) => data.id === newsId);

  if (result.length > 0) {
    res.status(200).json(result[0])
  } else {
    res.status(404).json({ message: `tour data of id ${newsId}  not found` })
  }


}