import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Provincie } from 'src/app/models/provincie';
import { ProvinceService } from 'src/app/services/provincie.service';

@Component({
  selector: 'app-mod-provincia',
  templateUrl: './mod-provincia.component.html',
  styleUrls: ['./mod-provincia.component.scss']
})
export class ModProvinciaComponent implements OnInit {

  id!:number;
  provincia!:Provincie;
  form!: FormGroup;
  constructor(private route:ActivatedRoute, private fb: FormBuilder, private location:Location, private provinceSrv:ProvinceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.id = +params['id']
    }),
    this.form = this.fb.group({
      nome: new FormControl('', Validators.required),
      sigla: new FormControl('', Validators.required),
    });
    this.loadProvince()
  }
  onSubmit(DatiForm:any){
    this.provincia = {nome:'', sigla:''}
    this.provincia.nome = DatiForm.value.nome
    this.provincia.sigla = DatiForm.value.sigla
    this.provinceSrv.saveProvincia(this.id, this.provincia).subscribe()
    alert('Provincia modificata')
  }
  loadProvince(){
    this.provinceSrv.getByID(this.id).subscribe( ris =>{
      this.provincia = ris
      this.form.controls['nome'].patchValue(this.provincia.nome)
      this.form.controls['sigla'].patchValue(this.provincia.sigla)
    })
  }
  back(): void {
    this.location.back()
  }
}
