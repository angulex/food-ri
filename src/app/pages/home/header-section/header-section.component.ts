import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  scrollToAnchor(anchor: string) {
    this.sharedService.scrollToAnchor(anchor);
  }

}
