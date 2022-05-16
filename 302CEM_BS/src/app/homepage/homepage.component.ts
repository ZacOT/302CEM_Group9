import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  //constructor() { }
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle("Homepage");
  }

}


