

import { environment		} from '../environments/environment';
import { Component			} from '@angular/core';
import { AngularFireAuth	} from '@angular/fire/auth';
import { Title				} from '@angular/platform-browser';
import { Router				} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	env:	any;
	title:	string;
	
	constructor(
		public	auth:			AngularFireAuth,
		public	router:			Router,
		public	titleService:	Title
	) {
		this.env	= environment;
		this.title	= this.env.this.title;
		this.setTitle( this.title );
		console.log( '>>> AppComponent -> Environment:', this.env );
	}
	
	public setTitle( newTitle: string ) { this.titleService.setTitle( newTitle )}
}
