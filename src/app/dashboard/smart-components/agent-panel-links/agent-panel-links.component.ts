import { Component, OnInit } from '@angular/core';
declare var particlesJS;
@Component({
        selector: 'agent-panel-links',
        templateUrl: './agent-panel-links.component.html',
        styleUrls: ['./agent-panel-links.component.scss']
})
export class AgentPanelLinksComponent implements OnInit {
        links: any[];
        constructor() {
                this.links = [
                        {
                                title: "گزارش مالی",
                                route: "/financial/payments",
                                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                                icon: "credit_card"

                        },
                        {
                                route: '/agent/cartable',
                                title: 'کارتابل',
                                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                                icon: 'description'
                        },
                        {
                                route: '/session/link/daily',
                                title: 'تنظیمات',
                                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                                icon: 'view_module'
                        }
                ]
        }

        ngOnInit() {
        }
}