import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';

@Component({
  selector: 'app-quarto-componente',
  imports: [AngularModule],
  templateUrl: './quarto-componente.component.html',
  styleUrl: './quarto-componente.component.css'
})
export class QuartoComponenteComponent implements AfterViewInit 
{
  @ViewChild('canvas') canvas!: ElementRef;
  ctx!: CanvasRenderingContext2D;
  imagesMap = new Map<string, any>();
  areAllImagesLoaded = false;
  lastImagem:any;
  
  posicaox:number = 50;
  posicaoy:number = 40;
  largura:number = 150;
  altura:number = 0;
  texto!:string;
  resultados!: RegExpMatchArray | null;

  constructor() {
    const image = new Image(60, 45);
    image.onload = () => {
      this.imagesMap.get('bozo').isLoaded = true;
      this.areAllImagesLoaded = Array.from(this.imagesMap.values()).every(
        (f) => f.isLoaded
      );
    };
    // image.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPGEgeGxpbms6aHJlZj0iaHR0cDovL3d3dy50YnJheS5vcmcvb25nb2luZy9XaGVuLzIwMHgvMjAwNC8wMS8xMS9Qb3N0ZWxQaWxncmltIj4KICA8cGF0aCBkPSJNMTAsMTVjMTAsMTAsMTAsMCw0MCwwYzMwLDAsMzAsMTAsNDAsMHEtMTAsMzAtNDAsMzBxLTMwLDAtNDAtMzAiCiAgICBzdHJva2U9ImJsYWNrIiBmaWxsPSJyZWQiLz4KICA8ZWxsaXBzZSBzdHJva2U9ImJsYWNrIiBmaWxsPSJ3aGl0ZSIgY3g9IjUwIiBjeT0iNDAiIHJ4PSIyMiIgcnk9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI0MCIgcj0iNSIgc3Ryb2tlPSJibGFjayIgZmlsbD0icmVkIi8+CiAgPGNpcmNsZSBjeD0iNDgiIGN5PSIzOCIgcj0iMSIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBkPSJNMzUsNDVDNDAsNzUsNjAsNzUsNjUsNDVRNTAsNjAsMzUsNDVaIgogICAgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjIiLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSIyIi8+CiAgPHBhdGggZD0iTTM1LDMwcTUtMTAsMTAsMHEtNS0zMC0xMCwwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTU1LDMwcTUtMTAsMTAsMHEtNS0zMC0xMCwwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+CiAgPC9hPgo8L3N2Zz4K';
    let b = '';
    
    b = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0MCIgd2lkdGg9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZWxsaXBzZSByeD0iMTAwIiByeT0iNTAiIGN4PSIxMjAiIGN5PSI4MCJzdHlsZT0iZmlsbDpibHVlO3N0cm9rZTpncmVlbjtzdHJva2Utd2lkdGg6MyIgLz48L3N2Zz4=';
    b = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE0MCIgd2lkdGg9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogIDxhIHhsaW5rOmhyZWY9Imh0dHA6Ly93d3cudGJyYXkub3JnL29uZ29pbmcvV2hlbi8yMDB4LzIwMDQvMDEvMTEvUG9zdGVsUGlsZ3JpbSI+DQogIDxlbGxpcHNlIGN4PSIxMjAiIGN5PSI4MCIgcng9IjEwMCIgcnk9IjUwIiBzdHlsZT0iZmlsbDp5ZWxsb3c7c3Ryb2tlOmdyZWVuO3N0cm9rZS13aWR0aDozIiAvPg0KICANCjwvc3ZnPg==";
    b = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPGEgeGxpbms6aHJlZj0iaHR0cDovL3d3dy50YnJheS5vcmcvb25nb2luZy9XaGVuLzIwMHgvMjAwNC8wMS8xMS9Qb3N0ZWxQaWxncmltIj4KICA8cGF0aCBkPSJNMTAsMTVjMTAsMTAsMTAsMCw0MCwwYzMwLDAsMzAsMTAsNDAsMHEtMTAsMzAtNDAsMzBxLTMwLDAtNDAtMzAiCiAgICBzdHJva2U9ImJsYWNrIiBmaWxsPSJyZWQiLz4KICA8ZWxsaXBzZSBzdHJva2U9ImJsYWNrIiBmaWxsPSJ3aGl0ZSIgY3g9IjUwIiBjeT0iNDAiIHJ4PSIyMiIgcnk9IjM1Ii8+CiAgPGNpcmNsZSBjeD0iNTAiIGN5PSI0MCIgcj0iNSIgc3Ryb2tlPSJibGFjayIgZmlsbD0icmVkIi8+CiAgPGNpcmNsZSBjeD0iNDgiIGN5PSIzOCIgcj0iMSIgZmlsbD0id2hpdGUiLz4KICA8cGF0aCBkPSJNMzUsNDVDNDAsNzUsNjAsNzUsNjUsNDVRNTAsNjAsMzUsNDVaIgogICAgc3Ryb2tlPSJyZWQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjIiLz4KICA8Y2lyY2xlIGN4PSI2MCIgY3k9IjMwIiByPSIyIi8+CiAgPHBhdGggZD0iTTM1LDMwcTUtMTAsMTAsMHEtNS0zMC0xMCwwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+CiAgPHBhdGggZD0iTTU1LDMwcTUtMTAsMTAsMHEtNS0zMC0xMCwwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIi8+CiAgPC9hPgo8L3N2Zz4K";
    
    image.src = b;
    this.imagesMap.set('bozo', { image, isLoaded: false });
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    const c: any = document.getElementById('mycanvas');
    const ctx = c.getContext('2d');
    const img = document.getElementById('tireoide');
    ctx.drawImage(img, 10, 10);
    
    // This should fail because images are not loaded at this point
    this.drawImages();

    console.log('QuartoComponenteComponent view initialized');
  }

