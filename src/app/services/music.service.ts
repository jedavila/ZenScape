import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} 
from 'angularfire2/firestore'; 
import { Observable } from 'rxjs';
import {music} from '../models/music'

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  musicCollection: AngularFirestoreCollection<music>;
  music: Observable<music[]>

  constructor(public afs : AngularFirestore) { 
    this.music = this.afs.collection('relaxSongs').valueChanges();

  }
  getMusic(){
    return this.music;
  }
}


