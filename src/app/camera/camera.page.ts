import { Component, OnInit } from '@angular/core';

import { Plugins } from '@capacitor/core';

const {CameraPreview} = Plugins;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  cameraPreview: any = CameraPreview;
  picture: any;

  constructor() {
  }

  ngOnInit() {
  }

  async start() {
    try {
      this.picture = null;
      const res = await this.cameraPreview.start({position: 'front'});
      console.log(res); // fixme
    } catch (e) {
      console.error(`error`, e); // fixme
      this.cameraPreview.stop();
    }
  }

  async take() {
    try {
      const imageData = await this.cameraPreview.capture({width: 100, height: 100, quality: 85});
      console.log(`imageData`, imageData); // fixme
      this.picture = 'data:image/jpeg;base64,' + imageData.value;
      this.stop();
    } catch (e) {
      console.error(`error`, e); // fixme
    }
  }

  async stop() {
    try {
      const res = await this.cameraPreview.stop();
      console.log(res); // fixme
    } catch (e) {
      console.error(`error`, e); // fixme
    }
  }

}
