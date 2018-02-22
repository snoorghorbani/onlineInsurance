import { Component, OnInit } from '@angular/core';
declare var particlesJS;
@Component({
        selector: 'dashboard-logos',
        templateUrl: './logos.component.html',
        styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {

        logos: { src: string, name: string }[] = []
        constructor() {
                this.logos = fillLogos()
        }

        ngOnInit() {
        }
}

var fillLogos = () => {
        return [
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/1.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/10.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/11.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/13.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/14.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/15.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/18.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/19.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/2.png',
                        name: ''
                },
                {
                        src: 'https://bimito.com/images/insurence_seller_small_icon/3.png',
                        name: ''
                },
        ];

}