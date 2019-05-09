import { Component, ViewChild, HostListener } from '@angular/core';

import { MatSidenav } from "@angular/material";

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.sidenav.opened) {
      this.sidenav.close();
    }
  }
}
