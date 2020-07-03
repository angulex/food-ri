import { Component, OnInit, HostListener } from '@angular/core';

import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.scss']
})
export class ScrollTopComponent implements OnInit {
  constructor(private sharedService: SharedService) { }

  windowPosition = 0;;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.windowPosition = window.pageYOffset;
  }

  ngOnInit(): void {
  }

  scrollToTop() {
    this.sharedService.scrollToTop();
  }
}
