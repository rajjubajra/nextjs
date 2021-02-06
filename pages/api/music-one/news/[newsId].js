import newsdata from '../../../../components/MusicOne/data/newsdata';

export default async (req, res) => {

  const newsId = req.query.newsId;
  const result = newsdata.filter((data) => data.id === newsId);

  if (result.length > 0) {
    console("result single", result[0]);
    res.status(200).json(result[0])
  } else {
    res.status(404).json({ message: `tour data of id ${newsId}  not found` })
  }


}