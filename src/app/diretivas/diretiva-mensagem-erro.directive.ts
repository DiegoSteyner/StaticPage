import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[diretivaMensagemErro]',
})
export class DiretivaMensagemErro implements AfterViewInit {

  @Input() control?: FormControl | AbstractControl<any, any> | null;
  @Input() classes!: string;
  @Input() texto!: string;
  @Input() checkTouched: boolean = false;
  
  statusChangeSubscription: Subscription | undefined;
  
  constructor(private renderer: Renderer2, private hostElement: ElementRef) {
  }
  ngAfterViewInit(): void {
    if(this.control)
    {
      this.statusChangeSubscription = this.control.statusChanges.subscribe((status) => {
          if(this.control)
          {
            if(this.control.errors)
            {
              if(this.checkTouched)
              {
                if(this.control.touched)
                {
                  this.tratarElemento("block");
                }
              }
              else{
                this.tratarElemento("block");
              }
            }
            else
            {
              this.tratarElemento("none");
            }
          }
        }
      );
    }
  }

  tratarElemento(display:string)
  {
    this.hostElement.nativeElement.style.display = display;
    this.hostElement.nativeElement.innerText = this.getTexto(this.texto);
    this.renderer.addClass(this.hostElement.nativeElement, this.classes+"");
  }

  getTexto(texto: string): string
  {
    if(texto)
    {
      return(texto);
    }
    else if(this.hasRequired())
    {
      return("Campo obrigatório");
    }
    else if(this.hasMinLength())
    {
      return("Deve-se informar no mínimo "+this.control?.errors!['minlength'].requiredLength+" caracteres");
    }
    else if(this.hasMaxLength())
    {
      return("Deve-se informar no máximo "+this.control?.errors!['maxlength'].requiredLength+" caracteres");
    }
    else if(this.hasSomenteEspaco())
    {
      return("Não pode ser somente espaços");
    }
    else if(this.hasSomenteEspacoMin())
    {
      return("Não pode ser somente espaços");
    }
    
    return("-");
  }

  hasRequired()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['required'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
  
  hasCpfInvalido()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['cpfinvalido'];
      
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
  
  hasCnpjInvalido()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['cnpjinvalido'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
  
  hasSomenteEspaco()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['somenteespaco'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
  
  hasSomenteEspacoMin()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['somenteespacomin'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }

  hasEmail()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['email'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r) ;
    }

    return(null);
  }
  
  hasEmailInvalido()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['emailinvalido'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r) ;
    }

    return(null);
  }

  hasMaxLength()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['maxlength'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }

  hasMinLength()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['minlength'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
   
  hasDataMenor()
  {
    if(this.control)
    {
      let r = this.control && this.control.errors && this.control.errors['datamenor'];
  
      if(r && this.checkTouched)
      {
        r = this.control.touched;
      }
  
      return(r);
    }

    return(null);
  }
}