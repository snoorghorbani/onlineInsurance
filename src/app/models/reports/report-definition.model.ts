export class ReportDefinitionModel {
    route: string;
    title: string;
    description?: string;
    icon: string;
    constructor({
        route,
        title,
        description,
        icon
    }) {
        this.route = route;
        this.title = title;
        this.description = description;
        this.icon = icon;
    }
}