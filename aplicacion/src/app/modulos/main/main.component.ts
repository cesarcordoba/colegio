import { Component, OnInit, ElementRef, AfterViewInit, OnDestroy, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { transition, trigger, query, style, animate, group } from '@angular/animations';
import { Usuario } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { InicioSesionComponent } from './home/sesion/sesion.component';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.pug',
	styleUrls: ['./main.component.styl'],
	providers: [MediaMatcher, AuthService],
	encapsulation: ViewEncapsulation.None,
	animations: [
		trigger('routerTransition', [
			transition('* <=> *', [
				group([
					query(':enter',
						[
							style({
								position: 'fixed',
								width: '100%',
								opacity: 0,
								transform: 'translateY(-100%)'
							}),
							animate(
								'0.5s cubic-bezier(0, 1.8, 1, 1.8)',
								style({ opacity: 1, transform: 'translateY(0) rotate(0)' })
							),
						],
						{ optional: true }
					),
					query(':leave',
						animate('0.5s  cubic-bezier(0.445, 0.050, 0.550, 0.950)',
							style({
								position: 'fixed',
								width: '100%',
								opacity: 0, transform: 'translateY(100%) rotate(0)'
							})
						),
						{ optional: true }
					),
				])
			])
		])
	]
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {
	mobileQuery: MediaQueryList;
	private _mobileQueryListener: () => void;
	navLinks = [];
	mobile = true;
	loading = false;
	usuario: Usuario;
	subscription: Subscription;
	muestra : boolean = true; 

	constructor(private router: Router, private dialog: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private us: AuthService) {
		this.usuario = new Usuario({})
		this.mobileQuery = media.matchMedia('(max-width: 768px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
		this.navLinks = [
			{ path: '/', label: 'HOME', icon: 'home' },
			{ path: '/login', label: 'Login', icon: 'airplanemode_active' },
			{ path: '/noticias', label: 'Noticias'},
			{ path: '/eventos', label: 'Eventos'},
			{ path: '/miembros', label: 'Miembros'},
			{ path: '/institucion', label: 'Institucion'}
		];
	}

	getState(outlet) {
		return outlet.isActivated ? outlet.activatedRoute : '';
	}

	salir() {
		this.us.salir();
	}

	abrirSesion(){
		this.dialog.open(InicioSesionComponent ,{
            width: '455px',
            height: '223px'
		}).afterClosed().subscribe(result => {
			this.muestra = true
			console.log(this.muestra)
		});
	}

	cerrarSesion(){
		this.us.salir();
		this.muestra = true;
	}

	ngAfterViewInit() {
		this.router.events
			.subscribe((event) => {
				if (event instanceof NavigationStart) {
					this.loading = true;
				}
				else if (
					event instanceof NavigationEnd ||
					event instanceof NavigationCancel
				) {
					this.loading = false;
				}
			});
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}
	ngOnInit() {
		this.subscription = this.us.obtenerUsuario().subscribe(user => this.usuario = user);

	}
	verProyecto(idProyecto) {
		this.router.navigate(['proyectos/' + idProyecto]);
	}
}
