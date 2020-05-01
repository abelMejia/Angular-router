import { UserListComponent } from './components/user-list/user-list.component';

export const USER_ROUTES = [
    { 
        path: "user",
        children: [ 
            { path: "", redirectTo: 'user', pathMatch: 'full'},
            { path: 'list', component: UserListComponent } 
        ]
    }
];