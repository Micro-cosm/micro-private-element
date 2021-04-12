
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFAULT
import { environment				} from '../environments/environment';

import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule				} from '@angular/platform-browser';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { CUSTOM_ELEMENTS_SCHEMA		} from '@angular/core';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule					} from '@angular/core';
import { Title						} from '@angular/platform-browser';

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MIFE COMMON
import { AppComponent				} from './app.component';
import { AppRoutingModule			} from './app-routing.module';
import { HomeComponent				} from './home/home.component';

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// MATERIAL SUPPORT
import { MaterialModule				} from './sub-modules/material.module';
import 'hammerjs';

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// AUTH
import { AngularFireModule			} from '@angular/fire';
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';
import { LoggedOutComponent			} from './logged-out/logged-out.component';
import { LoginComponent				} from './login/login.component';
import { GraphQLModule				} from './sub-modules/graphql.module';

export function firebaseAppNameFactory() { return `weja-us`; }

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CONTENT
import { HttpClientModule			} from '@angular/common/http';
import { ContentComponent			} from './content/content.component';
import { ContentFullComponent		} from './content-full/content-full.component';
import { NavPipe					} from './_pipes/nav.pipe';
import { SafePipe					} from './_pipes/safe.pipe';
import { CmsService					} from './_services/cms.service';


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
		FlexLayoutModule,
		GraphQLModule,
		HttpClientModule,
		MaterialModule,
		AngularFireModule.initializeApp( environment.firebase.creds ),
		NgxAuthFirebaseUIModule.forRoot( environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs ),
	],
	providers: [
		{ provide: 'googleTagManagerId', useValue: environment.google.analytics.trackingCode },
		CmsService,
		Title
	],
	schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule {}
