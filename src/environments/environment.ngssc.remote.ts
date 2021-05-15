

// V7
import { fb		} from "./fb.stage";
// import { local	} from "./local";
import { remote	} from "./remote";

// When configuring new mifen,
// 			   ---- change this... ----   ...and this...
//  		 /							/
//  		V						   V
const PRIVATE_MIFE	= process.env.PRIVATE_MIFE	|| remote.REALM_BASE + remote.ROUTE_BASE + '#/';
// 			   			  ------ ...and lastly, this.
//						/
//					   V
const THIS_MIFE	= PRIVATE_MIFE;

export const environment = {
	production: Boolean(remote.ALIAS === 'prod'),
	debug:		Boolean(remote.DEBUG === 'true'),
	logs:		Boolean(remote.LOGS === 'true'),
	local:		false,
	remote:		true,
	title:		remote.TITLE,
	target: { alias: remote.ALIAS },
	assets: { bucket: remote.ASSETS_BUCKET },
	mife: {
		this:		THIS_MIFE,
		auth:		remote.AUTH_MIFE,
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
		service:	remote.CMS_SERVICE,
		sheet:		remote.CMS_SHEET,
		alias:		remote.CMS_ALIAS
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


