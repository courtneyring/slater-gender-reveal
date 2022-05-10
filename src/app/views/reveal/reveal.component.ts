import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-reveal',
    templateUrl: './reveal.component.html',
    styleUrls: ['./reveal.component.scss']
})
export class RevealComponent implements AfterViewInit {


    videoEnded;
    hideOverlay;
    vid;

    constructor() { }

    ngAfterViewInit(): void {
        this.vid = document.getElementById('video');
        this.vid.onended = () => this.videoEnded = true;
    }

    play() {
        this.hideOverlay = true;
        this.vid.play();
    }

}
