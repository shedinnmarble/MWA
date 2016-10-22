import {ProductDetailComponent} from "./product-detail.component";
import {Routes, RouterModule} from "@angular/router";
import {ProductComponent} from "./product.component";
import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
const routes: Routes =[
    {
        path: 'heroes',
        component: ProductComponent
    },{
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: ProductDetailComponent
    }
];
    @NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}