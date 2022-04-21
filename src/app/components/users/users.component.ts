import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'username', 'email', 'role'];
  items!: any;
  pageNumber: number = 0;
  users!: any;
  totalElements!:number;
  dataSource!:any;
  constructor(private getAll: GetAllService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.getAll.getAll(this.pageNumber).subscribe((ris) => {
      this.items = ris;
      this.users = this.items.content;
      this.dataSource = new MatTableDataSource(this.users);
      this.totalElements = this.items.totalElements
    });
  }

  onPageChanged(pageEvent: PageEvent) {
    this.pageNumber = pageEvent.pageIndex;
    this.loadUsers();
  }
}
