import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FireBaseComponent implements OnInit {
  items:any;
  constructor(private db: AngularFireDatabase) {
	
  }

  ngOnInit() {
   let $users:FirebaseListObservable<any> =  this.db.list('Users');

   $users.subscribe(
     val => this.items = val
   );
  
  }

}
