import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ComuniService } from 'src/app/services/comuni.service';

@Component({
  selector: 'app-comuni',
  templateUrl: './comuni.component.html',
  styleUrls: ['./comuni.component.scss'],
})
export class ComuniComponent implements OnInit {
  displayedColumns: string[] = [
    'nome',
    'provincia',
    'detailComune',
    'deleteComune',
  ];
  pageNumber: number = 0;
  comuni!: any;
  items!: any;
  totalElements!: number;
  dataSource!: any;

  constructor(
    private comuniSrv: ComuniService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadComuni();
  }

  loadComuni() {
    this.comuniSrv.getAll(this.pageNumber).subscribe((ris) => {
      this.items = ris;
      this.comuni = this.items.content;
      this.dataSource = new MatTableDataSource(this.comuni);
      this.totalElements = this.items.totalElements;
    });
  }

  onPageChanged(pageEvent: PageEvent) {
    this.pageNumber = pageEvent.pageIndex;
    this.loadComuni();
  }

  detailComune(id: number) {
    this.comuniSrv.getByID(id);
  }
  deleteComune(id: number, i: number) {
    this.comuniSrv.delete(id).subscribe(() => {
      this.comuni.splice(i, 1);
      this.dataSource = new MatTableDataSource(this.comuni);
      this.snackBar.open('Comune Eliminato', 'Chiudi', {
        duration: 2000,
      });
    });
  }
}
