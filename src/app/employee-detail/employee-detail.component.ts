import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap } from '@angular/router';
// import { ConsoleReporter } from 'jasmine';
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee-detail',
  template: `
    <p>
      employee-detail works! {{departmentId }}
    </p>
    <button (click) = "goOverview()">Overview</button>
    <button (click) = "goContact()">Contact</button>
    <router-outlet></router-outlet>
    <br>
    <nav>
    <a (click)="goPrevious()">Previous </a>
    <a (click)="goNext()"> Next </a>
    </nav>
    <br>
    <button (click) = "goBack()"> Back </button>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router : Router) { }
  public departmentId;
  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params : ParamMap)=> {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
    
  }

  goPrevious(){
    let previousId = this.departmentId-1;
    // this.router.navigate(['/departments', previousId]); //absolute route
    this.router.navigate(['../',previousId],{relativeTo:this.route}); //RELATIVE route
    console.log('workPrev', previousId);
    //does -1 everytime.
  }

  goNext(){
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/departments', nextId]); //absolute route
    this.router.navigate(['../',nextId],{relativeTo:this.route}); //RELATIVE route
    console.log('workNext', nextId);
    //does +1 one time. then -1.
    //returns the same attirb because both functions are called, next then prev.
  }

  goBack(){
    // let currentId = parseInt(this.route.snapshot.paramMap.get(id));
    // let currentId = this.route. NO NEED FOR EXTRACTION
    let currentId = this.departmentId;
    //this.router.navigate(['/departments',{id : this.departmentId}]);  //absolute route
    console.log(this.router.navigate(['../', {id : this.departmentId}],{relativeTo: this.route}));
    this.router.navigate(['../', {id : this.departmentId}],{relativeTo: this.route}); //relative route
    // console.log(this.router.navigate(['../', {id : this.departmentId}],{relativeTo: this.route}));
  }

  goOverview(){
    this.router.navigate(['overview',{testid : 'test'}],{relativeTo : this.route}); //relative route
  }

  goContact(){
    this.router.navigate(['contact',{testid : 'test'}],{relativeTo : this.route}); //relative route
  }

}
