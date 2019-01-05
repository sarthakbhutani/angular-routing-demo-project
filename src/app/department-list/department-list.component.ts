import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private router : Router, private route : ActivatedRoute) { }
  public selectedId;
  ngOnInit() {
    this.route.paramMap.subscribe((params : ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
      console.log('selected after going back', this.selectedId);
    });
  }
  //why the component is not being REUSED?

  public departments = [
    {id : 1 , name : 'Angular'},
    {id : 2 , name : 'Js'},
    {id :3 , name : '7'}
  ]

  onSelect(department){
    console.log(department.id);
    this.router.navigate(['/departments', department.id]); //absolute route
    this.router.navigate([department.id],{relativeTo: this.route}); //relative path
  }

  isSelected(department){
    // console.log(department.id == this.selectedId? "true" : "false");
    return department.id == this.selectedId;
    
    
  }
}
