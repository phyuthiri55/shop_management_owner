import app from './app';
import {env} from './config/env';
import {createLogger} from './infrastructure/logger/create-logger';
import {errorHandler} from './interface/http/v1/middlewares/errorHandler';
import router from './interface/http/v1/routes/owner/owner.route';

const port = env.PORT;
const logger = createLogger();

app.use(errorHandler);

app.use('/api/v1', router);

app.listen(port,()=>{
    logger.info(`Server is running on port ${port}`);
});