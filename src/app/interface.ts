export class UserData{
    id:number = 0
    name:string = ''
    password:string = ''
}

export interface IApplicationEvent {
    name: string;
    component: string;
    value: any;
}