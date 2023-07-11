import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatProductComponent } from './creat-product/creat-product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path:'products-list',component:ProductsListComponent},
  {path:'create-product',component:CreatProductComponent},
  { path: '',redirectTo:'products-list',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
