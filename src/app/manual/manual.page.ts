import {Component, OnInit} from '@angular/core';
declare var iro: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'manual.page.html',
  styleUrls: ['manual.page.scss']
})
export class ManualPage implements OnInit {

  private colorPicker;
  private backgroundStyle = {'background-color': ''};

  private hotColors = [
    '#FFFFFF', '#FF0000', '#7CFC00', '#FFA500', '#FFFF00', '#FF00FF', '#00FFFF', '#00BFFF', '#0000FF', '#800000'
  ];

  private slideOpts = {
    effect: 'flip',
    pagination: false,
    slidesPerView: 5.5,
    spaceBetween: 5
  };

  constructor() { }

  changeColor(color) {
    this.colorPicker.color.hexString = color;
  }

  ngOnInit() {
    this.colorPicker = new iro.ColorPicker('#color-picker-container');
    this.colorPicker.on('color:change', (color) => {
      const rgb = color.rgb;
      this.backgroundStyle['background-color'] = `rgba(${rgb.r},${rgb.g},${rgb.b},0.1)`;
    });
  }



}
