import { Router, Request, Response } from 'express';
import path from 'path';
import resizeImages from './resize';

const imagesRoutes = Router();

// images names avaiable to use in the query params(imageName)
const images: string[] = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica',
];

imagesRoutes.get('/', async (req: Request, res: Response): Promise<unknown> => {
  const imageName = req.query.imageName as string;
  const height = req.query.height as string;
  const width = req.query.width as string;
  const positiveIntegers = /^[1-9]\d*$/;
  // full image
  const AllImagesPath =
    path.resolve('./') + `/images/AllImages/${imageName}.jpg`;
  //  resize images
  const resizeImagesPath =
    path.resolve('./') +
    `/images/resizeImages/${imageName}_${width}_${height}.jpg`;
  const image = images.includes(imageName);
  if (imageName === undefined) {
    return res
      .status(400)
      .send('Bad request, query parameter (name) is required.');
  }
  if (image === false) {
    return res.status(404).send('Resource not found, this image name  does not exist!');
  }
  if (height === undefined && width) {
    return res
      .status(400)
      .send('Bad request, height is missing.');
  }
  if (width === undefined && height) {
    return res
      .status(400)
      .send('Bad request, width is missing.');
  }
  if (width === '' || height === '') {
    return res
      .status(400)
      .send(
        'Bad request, neither query parameter width nor height can be equal null.'
      );
  }
  if (height && width) {
    if (!width.match(positiveIntegers) || !height.match(positiveIntegers)) {
      return res
        .status(400)
        .send(
          'Bad request, neither query parameter width nor height can be equal zero or equal negative value only positive integer values.'
        );
    }
    await resizeImages(
      AllImagesPath,
      parseInt(width),
      parseInt(height),
      resizeImagesPath
    );
    return res.sendFile(resizeImagesPath);
  }
  res.sendFile(AllImagesPath);
});

export default imagesRoutes;