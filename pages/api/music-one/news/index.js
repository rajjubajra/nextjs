import newsdata from '../../../../components/MusicOne/data/newsdata';

export default async (req, res) => (
  res.status(200).json(newsdata)
)