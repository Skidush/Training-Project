import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  confirmAction(linkName: string) {
    const result = window.confirm(`You have clicked the link ${linkName}!`);
    if (result) {
      // Perform the action
    } else {
      // Cancel the action
    }
  }

}
