import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            routerLinkActiveOptions: 'active',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numbers',
            routerLinkActiveOptions: 'active',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon',
            routerLinkActiveOptions: 'active',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
          },
        ],
      },
    ];
  }
}
