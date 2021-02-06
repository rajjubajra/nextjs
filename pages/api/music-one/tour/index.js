// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import tourdata from '../../../../components/MusicOne/data/tourdata';

export default async (req, res) => (
  res.status(200).json(tourdata)
)