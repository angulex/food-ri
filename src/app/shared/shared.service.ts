import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable()
export class SharedService {

  constructor(private viewportScroller: ViewportScroller) { }

  scrollToAnchor(anchor: string) {
    this.viewportScroller.scrollToAnchor(anchor);
  }
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
