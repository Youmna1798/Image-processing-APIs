import path from 'path';
import resizeImages from './../../routes/api/resize';


const fullImagesPath = path.resolve('./') + `/images/fullImages/fjord.jpg`;
const resizeImagesPath =path.resolve('./') + `/images/resizeImages/fjord_200_300.jpg`;

describe('The imageResizer function', (): void => {
    it('check image', async () => {
        const height = 300;
        const width = 200;
        expect(async () => {
          await resizeImages(fullImagesPath, width, height, resizeImagesPath);
        }).not.toThrow();
    });

    it('check if the height and width parameters is missing', async () => {
        const height = '';
        const width = '';
        expect(async () => {
          await resizeImages(
            fullImagesPath,
            parseInt(width),
            parseInt(height),
            resizeImagesPath
          );
        }).toBeDefined();
      });
});

