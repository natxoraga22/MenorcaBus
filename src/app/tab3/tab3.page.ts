import { Component, OnInit } from '@angular/core';
import { Route, FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  routes: Route[];

	constructor(private firebaseService: FirebaseService) {}

	ngOnInit() {
		this.firebaseService.getRoutes().subscribe(res => {
		this.routes = res;
		});
	}
}
