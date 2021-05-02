import { AppRoutingModule } from '../../app-routing.module';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcionario } from './funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  funcionario: Funcionario[] = [];

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getAll() {
    // consumo de banco interno testes.
   // return this.funcionario;

   // consumo MongoDB
    return this.http.get<Funcionario[]>(`${environment.api}/funcionario`);
  }

  // tslint:disable-next-line: typedef
  getById(id: string){
     // consumo MongoDB
    return this.http.get<Funcionario>(`${environment.api}/funcionario/${id}`);
  }


  save(funcionario: Funcionario){
    // consumo de banco interno testes.
/*    if(funcionario._id){
      const funcionarioArr = this.getById(funcionario._id) || funcionario; // ||funcionario adicionado por erro, verificar impacto
      funcionarioArr.cpf = funcionario.cpf ;
      funcionarioArr.dataNascimento = funcionario.dataNascimento ;
      funcionarioArr.endereco = funcionario.endereco;
      funcionarioArr.nome = funcionario.nome;
    }
else{
  const lastId = this.funcionario[this.funcionario.length-1]._id;
  funcionario._id = lastId + 1;
  this.funcionario.push(funcionario);
}*/

// consumo MongoDB

const funcionarioBody = {

  nome: funcionario.nome,
  cpf: funcionario.cpf,
  dataNascimento: funcionario.dataNascimento,
  endereco: funcionario.endereco

};

if(funcionario._id){
  return this.http.patch<Funcionario>(`${environment.api}/funcionario/${funcionario._id}`,funcionarioBody);
}else{
  return this.http.post<Funcionario>(`${environment.api}/funcionario/`,funcionarioBody);
}

  }


delete(id:string){

  // consumo de banco interno testes.
  /*
  const funcionarioIndex = this.funcionario.findIndex((value) => value._id == id);
  this.funcionario.splice(funcionarioIndex, 1)
  */

// consumo MongoDB
return this.http.delete<Funcionario>(`${environment.api}/funcionario/${id}`);

}


}
