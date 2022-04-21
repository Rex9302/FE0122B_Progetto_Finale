import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ProvinceService } from 'src/app/services/provincie.service';

@Component({
  selector: 'app-provincie',
  templateUrl: './provincie.component.html',
  styleUrls: ['./provincie.component.scss']
})
export class ProvincieComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'sigla', 'detailProvince', 'deleteProvince'];
  pageNumber:number = 0
  province!:any
  items!:any;
  totalElements!:number;
  dataSource!:any;

  constructor(private provinceSrv:ProvinceService) { }

  ngOnInit(): void {
    this.loadProvince()
  }
  loadProvince(){
    this.provinceSrv.getAll(this.pageNumber).subscribe(ris =>{
      this.items = ris
      this.province  = this.items.content
      this.dataSource = new MatTableDataSource(this.province)
      this.totalElements = this.items.totalElements
    })
  }
  onPageChanged(pageEvent:PageEvent){
    this.pageNumber = pageEvent.pageIndex
    this.loadProvince()
  }
  detailProvince(id:number){
    this.provinceSrv.getByID(id)
  }
  deleteProvince(id:number, i:number){
    this.provinceSrv.delete(id).subscribe(()=>{
      this.province.splice(i, 1);
      this.dataSource = new MatTableDataSource(this.province)
    })
  }
}
