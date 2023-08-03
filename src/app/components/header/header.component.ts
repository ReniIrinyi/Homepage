import { Component, HostListener, OnInit } from '@angular/core';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isSmallScreen = false;
  faBars = faBars;
  faX = faX;
  currentIcon = faBars;

  ngOnInit(): void {
    this.checkDevicewidth();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkDevicewidth();
  }
  checkDevicewidth() {
    this.isSmallScreen = false;
    if (window.innerWidth < 1000) {
      this.isSmallScreen = true;
    }
    this.moveLinksToRights();
  }
  changeIcon() {
    const links = document.querySelector('.links');
    if (this.currentIcon === faBars) {
      this.currentIcon = faX;
      links?.classList.remove('transformX');
    } else {
      this.currentIcon = faBars;
      links?.classList.add('transformX');
    }
  }

  moveLinksToRights() {
    const links = document.querySelector('.links');
    if (this.isSmallScreen) {
      links?.classList.add('transformX');
    } else if (!this.isSmallScreen) {
      links?.classList.remove('transformX');
    }
  }
}
