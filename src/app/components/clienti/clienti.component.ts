import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ClientiService } from 'src/app/services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss'],
})
export class ClientiComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'ragioneSociale',
    'email',
    'piva',
    'fattureCliente',
    'modificaCliente',
    'deleteCliente',
  ];
  items!: any;
  pageNumber: number = 0;
  clienti!: any;
  totalElements!: number;
  dataSource!: any;
  constructor(
    private clientSrv: ClientiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.clientSrv.getAll(this.pageNumber).subscribe((ris) => {
      this.items = ris;
      this.clienti = this.items.content;
      this.dataSource = new MatTableDataSource(this.clienti);
      this.totalElements = this.items.totalElements;
    });
  }
  onPageChanged(pageEvent: PageEvent) {
    this.pageNumber = pageEvent.pageIndex;
    this.loadClients();
  }
  deleteCliente(id: number, i: number) {
    this.clientSrv.delete(id).subscribe();
    this.clienti.splice(i, 1);
    this.dataSource = new MatTableDataSource(this.clienti);
    this.snackBar.open('Cliente Eliminato', 'Chiudi', {
      duration: 2000,
    });
  }
}
