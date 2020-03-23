import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface Students {
  name: string;
  position: number;
  gender: string;
  type: string;
  enrollment: string;
}

const ELEMENT_DATA: Students[] = [
  {position: 1, name: 'Ella', gender: 'F', type: 'High', enrollment: '6/11/2015 21:55'},
  {position: 2, name: 'Gary', gender: 'M', type: 'Kinder', enrollment: '8/1/2014 21:55'},
  {position: 3, name: 'Richard', gender: 'M' , type: 'University', enrollment: '11/11/2007 21:55'},
  {position: 4, name: 'Elizabeth', gender: 'F', type: 'Elementary', enrollment: '9/13/2010 21:55'},
  {position: 5, name: 'Matthew', gender: 'M', type: 'Kinder', enrollment: '4/18/2005 21:55'},
  {position: 6, name: 'Timothy', gender: 'M', type: 'Kinder', enrollment: '2/10/2004 21:55'},
  {position: 7, name: 'Camila', gender: 'F', type: 'Kinder', enrollment: '3/12/2014 21:55'},
  {position: 8, name: 'Frank', gender: 'M', type: 'Elementary', enrollment: '6/12/2015 21:55'},
  {position: 9, name: 'Scoot', gender: 'M', type: 'High', enrollment: '10/18/2019 21:55'},
  {position: 10, name: 'Eric', gender: 'M', type: 'Elementary', enrollment: '6/19/2016 21:55'},
  {position: 11, name: 'Aria', gender: 'F', type: 'Kinder', enrollment: '12/19/2018 21:55'},
  {position: 12, name: 'Naomi', gender: 'F', type: 'Elementary', enrollment: '6/18/2015 21:55'},
  {position: 13, name: 'Raymond', gender: 'M', type: 'Kinder', enrollment: '5/26/2014 21:55'},
  {position: 14, name: 'Joshua', gender: 'M', type: 'High', enrollment: '7/20/2010 21:55'},
  {position: 15, name: 'Madison', gender: 'F', type: 'Elementary', enrollment: '2/18/2009 21:55'},
  {position: 16, name: 'Jerry', gender: 'M', type: 'University', enrollment: '1/15/2015 21:55'},
  {position: 17, name: 'Grace', gender: 'F', type: 'Elementary', enrollment: '9/14/2016 21:55'},
  {position: 18, name: 'Lucy', gender: 'F', type: 'High', enrollment: '10/13/2017 21:55'},
  {position: 19, name: 'Peter', gender: 'F', type: 'Kinder', enrollment: '11/1/2017 21:55'},
  {position: 20, name: 'Maya', gender: 'F', type: 'University', enrollment: '12/5/2008 21:55'},
  {position: 21, name: 'Henry', gender: 'F', type: 'Elementary', enrollment: '9/8/2017 21:55'},
  {position: 21, name: 'Henry', gender: 'F', type: 'Elementary', enrollment: '8/9/2015 21:55'},
  {position: 22, name: 'Penelope', gender: 'F', type: 'Elementary', enrollment: '7/11/2018 21:55'},
  {position: 23, name: 'Douglas', gender: 'F', type: 'HKinder', enrollment: '5/28/2012 21:55'},
  {position: 24, name: 'Layla', gender: 'F', type: 'Elementary', enrollment: '3/24/2019 21:55'},
  {position: 25, name: 'Riley', gender: 'F', type: 'University', enrollment: '2/21/2018 21:55'},
  {position: 26, name: 'Stella', gender: 'F', type: 'University',enrollment: '4/23/2017 21:55'},
  {position: 27, name: 'Carl', gender: 'F', type: 'University', enrollment: '2/1/2014 21:55'},
  {position: 28, name: 'Arthur', gender: 'F', type: 'University', enrollment: '5/17/2018 21:55'},
  {position: 29, name: 'Violet', gender: 'F', type: 'High', enrollment: '6/15/2017 21:55'},
  {position: 30, name: 'Keith', gender: 'F', type: 'University', enrollment: '10/11/2017 21:55'},
  {position: 31, name: 'Ellie', gender: 'F', type: 'High', enrollment: '11/1/2007 21:55'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'gender', 'type', 'enrollmentDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true})  paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort : MatSort;


  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
