import {Injectable} from "@angular/core";

import "rxjs/add/observable/of";
import {Observable} from "rxjs/Observable";
import {User} from "../interfaces/user";
import {IUsersService} from "./users.interface";

@Injectable()
export class UsersFakeService implements IUsersService {

    private users: User[] = [
        {id: 1, firstName: "john", password: "12345", lastName: "doe", email: "john.doe@gmail.com", status: "online"},
        {id: 2, firstName: "jane", password: "12345", lastName: "doe", email: "jane.doe@gmail.com", status: "online"},
        {
            id: 3,
            firstName: "jean",
            password: "12345",
            lastName: "dupond",
            email: "jean.dupond@gmail.com",
            status: "busy"
        },
        {
            id: 4,
            firstName: "jean",
            password: "12345",
            lastName: "dupont",
            email: "jean.dupont@gmail.com",
            status: "offline"
        },
        {
            id: 5,
            firstName: "jeanne",
            password: "12345",
            lastName: "dupong",
            email: "jeanne.dupond@gmail.com",
            status: "offline"
        },
        {id: 6, firstName: "john", password: "12345", lastName: "doe", email: "joe.doe@gmail.com", status: "online"}
    ];

    constructor() {
    }


    getUsers(): Observable<User[]> {
        return Observable.of(this.users);
    }

    create(user: User): Observable<User> {
        return null;
    }

    exists(email: string): Observable<boolean> {
        return null;
    }

    get(email: string): Observable<User> {
        return null;
    }
}