import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('Testing the images endpoint', () => {
    it('Using the endpoint without providing the name parameter returns 400', async () => {
      await request.get('/images').expect(400);
    });
  
    it('Using the endpoint with a non-existent image returns 404', async () => {
      await request.get('/images?imageName=lll').expect(404);
    });
  
    it('Using the endpoint with a valid image name returns 200', async () => {
      await request.get('/images?imageName=encenadaport').expect(200);
    });
  });