import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[diretivaErro]',
})
export class DiretivaErro implements AfterViewInit {

  @Input() control?: FormControl | AbstractControl<any, any> | null;
  @Input() checkTouched: boolean = false;
  
  statusChangeSubscription: Subscription | undefined;
  
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }
  ngAfterViewInit(): void {
    if(this.control)
    {
      this.statusChangeSubscription = this.control.statusChanges.subscribe((status) => {
          if (this.control && this.control.errors) 
          {
            if(this.checkTouched && this.control.touched)
            {
              this.tratarPrimeComponentes(true);
              this.renderer.addClass(this.hostElement.nativeElement, 'is-invalid');
              this.renderer.addClass(this.hostElement.nativeElement, 'ng-dirty');
              return;
            }
            
            this.tratarPrimeComponentes(false);
            this.renderer.removeClass(this.hostElement.nativeElement, 'is-invalid');
            this.renderer.removeClass(this.hostElement.nativeElement, 'ng-dirty');
          }
          else 
          {
            this.tratarPrimeComponentes(false);
            this.renderer.removeClass(this.hostElement.nativeElement, 'is-invalid');
            this.renderer.removeClass(this.hostElement.nativeElement, 'ng-dirty');
          }
        }
      );
    }
  }
  
  tratarPrimeComponentes(add:boolean) {
    if(this.hostElement.nativeElement.localName == 'p-calendar')
    {
      if(add)
      {
        this.renderer.addClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
      else{
        this.renderer.removeClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
    }
    else if(this.hostElement.nativeElement.localName == 'p-inputnumber')
    {
      if(add)
      {
        this.renderer.addClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
      else{
        this.renderer.removeClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
    }
    else if(this.hostElement.nativeElement.localName == 'p-password')
    {
      if(add)
      {
        this.renderer.addClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
      else{
        this.renderer.removeClass(this.hostElement.nativeElement.children[0].children[0], 'is-invalid');
      }
    }
  }
}