import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ImportationPageComponent } from './importation-content/importation-page/importation-page.component';
import { ZoneComponent } from './importation-content/zone/zone.component';
import { SiteComponent } from './importation-content/site/site.component';
import { LocalisationComponent } from './importation-content/localisation/localisation.component';
import { BordereauComponent } from './importation-content/bordereau/bordereau.component';
import { BienComponent } from './importation-content/bien/bien.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { DossierImpressionComponent } from './dossier-impression/dossier-impression.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    ImportationPageComponent,
    ZoneComponent,
    SiteComponent,
    LocalisationComponent,
    BordereauComponent,
    BienComponent,
    UtilisateurComponent,
    DossierImpressionComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
