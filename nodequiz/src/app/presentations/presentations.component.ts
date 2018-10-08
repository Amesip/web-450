import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {
  microservicesPresentation;
  soapPresentation;
  oauthPresentation;


  constructor(private router: Router) {
    this.microservicesPresentation = [
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-1.jpg' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-2.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-3.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-4.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-5.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-6.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-7.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-8.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-9.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-10.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-11.JPG' },
      { slide: 'nodequiz-presentations/Microservices-presentation/micro-12.JPG' }
  ],

    this.soapPresentation = [
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-1.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-2.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-3.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-4.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-5.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-6.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-7.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-8.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-9.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-10.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-11.JPG' },
      { slide: 'nodequiz-presentations/SOAP-presentation/soap-12.JPG' }
  ],

  this.oauthPresentation = [
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-1.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-2.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-3.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-4.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-5.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-6.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-7.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-8.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-9.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-10.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-11.JPG' },
    { slide: 'nodequiz-presentations/OAuth-presentation/oauth-12.JPG' }

  ]

   }

  ngOnInit() {
  }

}