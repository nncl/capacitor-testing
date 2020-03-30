import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';
import { CameraPreview } from '@ionic-native/camera-preview/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],
  declarations: [CameraPage],
  providers: [
    CameraPreview
  ]
})
export class CameraPageModule {
}
