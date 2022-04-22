import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Clienti } from 'src/app/models/clienti';
import { Comuni } from 'src/app/models/comuni';
import { Provincie } from 'src/app/models/provincie';
import { ClientiService } from 'src/app/services/clienti.service';
import { ComuniService } from 'src/app/services/comuni.service';
import { ProvinceService } from 'src/app/services/provincie.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.scss'],
})
export class NewClienteComponent implements OnInit {
  id!: number;
  form!: FormGroup;
  cliente!: Clienti;
  province!: Provincie[];
  comuni!: any[];
  filterComuni: any = [];
  tipiclienti!: any[];
  selected: any;
  constructor(
    private fb: FormBuilder,
    private clientSrv: ClientiService,
    private comuniSrv: ComuniService,
    private provinceSrv: ProvinceService,
    private location: Location,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      ragioneSociale: new FormControl('', Validators.required),
      partitaIva: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tipoCliente: new FormControl('', Validators.required),
      pec: new FormControl(''),
      telefono: new FormControl(''),
      nomeContatto: new FormControl(''),
      cognomeContatto: new FormControl(''),
      telefonoContatto: new FormControl(''),
      emailContatto: new FormControl('', Validators.required),
      indirizzoSedeOperativa: this.fb.group({
        via: new FormControl(''),
        civico: new FormControl(''),
        cap: new FormControl(''),
        localita: new FormControl(''),
        comune: this.fb.group({
          id: new FormControl('', Validators.required),
          provincia: this.fb.group({
            id: new FormControl(''),
          }),
        }),
      }),
    });
    this.provinceSrv
      .getAll(0)
      .subscribe((ris) => (this.province = ris.content));
    // this.comuniSrv.getAll(0).subscribe(ris=> this.comuni = ris.content)
    this.clientSrv.typeClienti().subscribe((ris) => {
      this.tipiclienti = ris;
    });
  }

  onSubmit(DatiForm: {
    value: { indirizzoSedeOperativa: { comune: Comuni } };
  }) {
    this.comuni.forEach((item) => {
      if (item.id == DatiForm.value.indirizzoSedeOperativa.comune.id) {
        DatiForm.value.indirizzoSedeOperativa.comune = item;
      }
    });
    this.clientSrv.saveClient(DatiForm.value).subscribe((ris) => {
      console.log(ris);
    });
    this.snackBar.open('Cliente Aggiunto', 'Chiudi', {
      duration: 2000,
    });
    this.form.reset();
  }

  back(): void {
    this.location.back();
  }
  checkUserSelection() {
    this.filterComuni.splice(0, this.filterComuni.length);
    this.comuniSrv.getAll(0).subscribe((ris) => {
      this.comuni = ris.content;
      this.comuni.map((item) => {
        if (item.provincia.id == this.selected) {
          this.filterComuni.push(item);
        }
      });
    });
  }
}
