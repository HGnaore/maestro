import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ImportationPageComponent } from './importation-content/importation-page/importation-page.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DossierImpressionComponent } from './dossier-impression/dossier-impression.component';

const routes: Routes = [
  { 
    path: '', component: AdminPanelComponent, children: [
      { path: 'importation', component: ImportationPageComponent },
      { path: 'utilisateurs', component: UtilisateurComponent },
      { path: 'dossier-impression', component: DossierImpressionComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
