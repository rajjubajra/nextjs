import about from '../../../../components/MusicOne/data/about';

export default async (req, res) => (
  res.status(200).json(about)
)