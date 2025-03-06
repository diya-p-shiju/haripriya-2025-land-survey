import { Router } from 'express';
import { 
  getSurvey,
  createSurvey,
  getSurveys,
  updateSurvey,
  deleteSurvey,
  addRemark,
  assignSurvey,
  toggleApproval
} from '../controllers/survey_controller';

const surveyRouter = Router();

// Core CRUD routes
surveyRouter.get('/', getSurveys);
surveyRouter.post('/', createSurvey);
surveyRouter.get('/:id', getSurvey);
surveyRouter.put('/:id', updateSurvey);
surveyRouter.delete('/:id', deleteSurvey);

// New routes for specific operations
surveyRouter.post('/:id/remarks', addRemark);
surveyRouter.post('/:id/assign', assignSurvey);
surveyRouter.post('/:id/toggle-approval', toggleApproval);

export default surveyRouter;