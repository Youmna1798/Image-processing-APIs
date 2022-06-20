import imagesRoutes from './api/images';
import express from 'express'

const routes = express.Router();

routes.use('/images/', imagesRoutes);

export default routes;