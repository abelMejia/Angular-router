import { UserComponent } from './components/user/user.component';

export const CONFIGURATION_ROUTES = [
    { path: "", redirectTo: 'configuration', pathMatch: 'full' },
    { 
        path: "configuration",
        children: [ 
            { path: "", redirectTo: 'user', pathMatch: 'full'},
            { path: 'user', component: UserComponent } 
        ]
    }
];