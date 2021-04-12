

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
		if ( this.env.debug ) console.log( '>> AuthGuard -> canActivate -> router state:', state );

		return this.authProcess.afa.user.pipe( map( user => {
			if (this.env.debug) console.log( '>> AuthGuard -> canActivate -> user:',	user					);
			if (this.env.debug) console.log( '>> AuthGuard -> canActivate -> config:',	this.config				);
			if (this.env.debug) console.log( '>> AuthGuard -> canActivate -> local?',	this.env.this.local		);
			if (this.env.debug) console.log( '>> AuthGuard -> canActivate -> remote?',	this.env.this.remote	);
			
			if ( user ) {
				if (
					this.env.remote											&&
					this.config.guardProtectedRoutesUntilEmailIsVerified	&&
					! user.emailVerified									&&
					! user.isAnonymous
				) {
					console.log( 'Oops...  You are logged in to a remote system with an account that has an unverified email address.' );
					console.log( '>>> AuthGuard -> Redirecting to remote fallback URL:', this.env.authGuardRemoteFallbackURL );
					window.location.href = this.env.authGuardRemoteFallbackURL;
				}
				return true
			} else {
				console.log( '>>> AuthGuard -> canActivate?   NoSoFoYoo' );
				console.log( '>>> AuthGuard -> ACCESS DENIED -> Redirecting to remote fallback URL:', this.env.authGuardRemoteFallbackURL );
				window.location.href = this.env.authGuardRemoteFallbackURL;
			}
		}))
	}
}
