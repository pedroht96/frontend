import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  account = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);

      // exibir uma msg amigavel aqui
      console.log("Conta Criada");
      alert("Conta Criada");
      window.location.href="/";
      console.log(result);

    } catch (error) {
      // exibir uma msg de erro
      console.log("Conta Com ERRO");
      confirm("Conta Com ERRO, tente novamente");
      console.error(error);

    }
  }
}
