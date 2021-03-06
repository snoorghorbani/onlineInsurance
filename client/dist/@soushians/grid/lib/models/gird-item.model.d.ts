import { GridsterItem } from "angular-gridster2";
export interface IGridItemModel<T> extends GridsterItem {
    _id: string;
    oid: string;
    name: string;
    valid: boolean;
    owner: boolean;
    access: "public" | "private";
    type: string;
    config: T;
}
