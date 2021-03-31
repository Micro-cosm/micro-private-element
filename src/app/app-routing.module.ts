

import { NgModule				} from '@angular/core';
import { RouterModule			} from '@angular/router';
import { Routes					} from '@angular/router';
import { HomeComponent			} from './home/home.component';
import { ContentComponent		} from './content/content.component';
import { ContentFullComponent	} from './content-full/content-full.component';
import { LoggedOutComponent		} from './logged-out/logged-out.component';
import { LoginComponent			} from './login/login.component';
import { AuthGuard				} from './_guards/auth.guard';

// import { LoggedInGuard	} from 'ngx-auth-firebaseui';	// UNCOMMENT THIS WHEN USING AND PROVIDE TO 'canActivate' WHEN USING ngx-auth-firebaseui local behavior

export const routes: Routes = [
	{ path: '',	redirectTo: '/content-full/home', pathMatch: 'full'	},
	{ path: 'content/',				component: ContentComponent		},
	{ path: 'content/:page',		component: ContentComponent		},
	{ path: 'content-full',			component: ContentFullComponent	},
	{ path: 'content-full/:page',	component: ContentFullComponent	},
	{ path: 'home',					component: HomeComponent		},
	{ path: 'logged-out',			component: LoggedOutComponent,	canActivate: [AuthGuard]},
	{ path: 'login',				component: LoginComponent,		canActivate: [AuthGuard]},
	{ path: '**', redirectTo: '/content/home' }
];

@NgModule({
	imports: [RouterModule.forRoot( routes, { enableTracing: true, useHash: true })],
	exports: [RouterModule]
})

export class AppRoutingModule { }
