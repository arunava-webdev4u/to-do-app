import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/Task';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    baseURL = 'http://localhost:3000';

    constructor(private http: HttpClient ) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseURL}/tasks`);
    }

    createTask(name: string): Observable<Task> {
        return this.http.post<Task>(`${this.baseURL}/tasks`, { name });
    }

    deleteTask(id: string): Observable<Object> {
        return this.http.delete<Object>(`${this.baseURL}/task/${id}`)
    }

    updateTask(task: Task): Observable<Object> {
        return this.http.put<Object>(`${this.baseURL}/task/edit/${task._id}`, task)
    }
}
