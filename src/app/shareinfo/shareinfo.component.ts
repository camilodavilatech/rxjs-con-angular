import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shareinfo',
  standalone: true,
  imports: [],
  templateUrl: './shareinfo.component.html',
  styleUrl: './shareinfo.component.css'
})
export class ShareinfoComponent {
  @Input() product: string = "";
}
