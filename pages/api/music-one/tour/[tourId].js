import { tourdata } from '../../../../components/MusicOne/tour-data';

export default async (req, res) => {

  const tourId = req.query.tourId;
  const result = tourdata.filter((data) => data.id === tourId);

  if (result.length > 0) {
    res.status(200).json(result[0])
  } else {
    res.status(404).json({ message: `tour data of id ${tourId}  not found` })
  }


}