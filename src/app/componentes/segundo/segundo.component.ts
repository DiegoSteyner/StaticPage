import { Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-segundo',
  imports: [AngularModule, PrimengModule, PdfViewerModule, RouterLink],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.css'
})
export class SegundoComponent {

}
