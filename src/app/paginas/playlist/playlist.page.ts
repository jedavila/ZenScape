import { Component, OnInit } from '@angular/core';
import {MusicService} from '../../services/music.service';
import {music} from '../../models/music'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  songs: music[];

  constructor(private MusicService: MusicService) { }

  ngOnInit() {
    this.MusicService.getMusic().subscribe(songs =>{
      this.songs = songs;

    });

  }

}
