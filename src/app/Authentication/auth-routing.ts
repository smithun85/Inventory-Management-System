import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { AuthLayoutComponent } from "../layouts/auth-layout/auth-layout.component";

const routes:Routes=[
    {
        path:'',
        component:AuthLayoutComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            },
            {
                path:'signup',
                component:SignupComponent
            },
            {
                path:'forget-password',
                component:ForgetPasswordComponent
            },
            {
                path:'reset-password',
                component:ResetPasswordComponent
            },
            {
                path: '**', redirectTo: 'login',pathMatch : 'full'
            }
        ]
    },
    {
        path: '**', redirectTo: 'login',pathMatch : 'full'     //open the login page by-default
    }
   
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class authRoutingModule {}