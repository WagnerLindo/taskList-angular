import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeworkService } from './services/homework.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
listHomework : string[] =[];
newTask : string ="";

private _homeworkService = inject(HomeworkService);

ngOnInit(): void {
  this.listHomework = this._homeworkService.getHomework()
}
addTask(){
  this._homeworkService.addTask(this.newTask);
  this.newTask = "";
  this.listHomework = this._homeworkService.getHomework();
}
deleteTask(index : number){
  this._homeworkService.deleteTask(index);
  this.listHomework = this._homeworkService.getHomework();
}
}
