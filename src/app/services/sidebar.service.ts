import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  public menu: any[] = [];

  loadMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu')) || [];
  }

  // menu: any[] = [
  //   {
  //     title: 'Home',
  //     icon: 'mdi mdi-gauge',
  //     submenu: [
  //       { title: 'Main', url: '/' },
  //       { title: 'ProgressBar', url: 'progress' },
  //       { title: 'Graphics', url: 'graphic1' },
  //       { title: 'Promises', url: 'promises' },
  //       { title: 'Rxjs', url: 'rxjs' },
  //     ]
  //   },
  //   {
  //     title: 'Maintenance',
  //     icon: 'mdi mdi-folder-lock-open',
  //     submenu: [
  //       { title: 'Main', url: '/' },
  //       { title: 'Users', url: 'users' },
  //       { title: 'Playlists', url: 'playlists' },
  //       { title: 'Songs', url: 'songs' }
  //     ]
  //   }
  // ]
}
