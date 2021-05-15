

const localhost 	= 'http://localhost:'
const realm			= process.env.TARGET_REALM	|| 'too.fb.';
const domain		= process.env.TARGET_DOMAIN	|| 'weja.us';
const realmBase		= process.env.REALM_BASE	|| localhost + '4421/#/';
const alias			= process.env.TARGET_ALIAS	|| 'dev';
const cmsService	= process.env.CMS_SERVICE	|| 'https://foo.fb.weja.us/cms';	// localhost + '4411/'
const title			= process.env.TITLE			|| 'StèJá Föö(local)';

export const local = {
	ALIAS:			alias,
	ASSETS_BUCKET:	process.env.ASSETS_BUCKET	|| 'https://storage.googleapis.com/' + domain,
	CMS_ALIAS:		process.env.CMS_ALIAS		|| alias + '-EN_US',
	CMS_SHEET:		process.env.CMS_SHEET 		|| 'https://docs.google.com/spreadsheets/d/14T-GM6Cx-OpT_s4MCytc1VL8fQax8eOC8IHdne-1Wf4/edit#gid=1055269632',
	DEBUG:			process.env.DEBUG			|| 'true',
	DOMAIN:			domain,
	LOCALHOST:		localhost,
	LOGS:			process.env.LOGS			|| 'true',
	REALM:			realm,
	REALM_BASE:		realmBase,
	ROUTE_BASE:		process.env.TARGET_REALM	|| '/',
	AUTH_MIFE: 		localhost + '4422/#/',
	CHAT_MIFE: 		localhost + '4415/#/',
	FORM_MIFE: 		localhost + '4423/#/',
	PRIVATE_MIFE:	localhost + '4421/#/',
	PUBLIC_MIFE: 	localhost + '4402/#/',
	AUTH_SERVICE:	localhost + '5002/',
	CMS_SERVICE:	cmsService,
	TITLE:			title
}
