import { Router } from 'express';
import * as contoller from '../controller/controller.js';

const router = Router();

router.route('/tbl-data').get(contoller.getAnalytics);

export default router;
