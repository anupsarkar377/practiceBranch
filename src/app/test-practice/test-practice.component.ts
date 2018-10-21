import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-practice',
  templateUrl: './test-practice.component.html',
  styleUrls: ['./test-practice.component.css']
})
export class TestPracticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  compute(number) {
    if (number < 0) {
      return 0;
    }
    return number + 1;

  }
}