  drawImage(image: any, undo:boolean) {
    // this.ctx.drawImage(image,this.getRandomNumber(0, 250),this.getRandomNumber(0, 250),image.width,image.height);
    // this.ctx.drawImage(image,this.getRandomNumber(0, 250),this.getRandomNumber(0, 250), 90, 90);
    // this.ctx.drawImage(image,50,150, 90, 90);


    // var canvas = this.canvas.nativeElement;
    if(undo)
    {
      var canvas = document.getElementById('mycanvas') as HTMLCanvasElement;
    // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // window.location.href=image;
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    this.lastImagem = dataURL;
    }


    let x = this.posicaox;
    let y = this.posicaoy;
    let width = this.largura;
    let height = this.largura;
    this.ctx.drawImage(image, x, y, width, height);


  }

  drawImages(tipo?:number) {
    if (this.areAllImagesLoaded) {
      //   // this.imagesMap.forEach((f) => this.drawImage(f.image));

      let svg = '<svg id="svgcanvas" height="140" width="500" xmlns="http://www.w3.org/2000/svg"><ellipse rx="100" ry="50" cx="120" cy="80" style="fill: yellow; stroke: green; stroke-width: 3;"/></svg>';
      
      // var xml = new XMLSerializer().serializeToString(document.createElementNS('http://www.w3.org/2000/svg', svg));
      // var xml = new XMLSerializer().serializeToString(document.getElementById('svgcanvas') ?? document.createElement('svg'));
      // var xml = svg;
      // var svg64 = btoa('<svg id="svgcanvas" height="100%" width="100%"  viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg"><ellipse rx="100" ry="50" cx="120" cy="80" style="fill: yellow; stroke: green; stroke-width: 3;"/></svg>');
      // var svg64 = btoa('<svg height="100" width="200"  xmlns="http://www.w3.org/2000/svg">  <ellipse rx="100" ry="50" cx="120" cy="80" style="fill:yellow;stroke:green;stroke-width:3" />  Sorry, your browser does not support inline SVG.  </svg>');
      // var svg64 = btoa('<svg height="140" width="500"  xmlns="http://www.w3.org/2000/svg">  <ellipse rx="100" ry="50" cx="120" cy="80" style="fill:yellow;stroke:green;stroke-width:3"/>  Sorry, your browser does not support inline SVG.  </svg>');
      // var svg64 = btoa('<svg id="svgcanvas" height="250" width="500" xmlns="http://www.w3.org/2000/svg"><ellipse rx="100" ry="50" cx="110" cy="-100" transform="rotate(90)" style="fill: yellow; stroke: green; stroke-width: 3;"></ellipse></svg>');
      // var svg64 = btoa('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-circle-fill" viewBox="0 0 16 16">   <circle cx="8" cy="8" r="8" style="fill: yellow; stroke: green; stroke-width: 1;"/> </svg>');
      // var svg64 = btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" style="fill: yellow; stroke: green; stroke-width: 6;"/></svg>');
      
      //elippse deitada
      // var svg64 = btoa('<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="100" cy="50" rx="98" ry="48" style="fill:yellow;stroke:green;stroke-width:3"/></svg>');
      //elipse em pé
      // var svg64 = btoa('<svg viewBox="0 0 500 150" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="100" cy="50" rx="98" ry="48" style="fill:yellow;stroke:green;stroke-width:3"/></svg>');
      // elipse em pé rotacionada
      // var svg64 = btoa('<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="-120" rx="98" ry="100" style="fill: yellow; stroke: green; stroke-width: 3;" transform="rotate(90)"></ellipse></svg>');
      //circulo da elipse
      // var svg64 = btoa('<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="100" cy="50" rx="100" ry="50" style="fill:yellow;stroke:green;stroke-width:3"/></svg>');
      //circulo
      var svg64 = btoa('<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">  <circle r="45" cx="50" cy="50" fill="yellow" stroke="green" stroke-width="3" /></svg>');

      if(tipo == 1)
      {
        svg64 = btoa('<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">  <circle r="45" cx="50" cy="50" fill="yellow" stroke="green" stroke-width="3" /></svg>');
      }
      if(tipo == 2)
      {
        svg64 = btoa('<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="-120" rx="98" ry="100" style="fill: yellow; stroke: green; stroke-width: 3;" transform="rotate(90)"></ellipse></svg>');
      }
      if(tipo == 3)
      {
        svg64 = btoa('<svg viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="100" cy="50" rx="98" ry="48" style="fill:yellow;stroke:green;stroke-width:3"/></svg>');
      }

      // elipse deitada
      // var svg64 = btoa('<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="120" cy="80" rx="50" ry="30" style="fill:yellow;stroke:green;stroke-width:3" /></svg>');
      // elipse em pé
      // var svg64 = btoa('<svg viewBox="0 0 1000 300" xmlns="http://www.w3.org/2000/svg">  <ellipse cx="120" cy="80" rx="50" ry="30" style="fill:yellow;stroke:green;stroke-width:2" /></svg>');
      
      // circulo
      // var svg64 = btoa('<svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">  <circle r="45" cx="50" cy="50" fill="red" stroke="green" stroke-width="3" /></svg>');
      // elipse em pé
      // var svg64 = btoa('<svg height="140" width="500" xmlns="http://www.w3.org/2000/svg">  <ellipse rx="100" ry="50" cx="120" cy="80"  style="fill:yellow;stroke:green;stroke-width:3" /></svg>');
      //elipse deitada
      // var svg64 = btoa('<svg height="200" width="220" xmlns="http://www.w3.org/2000/svg">  <ellipse rx="100" ry="50" cx="120" cy="80"  style="fill:yellow;stroke:green;stroke-width:3" /></svg>');
      
      var b64Start = 'data:image/svg+xml;base64,';
      
      // prepend a "header"
      var image64 = b64Start + svg64;
      // console.log(xml);
      // console.log(svg);
      console.log(image64);

      const image = new Image(60, 45);
    image.onload = () => {
      this.drawImage(image, true)
    };
    image.crossOrigin = "anonymous";
    image.src = image64;

    // let blob = new Blob([svg], {type: 'image/svg+xml'});
    // let url = URL.createObjectURL(blob);

    // var appLogo = new Image(60,45);
    // appLogo.onload = () => {
    //   console.log('Image loaded:', appLogo);
    //   this.drawImage(appLogo);
    // };
    // appLogo.src = url;
    // console.log('Image source set:', appLogo.src);

      // this.imagesMap.forEach((f) => this.drawImage(f.image));
    } else {
      console.log('All images are not loaded!');
    }
  }

  desfazer()
  {
    const image = new Image(60, 45);
    image.onload = () => {
      this.ctx = this.canvas.nativeElement.getContext('2d');

      const c: any = document.getElementById('mycanvas');
      const ctx = c.getContext('2d');
      ctx.drawImage(image, 0, 0);
    };
    image.crossOrigin = "anonymous";
    image.src = this.lastImagem;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  extrairMedidas()
  {
    const regex = /(plexo solar anterior|nível IA|terço médio do lobo direito|e o menor).*?\d+\sx\s\d+(\sx\s\d+)?/gi;

    this.resultados = this.texto.replace(/\s{2,}/g, ' ').match(regex);
    console.log(this.resultados);
  }

  baixar()
  {
    // var canvas = this.canvas.nativeElement;
    var canvas = document.getElementById('mycanvas') as HTMLCanvasElement;
    // var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    // window.location.href=image;
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);

    this.downloadImage(dataURL, 'my-canvas.jpeg');
  }

  downloadImage(data:any, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}
}
