// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { newsdata } from '../../../../components/MusicOne/news-data';

export default async (req, res) => (
  res.status(200).json(newsdata)
)