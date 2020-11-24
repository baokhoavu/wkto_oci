import axios, {AxiosResponse, AxiosError} from 'axios';
const baseUrl : string = 'https://secure.onewalk.ca/site/';
const apiKey : string = 'cfowca';
const responseFormat : string = 'json';
const version : string = '1.0';

/** Test login */
export const TestLogin = async(redirect:string) => axios({
     url: 'CRConsAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'loginTest',
          sign_redirects: redirect
     }  
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => 'error');

/** Login */
export const Login = async(user : string, password : string) => await axios({
     url: 'CRConsAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'login',
          user_name: user,
          password: password,
          remember_me: true
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Status checker */
export const Status = async(eventId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getRegistration',
          fr_id: eventId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Log out */
export const LogOut = async() => await axios({
     url: 'CRConsAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'logout'
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Step */
export const Step = async(eventId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getFlowStep',
          fr_id: eventId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Registration info */
export const RegInfo = async(eventId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getRegistration',
          fr_id: eventId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** User info */
export const UserInfo = async(consId:string, token:string) => await axios({
     url: 'CRConsAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getUser',
          cons_id: consId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Photo */
export const PhotoInfo = async(consId:string, eventId:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getPersonalPhotos',
          cons_id: consId,
          fr_id: eventId
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Participant type */
export const ParticipantType = async(eventId:string, participationId:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getParticipationType',
          fr_id: eventId,
          participation_type_id: participationId
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Get Team */
export const GetTeam = async(eventId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getTeam',
          fr_id: eventId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

export const GetTeamByInfo = async(eventId:string, teamId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI', 
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getTeamsByInfo',
          fr_id: eventId,
          sso_auth_token: token,
          team_id: teamId
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Get Survey */
export const GetSurvey = async(eventId:string, surveyId:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getSurveyResponses',
          fr_id: eventId,
          survey_id: surveyId,
          sso_auth_token: token
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error); 


/** Get Fund Results */
export const GetFundResults = async(constId:string, eventId:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getFundraisingResults',
          fr_id: eventId,
          cons_id: constId,
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error); 

/** Get Event Data */
export const GetEventData = async( eventId:string, edpName:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getEventDataParameter',
          fr_id: eventId,
          edp_name: edpName
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error); 

/** Get Participants */
export const GetParticipants = async( eventId:string, token:string, teamName:string, filter:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getParticipants',
          fr_id: eventId,
          sso_auth_token: token,
          team_name: teamName,
          list_filter_column: 'reg.CHECKIN_STATUS',
          list_filter_text: filter,
          list_page_size:500
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Update Step */
export const UpdateStep = async( eventId:string, token:string, status:string, step:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'updateRegistration',
          fr_id: eventId,
          sso_auth_token: token,
          checkin_status: status,
          flow_step: step
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Get Upsell */
export const GetUpsell = async( eventId:string, upsellId:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'getUpsell',
          fr_id: eventId,
          upsell_id: upsellId
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Update Constituent Data */
export const UpdateConsData = async( consId:string, token:string, first:string, last:string, address1:string, address2:string, city:string, state:string, zip:string) => await axios({
     url: 'CRConsAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          method: 'update',
          cons_id: consId,
          sso_auth_token: token,
          'name.first': first,
          'name.last': last, 
          'primary_address.street1': address1,
          'primary_address.street2': address2,
          'primary_address.city': city,
          'primary_address.state': state,
          'primary_address.zip': zip
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);

/** Update Survey Responses */
export const UpdateSurvey = async( surveyId:string, eventId:string, emname:string, emnum:string, year:string, jersey:string, physical:string, cancer:string, veg:string, route:string, shuttle1:string, shuttle2:string, packet:string, token:string) => await axios({
     url: 'CRTeamraiserAPI',
     baseURL: baseUrl,
     method: 'post',
     params: {
          method: 'updateSurveyResponses',
          api_key: apiKey,
          v: version,
          response_format: responseFormat,
          fr_id: eventId,
          'survey_id': surveyId,
          sso_auth_token: token,
          'question_5353': emname,
          'question_5354': emnum,
          'question_5005': year,
          'question_5348': jersey,
          'question_5013': cancer,
          'question_5355': physical,
          'question_5014': veg,
          'question_5351': route,
          'question_5345': shuttle1,
          'question_5346': shuttle2,
          'question_5356': packet
     }
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);


/** Generic call just post the url */
export const MiscCall = async(data:string) => await axios({
     url: data,
     method: 'post'
}).then((data : AxiosResponse) => data.data).catch((error : AxiosError) => error);  