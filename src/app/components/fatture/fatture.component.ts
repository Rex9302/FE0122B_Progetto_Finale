import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/services/fatture.service';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss'],
})
export class FattureComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'data',
    'numero',
    'anno',
    'importo',
    'stato',
    'ragioneSociale',
    'dettaglioFattura',
    'eliminaFattura',
  ];
  items!: any;
  pageNumber: number = 0;
  fatture!: any;
  totalElements!: number;
  dataSource!: any;
  constructor(private fattureSrv: FattureService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadFatture();
  }

  loadFatture() {
    this.fattureSrv.getAll(this.pageNumber).subscribe((ris) => {
      this.items = ris;
      this.fatture = this.items.content;
      this.dataSource = new MatTableDataSource(this.fatture);
      this.totalElements = this.items.totalElements;
    });
  }
  onPageChanged(pageEvent: PageEvent) {
    this.pageNumber = pageEvent.pageIndex;
    this.loadFatture();
  }
  detailFattura(id: number) {
    this.fattureSrv.getByID(id);
  }
  deleteFattura(id: number, i: number) {
    this.fattureSrv.delete(id).subscribe(() => {
      this.fatture.splice(i, 1);
      this.dataSource = new MatTableDataSource(this.fatture);
      this.snackBar.open('Fattura Eliminata', 'Chiudi', {
        duration:2000
      })
    });
  }
}
