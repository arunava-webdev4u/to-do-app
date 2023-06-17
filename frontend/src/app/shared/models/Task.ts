// export interface Task {
//     name: string;
//     status: boolean;
//     _id: string;
// }

export class Task {
    name: string;
    status: boolean;
    _id: string;
    constructor(name: string, status: boolean, _id: string) {
        this.name = name;
        this.status = status;
        this._id = _id;
    }
}
