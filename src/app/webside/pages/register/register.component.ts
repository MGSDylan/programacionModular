import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OnExit } from 'src/app/guards/exit.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit,OnExit{

  onExit() {
    const tra=confirm('Estas seguro de salir??')
    return tra;
  }


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
