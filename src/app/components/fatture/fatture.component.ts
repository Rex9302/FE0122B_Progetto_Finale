import { Component, OnInit } from '@angular/core';
import { FattureService } from 'src/app/services/fatture.service';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  formFatturato!: FormGroup;
  formAnno!: FormGroup;
  formStato!: FormGroup;
  totalElements!: number;
  dataSource!: any;
  filterData!: any;
  ricerca:number = 0
  selected:any;
  anno!:number;
  fattmin!:number;
  fattmax!:number;
  stato!:number;
  constructor(
    private fattureSrv: FattureService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formFatturato = this.fb.group({
      fattmin: new FormControl('', Validators.required),
      fattmax: new FormControl('', Validators.required),
    });
    this.formAnno = this.fb.group({
      anno: new FormControl('', Validators.required),
    });
    this.formStato = this.fb.group({
      status: new FormControl('')
    });
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
    this.pageNumber = pageEvent.pageIndex
    if(this.ricerca == 1){
      this.fattureSrv.srcFattureImporto(this.fattmin,this.fattmax,this.pageNumber).subscribe(ris=>{
        this.filterData = ris;
        this.fatture = this.filterData.content;
        this.dataSource = new MatTableDataSource(this.fatture);
        this.totalElements = this.filterData.totalElements;
      })
    }
    else if(this.ricerca == 2){
      this.fattureSrv.srcFattureAnno(this.anno,this.pageNumber).subscribe(ris=>{
        this.filterData = ris;
        this.fatture = this.filterData.content;
        this.dataSource = new MatTableDataSource(this.fatture);
        this.totalElements = this.filterData.totalElements;
      })
    }else if(this.ricerca == 3){
      this.fattureSrv.srcFattureStato(this.stato, this.pageNumber).subscribe(ris=>{
        this.filterData = ris;
        this.fatture = this.filterData.content;
        this.dataSource = new MatTableDataSource(this.fatture);
        this.totalElements = this.filterData.totalElements;
      })
    }
    else{
      this.loadFatture();
    }
  }

  detailFattura(id: number) {
    this.fattureSrv.getByID(id);
  }
  deleteFattura(id: number, i: number) {
    this.fattureSrv.delete(id).subscribe(() => {
      this.fatture.splice(i, 1);
      this.dataSource = new MatTableDataSource(this.fatture);
      this.snackBar.open('Fattura Eliminata', 'Chiudi', {
        duration: 2000,
      });
    });
  }
  onSubmitFattura(DatiForm: { value: any }) {
    this.fattmin = DatiForm.value.fattmin;
    this.fattmax = DatiForm.value.fattmax
    if(this.fattmin<this.fattmax){
      this.ricerca = 1
    this.fattureSrv.srcFattureImporto(this.fattmin,this.fattmax,this.pageNumber).subscribe(ris=>{
      this.filterData = ris;
      this.fatture = this.filterData.content;
      this.dataSource = new MatTableDataSource(this.fatture);
      this.totalElements = this.filterData.totalElements;
    })
  }else{
    this.snackBar.open('Il valore minimo deve essere più piccolo del valore massimo', 'Chiudi', {
      duration: 2000,
    });
  }
  }
  onSubmitAnno(DatiForm:{value:any}){
    this.ricerca = 2
    this.anno = DatiForm.value.anno
    this.fattureSrv.srcFattureAnno(this.anno,this.pageNumber).subscribe(ris=>{
      this.filterData = ris;
      this.fatture = this.filterData.content;
      this.dataSource = new MatTableDataSource(this.fatture);
      this.totalElements = this.filterData.totalElements;
    })
  }
  onSubmitStato(DatiForm:{value:any}){
    this.ricerca = 3
    this.stato = DatiForm.value.status
    this.fattureSrv.srcFattureStato(this.stato, this.pageNumber).subscribe(ris=>{
      this.filterData = ris;
      this.fatture = this.filterData.content;
      this.dataSource = new MatTableDataSource(this.fatture);
      this.totalElements = this.filterData.totalElements;
    })
  }
  resetta() {
    this.formFatturato.reset();
    this.formAnno.reset();
    this.formStato.reset();
    this.ricerca = 0;
    this.pageNumber = 0;
    this.loadFatture();
  }
}
