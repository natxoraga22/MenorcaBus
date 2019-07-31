import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Route {
	id?: string;
	agency_id: string;
	route_color: string;
	route_desc: string;
	route_id: number;
	route_long_name: string;
	route_short_name: string;
	route_text_color: string;
	route_type: number;
	route_url: string;
}

@Injectable({
  	providedIn: 'root'
})
export class FirebaseService {
	private routes: Observable<Route[]>;

  	constructor(db: AngularFirestore) { 
		  this.routes = db.collection<Route>('routes').snapshotChanges().pipe(
			  map(actions => {
				return actions.map(a => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				  });
			  })
		  );
	  }

	getRoutes(){
		return this.routes;
	}
}
