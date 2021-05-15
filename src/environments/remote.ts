

const localhost 	= 'http://localhost:'
const realm			= process.env.TARGET_REALM	|| 'too.fb.';
const domain		= process.env.TARGET_DOMAIN	|| 'weja.us';
const realmBase		= process.env.REALM_BASE	|| 'https://' + realm + domain;
const alias			= process.env.TARGET_ALIAS	|| 'dev';
const cmsService	= process.env.CMS_SERVICE	|| 'https://foo.fb.weja.us/cms';
const title			= process.env.TITLE			|| 'StèJá Föö(remote)';

export const remote = {
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
	AUTH_MIFE: 		process.env.AUTH_MIFE		|| realmBase + '/auth-element/#/',
	CHAT_MIFE: 		process.env.CHAT_MIFE		|| realmBase + '/chat/#/',
	FORM_MIFE: 		process.env.FORM_MIFE		|| realmBase + '/form-element/#/',
	PRIVATE_MIFE:	process.env.PRIVATE_MIFE	|| realmBase + '/private-element/#/',
	PUBLIC_MIFE: 	process.env.PUBLIC_MIFE		|| realmBase + '/public/#/',
	AUTH_SERVICE:	process.env.AUTH_SERVICE	|| realmBase + '/server-auth/',
	CMS_SERVICE:	cmsService,
	TITLE:			title
}
