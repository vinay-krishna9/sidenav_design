import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isopen: any = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    this.isopen = !this.isopen
  }

}
