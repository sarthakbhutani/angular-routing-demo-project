import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  public departments = [
    {id : 1 , name : 'Angular'},
    {id : 2 , name : 'Js'},
    {id :3 , name : '7'}
  ]

  onSelect(department){
    console.log(department.id);
    this.router.navigate(['/departments', department.id]);
  }
}
