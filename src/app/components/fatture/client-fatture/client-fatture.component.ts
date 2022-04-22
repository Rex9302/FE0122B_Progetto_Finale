import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { FattureService } from 'src/app/services/fatture.service';

@Component({
  selector: 'app-client-fatture',
  templateUrl: './client-fatture.component.html',
  styleUrls: ['./client-fatture.component.scss'],
})
export class ClientFattureComponent implements OnInit {
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
  clientId!: number;
  totalElements!: number;
  dataSource!: any;
  constructor(
    private fattureSrv: FattureService,
    private route: ActivatedRoute,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.clientId = +params['id'];
    }),
      this.loadFatture();
  }
  loadFatture() {
    this.fattureSrv
      .GetByCliente(this.clientId, this.pageNumber)
      .subscribe((ris) => {
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
      this.snackBar.open(
        'Fattura Cancellata',
        'Chiudi',
        {
          duration: 2000,
        }
      );
    });
  }
  back(): void {
    this.location.back();
  }
}
