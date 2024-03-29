import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/produto/home/home.component';
import { ProdutoComponent } from './modules/produto/produto/produto.component';
import { SharedModule } from './shared/shared.module';
import { ListarComponent } from './modules/produto/listar/listar.component';
import { EspecificacoesComponent } from './modules/produto/especificacoes/especificacoes.component';
import { ListarLojasComponent } from './modules/loja/listar-lojas/listar-lojas.component';
import { LojaComponent } from './modules/loja/loja/loja.component';
import { CadastrarLojaComponent } from './modules/loja/cadastrar-loja/cadastrar-loja.component';
import { CadastrarProdutoComponent } from './modules/loja/cadastrar-produto/cadastrar-produto.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './modules/loja/perfil/perfil.component';
import { ProdutosLojaComponent } from './modules/loja/produtos-loja/produtos-loja.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent,
    ListarComponent,
    EspecificacoesComponent,
    ListarLojasComponent,
    LojaComponent,
    CadastrarLojaComponent,
    CadastrarProdutoComponent,
    PerfilComponent,
    ProdutosLojaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }