import express from 'express';
import router from './router/user.route';

const app = express();
app.use(express.json());

app.use('/v1/api', router);

app.listen(3000, () => {
    console.log('App is listening on 3000');
});
