import { Component } from '@angular/core';
import {DataService} from './data.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getapi';
  api:any=[]
  userdata:any=[]
  constructor(private dataservice:DataService){

    this.dataservice.getuserdata().subscribe(data =>{
      console.log('userdata', data);
      this.api=data;
      
    })
  }
  gpdf(){
    var doc = new jsPDF();
    autoTable(doc,{html:'#table',theme:'grid'})
    doc.save('usertable');

  }
}
