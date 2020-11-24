/** Import dependencies */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import * as path from 'path';
import { Login, Status, TestLogin, LogOut, Step, RegInfo, UserInfo, PhotoInfo, ParticipantType, GetTeam, GetTeamByInfo, GetSurvey, GetFundResults, GetEventData, GetParticipants, UpdateStep, GetUpsell, UpdateConsData, UpdateSurvey, MiscCall } from './core/api';
import * as dotenv from 'dotenv';
dotenv.config();
class App {
     public app: express.Application;
     public staticDir: string;
     public staticEntryFile: string;

     constructor() {
          this.staticDir = path.join(__dirname, process.env.FRONEND_DIR || '');
          this.staticEntryFile = path.join(__dirname, process.env.FRONEND_DIR || '');
          this.app = express();
          this.config();
          this.routes();
     }

     private config(): void {

          this
               .app
               .use(bodyParser.json());
          this
               .app
               .use(bodyParser.urlencoded({ extended: false }));
          this
               .app
               .use('/', express.static(this.staticDir));

          this
               .app
               .use((req: Request, res: Response, next: NextFunction) => {
                    res.header('Access-Control-Allow-Origin', '*');
                    res.header('Access-Control-Allow-Methods', 'GET,POST');
                    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
                    next();
               });
     }

     private routes(): void {
          const router = express.Router();

          /** Test login */
          router.post('/api/loginTest', async (req: Request, res: Response) => {
               const { redirect } = req.body;
               const data: any = await TestLogin(redirect);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }

          });

          /** Login */
          router.post('/api/login', async (req: Request, res: Response) => {
               const { username, password } = req.body;
               const data: any = await Login(username, password);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Logout */
          router.post('/api/logout', async (req: Request, res: Response) => {
               const data: any = await LogOut();
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Status */
          router.post('/api/status', async (req: Request, res: Response) => {
               const { eventId, token } = req.body;
               const data: any = await Status(eventId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Get Step */
          router.post('/api/step', async (req: Request, res: Response) => {
               const { eventId, token } = req.body;
               const data: any = await Step(eventId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Reg info */
          router.post('/api/regInfo', async (req: Request, res: Response) => {
               const { eventId, token } = req.body;
               const data: any = await RegInfo(eventId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** User info */
          router.post('/api/userInfo', async (req: Request, res: Response) => {
               const { consId, token } = req.body;
               const data: any = await UserInfo(consId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Photo */
          router.post('/api/photoInfo', async (req: Request, res: Response) => {
               const { consId, eventId } = req.body;
               const data: any = await PhotoInfo(consId, eventId);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Participant type */
          router.post('/api/participantType', async (req: Request, res: Response) => {
               const { eventId, participationId } = req.body;
               const data: any = await ParticipantType(eventId, participationId);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Get team */
          router.post('/api/getTeam', async (req: Request, res: Response) => {
               const { eventId, token } = req.body;
               const data: any = await GetTeam(eventId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          router.post('/api/getTeamByInfo', async (req: Request, res: Response) => {
               const { eventId, teamId, token } = req.body;
               const data: any = await GetTeamByInfo(eventId, teamId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });


          /** Get Survey */
          router.post('/api/getSurvey', async (req: Request, res: Response) => {
               const { eventId, surveyId, token } = req.body;
               const data: any = await GetSurvey(eventId, surveyId, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Get Fundraising Info */
          router.post('/api/getFundResults', async (req: Request, res: Response) => {
               const { consId, eventId } = req.body;
               const data: any = await GetFundResults(consId, eventId);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Get Event Data */
          router.post('/api/getEventData', async (req: Request, res: Response) => {
               const { eventId, edpName } = req.body;
               const data: any = await GetEventData(eventId, edpName);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Get participants */
          router.post('/api/getParticipants', async (req: Request, res: Response) => {
               const { eventId, token, teamName, status } = req.body;
               const data: any = await GetParticipants(eventId, token, teamName, status);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Update Step */
          router.post('/api/updateStep', async (req: Request, res: Response) => {
               const { eventId, token, status, step } = req.body;
               const data: any = await UpdateStep(eventId, token, status, step);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Update Step */
          router.post('/api/getUpsell', async (req: Request, res: Response) => {
               const { eventId, upsellId } = req.body;
               const data: any = await GetUpsell(eventId, upsellId);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Update Cons Data */
          router.post('/api/updateCons', async (req: Request, res: Response) => {
               const { consId, token, first, last, address1, address2, city, state, zip } = req.body;
               const data: any = await UpdateConsData(consId, token, first, last, address1, address2, city, state, zip);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** Update Survey */
          router.post('/api/updateSurvey', async (req: Request, res: Response) => {
               const { surveyId, eventId, emname, emnum, year, jersey, physical , cancer, veg, route, shuttle1, shuttle2, packet, token } = req.body;
               const data: any = await UpdateSurvey(surveyId, eventId, emname, emnum, year, jersey, physical, cancer, veg, route, shuttle1, shuttle2, packet, token);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });

          /** A Generic Call  */
          router.post('/api/misc', async (req: Request, res: Response) => {
               const { url } = req.body;
               const data: any = await MiscCall(url);
               try { return res.status(200).json(data); } catch (error) { res.status(500).json({ data: 'error' }); return; }
          });


          router.all('*', (req: Request, res: Response) => res.status(200).sendFile(this.staticEntryFile));

          this
               .app
               .use('/', router);
     }

}

export default new App().app;