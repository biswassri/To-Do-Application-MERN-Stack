import apiRouter from './restapiRoutes';
export default(app) =>{
  app.use('/', apiRouter);
};