import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  val='';

  values = 'Inheritance';


  

  num='';





  


  onKey(event: any) { 
    this.values += event.target.value + ' | ';
  }

  


 
    

 

  constructor() { 

    
  }

  ngOnInit(): void {
  }

  

}
