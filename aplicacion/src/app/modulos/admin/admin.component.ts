import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.pug',
  styleUrls: ['./admin.component.styl'],
  providers: [MediaMatcher]
})
export class AdminComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  navLinks = [];
  usuario: Usuario;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private us: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 900px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.navLinks = [
      { path: '/admin', label: 'Inicio', icon : 'home'},
      { path: '/admin/noticias', label: 'Noticias', icon : 'import_contacts'},
      { path: '/admin/imagenes', label: 'Imagenes', icon : 'photo'},
      { path: '/admin/miembros', label: 'Miembros', icon : 'group'},
      { path: '/admin/eventos', label: 'Eventos', icon : 'date_range'}
      ];
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  salir(){
    this.us.salir()
  }

  ngOnInit() {
    this.us.obtenerUsuario().subscribe(user => this.usuario = user)
  }

}
