import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

  showPicker: boolean = false;

  insideWheel: boolean = false;
  wheelClicked: boolean = false;

  hoursWheel: any = [];
  selectedHour: number = 0;

  minutesWheel: any = [];
  selectedMinute: number = 0;

  isAM: boolean = true;
  selectingHours: boolean = true;
  constructor() { 
    this.hoursWheel = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    for(let i = 0; i < 60; i++) this.minutesWheel.push(i);
  }

  ngOnInit(): void {
  }

  mouseEnter(){
    this.insideWheel = true;
  }
  mouseExit() {
    if(this.wheelClicked) return;
    this.insideWheel = false;
  }
  mouseDown(){
    this.wheelClicked = true;
  }
  mouseUp() {
    this.wheelClicked = false;
    this.insideWheel = false;
    if(this.selectingHours) this.selectingHours = !this.selectingHours;
  }
  mouseOver(varName: string, idx: number){
    if (!this.insideWheel || !this.wheelClicked) return;
    this[varName] = idx;
  }
  selectByClick(varName: string, data: any){
    this[varName] = data;
    if (varName === 'selectedHour') this.selectingHours = false;
  }

}
