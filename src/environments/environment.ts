

// V7
import { fb		} from "./fb.stage";
import { local	} from "./local";
import { remote	} from "./remote";

// When configuring new mifen,
// 			   ---- change this... ----   ...and this...
//  		 /							/
//  		V						   V
const PRIVATE_MIFE	= process.env.PRIVATE_MIFE	|| local.REALM_BASE + local.ROUTE_BASE + '#/';
// 			   			  ------ ...and lastly, this.
//						/
//					   V
const THIS_MIFE	= PRIVATE_MIFE;

export const environment = {
	production: Boolean(local.ALIAS === 'prod'),
	debug:		Boolean(local.DEBUG === 'true'),
	logs:		Boolean(local.LOGS === 'true'),
	local:		true,
	remote:		false,
	title:		local.TITLE,
	target: { alias: local.ALIAS },
	assets: { bucket: local.ASSETS_BUCKET },
	mife: {
		this:		THIS_MIFE,
		auth:		THIS_MIFE,
		register:	remote.AUTH_MIFE + 'register',
		chat:		remote.CHAT_MIFE,
		form:		remote.FORM_MIFE,
		private:	THIS_MIFE,
		public:		remote.PUBLIC_MIFE
	},
	service: {
		auth:		remote.AUTH_SERVICE,
		cms:		remote.CMS_SERVICE
	},
	cms: {
		service:	local.CMS_SERVICE,
		sheet:		local.CMS_SHEET,
		alias:		local.CMS_ALIAS
	},
	authGuardRemoteFallbackURL:	THIS_MIFE + '/login',
	authGuardRemoteLoggedInURL:	THIS_MIFE + '/home',
	firebase: {
		creds: {
			appId:				fb.APP_ID,
			apiKey:				fb.API_KEY,
			authDomain:			fb.AUTH_DOMAIN,
			databaseURL:		fb.DATABASE_URL,
			measurementId:		fb.GA4_MID,
			messagingSenderId:	fb.MESSAGING_SENDER_ID,
			projectId:			fb.PROJECT_ID,
			storageBucket:		fb.STORAGE_BUCKET,
		},
		configs: {
			authGuardFallbackURL:		THIS_MIFE + '/login',
			authGuardLoggedInURL:		THIS_MIFE + '/home',
			enableEmailVerification:	true,
			enableFirestoreSync:		true,
			nameMaxLength:				50,
			nameMinLength:				2,
			passwordMaxLength:			60,
			passwordMinLength:			8,
			toastMessageOnAuthSuccess:	false,
			toastMessageOnAuthError:	true,
			guardProtectedRoutesUntilEmailIsVerified:	true,
		},
	},
	google: { analytics: { trackingCode: fb.GA4_MID }},
	timeZone: 'America/Denver'
};

import 'zone.js/dist/zone-error';
