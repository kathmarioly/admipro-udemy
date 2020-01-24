import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  menu: any = [
    {
      titulo: 'Principal',
      icono : 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'Progres Bar', url: '/progress'},
        { titulo: 'Graficas', url: '/graficas1'},
      ]
    }
  ];


}
