import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeworkService {
private localStorageKey = "listHomework";

getHomework():string[]{
  return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
}

addTask(task:string){
const tasks = this.getHomework();
tasks.push(task);
localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
}

deleteTask(index:number){
  const tasks = this.getHomework();
  tasks.splice(index, 1);
  localStorage.setItem(this.localStorageKey, JSON.stringify(tasks));
}
}
