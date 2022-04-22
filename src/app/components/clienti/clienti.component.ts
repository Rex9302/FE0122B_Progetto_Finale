import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  form!: FormGroup;
  totalElements!: number;
  dataSource!: any;
  filterData!: any;
  constructor(
    private clientSrv: ClientiService,
    private snackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadClients();
    this.form = this.fb.group({
      ricerca: new FormControl('', Validators.required),
    });
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
  onSubmit(DatiForm: { value: any }) {
    this.clientSrv.srcClienti(DatiForm.value.ricerca).subscribe((ris) => {
      this.filterData = ris;
      this.clienti = this.filterData.content;
      this.dataSource = new MatTableDataSource(this.clienti);
      this.totalElements = this.filterData.totalElements;
    });
  }
  resetta() {
    this.loadClients();
    this.form.reset();
  }
}
