

import { environment					} from '../../environments/environment';
import { ActivatedRouteSnapshot			} from '@angular/router';
import { CanActivate					} from '@angular/router';
import { Inject							} from '@angular/core';
import { Injectable						} from '@angular/core';
import { Router							} from '@angular/router';
import { RouterStateSnapshot			} from '@angular/router';
import { AuthProcessService				} from 'ngx-auth-firebaseui';
import { NgxAuthFirebaseUIConfig		} from 'ngx-auth-firebaseui';
import { NgxAuthFirebaseUIConfigToken	} from 'ngx-auth-firebaseui';
import { map							} from 'rxjs/operators';
import { Observable						} from 'rxjs';

@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {
	env:	any;
	
	constructor(
		@Inject( NgxAuthFirebaseUIConfigToken )
		private config:			NgxAuthFirebaseUIConfig,
		private router:			Router,
		private authProcess:	AuthProcessService
	) {
		console.log( '>> AuthGuard -> constructing -> config:', config );
		this.env = environment;
	}
	
	canActivate(
		route:	ActivatedRouteSnapshot,
		state:	RouterStateSnapshot
	): Observable<boolean> {
		console.log( '>> AuthGuard -> canActivate -> router state:', state );

		return this.authProcess.afa.user.pipe( map( user => {
			console.log( '>> AuthGuard -> canActivate -> user:', user );
			console.log( '>> AuthGuard -> canActivate -> config:', this.config );
			if ( user ) {
				if ( this.config.guardProtectedRoutesUntilEmailIsVerified && ! user.emailVerified && ! user.isAnonymous ) {
					console.log( 'USER EMAIL ADDRESS IS UNVERIFIED.  DOING THE RIGHT THING...' );
					window.location.href = this.env.authGuardRemoteFallbackURL;
				}
			} else {
				window.location.href = this.env.authGuardRemoteFallbackURL;
			}

			return true;
		}));
	}
}
