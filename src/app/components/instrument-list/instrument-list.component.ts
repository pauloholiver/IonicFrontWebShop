import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Add } from 'src/app/actions/cart.action';
import { DataService } from 'src/app/data.service';
import { CartModel } from 'src/app/models/cart.model';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.scss'],
})
export class InstrumentListComponent implements OnInit {
  public instruments: any[] = null;

  constructor(
    private store: Store<CartModel>,
    private toastCtrl: ToastController,
    private service: DataService,
  ) {

  }

  ngOnInit() {
    this.service
      .getInstruments()
      .subscribe((data) => {
        this.instruments = data;
      });
  }

  async add(instrument) {
    this.store.dispatch(Add(instrument));
    const toast = await this.toastCtrl.create({
      message: `${instrument.descricao} adicionado ao carrinho`,
      duration: 2000,
      animated: true,
      color: 'success'
    });
    toast.present();
  }

}