

import {	environment			} from '../../environments/environment';
import {	ActivatedRoute		} from '@angular/router';
import {	AngularFireAuth		} from '@angular/fire/auth';
import {	Component			} from '@angular/core';
import {	OnInit				} from '@angular/core';
import {	Router				} from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.sass']
})

export class HomeComponent implements OnInit {
	env:	any;
	title:	string;
	loggedIn	= false;
	
	constructor(
		private route:		ActivatedRoute,
		private fireAuth:	AngularFireAuth,
		public	router:		Router
	) {
		this.env	= environment;
		this.title	= this.env.this.title;
	}
	
	ngOnInit(): void	{
		this.fireAuth.authState.subscribe( auth => {
			console.log( '>> HomeComponent -> authState change:', auth );
			this.loggedIn = ! auth === null;
		}
	);}
	
	logout():			void { this.fireAuth.signOut().then( r => console.log( '>> HomeComponent -> logged out:', r ));}
	onSignOut():		void { console.log( 'Sign-out successful!'	);}
	onAccountDeleted():	void { console.log( 'Account Delete successful!' );}
}
