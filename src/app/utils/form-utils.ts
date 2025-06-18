import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class FormUtils
{
    static setRequiredValidator(form: FormGroup, controls:string[]) {
      
        for(var c in controls)
        {
            for (var i in form.controls) {
                if(i == controls[c])
                {
                    form.get(i)?.setValidators([Validators.required])
                    break;
                }
            }
        }
    }
    
    static setAllRequired(form: FormGroup) 
    {
        for (var i in form.controls) {
            form.get(i)?.setValidators([Validators.required])
        }

        return(true);
    }

    static clearAllErros(formGroup: FormGroup): any
    {
        if(formGroup)
        {
            Object.keys(formGroup.controls).forEach(field =>
            {
                const control = formGroup.get(field);
                if (control instanceof FormControl)
                {
                    control.setErrors(null);
                }
                else if (control instanceof FormGroup)
                {
                    this.clearAllErros(control);
                }
                else if (control instanceof FormArray)
                {
                    control.setErrors(null);

                    for(let i = 0; i < control.length; i++)
                    {
                        this.clearAllErros(<FormGroup>control.get(i+''));
                    }
                }
            });

            return(true);
        }
    }

    public static chamarTodosValidadores(formGroup: FormGroup)
    {
        if(formGroup)
        {
            Object.keys(formGroup.controls).forEach(field =>
            {
                const control = formGroup.get(field);
                if (control instanceof FormControl)
                {
                    control.markAsTouched({ onlySelf: true });
                    control.updateValueAndValidity();
                }
                else if (control instanceof FormGroup)
                {
                    this.chamarTodosValidadores(control);
                }
                else if (control instanceof FormArray)
                {
                    control.markAsTouched({ onlySelf: true });
                    control.updateValueAndValidity();
                    for(let i = 0; i < control.length; i++)
                    {
                        this.chamarTodosValidadores(<FormGroup>control.get(i+''));
                    }
                }
            });

            return(true);
        }

        return(false);
    }

    static markAllTouched(form:FormGroup):boolean
    {
        for (var i in form.controls) {
            form.controls[i].markAsTouched();
            form.controls[i].updateValueAndValidity();
            form.get(i)?.markAsTouched();
            form.get(i)?.updateValueAndValidity();
        }
        
        form.markAllAsTouched();
        form.updateValueAndValidity();
        
        return(true);
    }

    public static modelToForm(model:any, formulario: FormGroup<any>, formBuilder: FormBuilder):FormGroup
    {
        for (const key in model)
        {
            if (model.hasOwnProperty(key)) 
            {
                if(typeof(model[key]) == 'object')
                {
                    if(Array.isArray(model[key]))
                    {
                        let array:any = formBuilder.array([]);
                        let group:FormGroup<any> = formBuilder.group({});
                        array.push(group);

                        formulario.addControl(key, array);
                        this.modelToForm(model[key][0], group, formBuilder);
                    }
                    else
                    {
                        let group = formBuilder.group({});
                        formulario.addControl(key, group);
                        this.modelToForm(model[key], group, formBuilder);
                    }
                }
                else
                {
                    formulario.addControl(key, new FormControl(model[key], null));
                }
            }
        }

        return(formulario);
    }

    public static cpfValido(cpf: string): boolean {
        if (cpf == null) {
            return false;
        }
        if (cpf.toString().length !== 11) {
            return false;
        }
        if (
            (cpf == '00000000000') ||
            (cpf == '11111111111') ||
            (cpf == '22222222222') ||
            (cpf == '33333333333') ||
            (cpf == '44444444444') ||
            (cpf == '55555555555') ||
            (cpf == '66666666666') ||
            (cpf == '77777777777') ||
            (cpf == '88888888888') ||
            (cpf == '99999999999')
        ) {
            return false;
        }
        let numero: number = 0;
        let caracter: string = '';
        let numeros: string = '0123456789';
        let j: number = 10;
        let somatorio: number = 0;
        let resto: number = 0;
        let digito1: number = 0;
        let digito2: number = 0;
        let cpfAux: string = '';
        cpfAux = cpf.toString().substring(0, 9);
        for (let i: number = 0; i < 9; i++) {
            caracter = cpfAux.charAt(i);
            if (numeros.search(caracter) == -1) {
                return false;
            }
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito1 = 11 - resto;
        if (digito1 > 9) {
            digito1 = 0;
        }
        j = 11;
        somatorio = 0;
        cpfAux = cpfAux + digito1;
        for (let i: number = 0; i < 10; i++) {
            caracter = cpfAux.charAt(i);
            numero = Number(caracter);
            somatorio = somatorio + (numero * j);
            j--;
        }
        resto = somatorio % 11;
        digito2 = 11 - resto;
        if (digito2 > 9) {
            digito2 = 0;
        }
        cpfAux = cpfAux + digito2;
        if (cpf.toString() !== cpfAux) {
            return false;
        }
        else {
            return true;
        }
    }

    static cnpjValido(cnpj:any):boolean
    {
        if (cnpj === undefined) {
            return false;
          }
      
          // Esta função retira os caracteres . / - da string do cnpj, deixando apenas os números 
          var strCNPJ = cnpj.replace('.', '').replace('.', '').replace('/', '').replace('-', '');
      
          // Testa as sequencias que possuem todos os dígitos iguais e se o cnpj não tem 14 dígitos, retonando falso e exibindo uma msg de erro
          if (strCNPJ === '00000000000000' || strCNPJ === '11111111111111' || strCNPJ === '22222222222222' || strCNPJ === '33333333333333' ||
            strCNPJ === '44444444444444' || strCNPJ === '55555555555555' || strCNPJ === '66666666666666' || strCNPJ === '77777777777777' ||
            strCNPJ === '88888888888888' || strCNPJ === '99999999999999' || strCNPJ.length !== 14) {
            return false;
          }
      
          // A variável numeros pega o bloco com os números sem o DV, a variavel digitos pega apenas os dois ultimos numeros (Digito Verificador).
          var tamanho = strCNPJ.length - 2;
          var numeros = strCNPJ.substring(0, tamanho);
          var digitos = strCNPJ.substring(tamanho);
          var soma = 0;
          var pos = tamanho - 7;
      
          // Os quatro blocos seguintes de funções irá reaizar a validação do CNPJ propriamente dito, conferindo se o DV bate. Caso alguma das funções não consiga verificar
          // o DV corretamente, mostrará uma mensagem de erro ao usuário e retornará falso, para que o usário posso digitar novamente um número 
          for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2) {
              pos = 9;
            }
          }
      
          var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(0)) {
            return false;
          }
      
          tamanho = tamanho + 1;
          numeros = strCNPJ.substring(0, tamanho);
          soma = 0;
          pos = tamanho - 7;
          for (let k = tamanho; k >= 1; k--) {
            soma += numeros.charAt(tamanho - k) * pos--;
            if (pos < 2) {
              pos = 9;
            }
          }
      
          resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
          if (resultado != digitos.charAt(1)) {
            return false;
          }
      
          return true;
    }
}