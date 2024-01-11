import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``,
})
export class BasicsPageComponent {
  public nameLower: string = 'erick';
  public nameUpper: string = 'ERICK';
  public fullName: string = 'eRiCk';

  public customDate: Date = new Date();
}
