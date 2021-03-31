
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFAULT
import { environment				} from '../environments/environment';												// EXTERNAL MODULES
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule				} from '@angular/platform-browser';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { CUSTOM_ELEMENTS_SCHEMA		} from '@angular/core';																// ELEMENT SUPPORT
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule					} from '@angular/core';
import { Title						} from '@angular/platform-browser';
import { AppComponent				} from './app.component';															// COMPONENTS
import { AppRoutingModule			} from './app-routing.module';
import { HomeComponent				} from './home/home.component';
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// AVAILABLE(by function)
import { MaterialModule				} from './sub-modules/material.module';												// MISC
import { GraphQLModule				} from './sub-modules/graphql.module';												// AUTH
import { HttpClientModule			} from '@angular/common/http';														// CONTENT
import { ContentComponent			} from './content/content.component';												// CONTENT
import { ContentFullComponent		} from './content-full/content-full.component';										// CONTENT
import { NavPipe					} from './_pipes/nav.pipe';															// CONTENT
import { SafePipe					} from './_pipes/safe.pipe';														// CONTENT
import { CmsService					} from './_services/cms.service';													// CONTENT
import { AngularFireModule			} from '@angular/fire';																// AUTH
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';														// AUTH
import { LoggedOutComponent			} from './logged-out/logged-out.component';											// AUTH
import { LoginComponent				} from './login/login.component';													// AUTH

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us`; }															// AUTH

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent,
		ContentFullComponent,
		HomeComponent,
		NavPipe,
		SafePipe,
		LoginComponent,
		LoggedOutComponent,
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CdkTableModule,
		CdkTreeModule,
		MaterialModule,
		FlexLayoutModule,
		GraphQLModule,
		HttpClientModule,
		NgxAuthFirebaseUIModule.forRoot(environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs),
		AngularFireModule.initializeApp(environment.firebase.creds),
	],
	providers: [
		{ provide: 'googleTagManagerId',	useValue: environment.google.analytics.trackingCode },
		CmsService,
		Title
	],
	schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule {}
