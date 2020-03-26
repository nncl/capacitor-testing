import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-sign',
    templateUrl: './sign.page.html',
    styleUrls: ['./sign.page.scss'],
})
export class SignPage implements OnInit {
    geo: any;

    constructor(private geolocation: Geolocation) {
    }

    ngOnInit() {
        this.get();
    }

    get() {
        this.geolocation.getCurrentPosition().then((resp) => {
            const {latitude, longitude} = resp.coords;
            this.geo = {latitude, longitude};
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

}
