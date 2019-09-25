import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', //attribute style
  //selector: '.app-servers', //class style
  selector: 'app-servers', // element style
/*   template: `
    <app-server></app-server>
    <app-server></app-server>`, */
    templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus='No server was created';
  serverName = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus='Server was created!';
  }

  onUpdateServerName(event:any){
    // console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
