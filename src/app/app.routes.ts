import { RouterModule, Routes } from '@angular/router';
import { AboutUs } from './pages/about-us/about-us';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Products } from './pages/products/products';
import { ContactUs } from './pages/contact-us/contact-us';

export const routes: Routes = [
    {path:'',  component: Home, pathMatch:'full'},
    {path:'about-us', component: AboutUs},
    {path:'services', component: Services},
    {path:'products', component: Products},
    {path:'contact-us', component: ContactUs},
    {path:'**', redirectTo:''},
];


export const appRoutes = RouterModule.forRoot(routes, {
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled'
})