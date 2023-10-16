import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { SingleviewComponent } from './singleview/singleview.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [{ path: '', component: AllproductsComponent },

{path:'view-product/:id',component:SingleviewComponent},
{path:'add-product',component:AddComponent},
{path:'edit-product/:id',component:EditComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
