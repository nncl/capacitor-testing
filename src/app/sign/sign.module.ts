import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignPageRoutingModule } from './sign-routing.module';

import { SignPage } from './sign.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SignPageRoutingModule
    ],
    declarations: [SignPage],
    providers: [
        Geolocation
    ]
})
export class SignPageModule {
}
