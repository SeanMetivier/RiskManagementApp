import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RiskManagementComponent } from './risk-management/risk-management.component';
import { MitigationPlansComponent } from './mitigation-plans/mitigation-plans.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ControlsComponent } from './controls/controls.component';
import { ControlobjectivesComponent } from './controlobjectives/controlobjectives.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'risk-management', component: RiskManagementComponent, canActivate: [AuthGuardService]},
    { path: 'mitigation-plans', component: MitigationPlansComponent, canActivate: [AuthGuardService]},
    { path: 'controls', component: ControlsComponent, canActivate: [AuthGuardService] },
    { path: 'controlobjectives', component: ControlobjectivesComponent, canActivate: [AuthGuardService] },
    { path: 'report', component: ReportsComponent, canActivate: [AuthGuardService] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];

