import { Component, OnInit } from '@angular/core';

import { Task } from './shared/models/Task';
import { TaskService } from './shared/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    tasksList: any[] = [];
    newTask: string = "";
    editing: boolean = false;
    editId: string = "";
    editData: string = ""

    constructor(private taskService: TaskService) {}

    ngOnInit() {
        this.taskService.getTasks().subscribe(data => {
            this.tasksList = data;
        });
    }

    //! Handles the task update
    startEditView(task: Task) {
        // this.editData = '';
        this.editing = true;
        this.editId = task._id;
        this.editData = task.name;
    }
    stopEditView(task: Task) {
        this.editing = false;
        this.editId = '';
        this.updateName(task);
    }
    updateName(task: Task) {
        task.name = this.editData;
        this.taskService.updateTask(task).subscribe(data => {
            console.log(data);
        })
    }
    //! -------------------

    addTask() {  //! Creates task
        if (this.newTask.length != 0)
            this.taskService.createTask(this.newTask).subscribe(data => {
                console.log(data);
            });
    }

    updateStatus(task: Task) {  //! Handles the checkbox
        task.status = !task.status;
        this.taskService.updateTask(task).subscribe(data => {
            console.log(data);
        });
    }

    deleteTask(id: string) {  //! Deletes task
        this.taskService.deleteTask(id).subscribe(data => {
            console.log(data);
        });
    }
}
