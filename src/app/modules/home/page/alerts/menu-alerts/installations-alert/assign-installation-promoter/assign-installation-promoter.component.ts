import {Component, OnInit} from '@angular/core';
import {PromoterService} from '../../../../../../../services/impl/promoter.service';
import {InstallationDto} from '../../../../../../../model/dto/installationDto.model';
import {forkJoin, Observable} from 'rxjs';
import {Promoter} from '../../../../../../../model/domain/promoter';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';
import {InstallationPromotersDto} from '../../../../../../../model/dto/installationPromotersDto.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-assign-installation-promoter',
  templateUrl: './assign-installation-promoter.component.html',
  styleUrls: ['./assign-installation-promoter.component.scss']
})
export class AssignInstallationPromoterComponent implements OnInit {
  $promotersByInstallation: Observable<Promoter[]>;
  $promotersByUser: Observable<Promoter[]>;
  selectedDefault: any[];

  constructor(private promoterService: PromoterService,
              public config: DynamicDialogConfig,
              private messageService: MessageService) {
    this.selectedDefault = [];
  }

  ngOnInit(): void {
    this.promotersByInstallation(new InstallationDto(this.config.data.installation.param0, this.config.data.installation.param3));
  }

  // tslint:disable-next-line:typedef
  promotersByInstallation(installationDto: InstallationDto) {
    this.$promotersByUser = this.promoterService.promoters();
    this.$promotersByInstallation = this.promoterService.promotersByInstallation(installationDto);

    const all = forkJoin([this.$promotersByUser, this.$promotersByInstallation]);
    this.selectedDefault = [];
    all.pipe().subscribe(([res1, res2]) => {
      res1.map(it0 => {
        res2.map(it1 => {
          if (it0.id === it1.id) {
            this.selectedDefault.push(it0);
          }
        });
      });
    });
  }

  updatePromoterAssignment() {
    const installationPromoter = new InstallationPromotersDto(this.selectedDefault, new InstallationDto(this.config.data.installation.param0, this.config.data.installation.param3));
    this.promoterService.assignPromotersToInstallations(installationPromoter).subscribe(() => {
    }, () => {
      this.messageService.add({severity:'error', summary:'Error', detail:'No se ha podido actualizar los gestores, realice un nuevo intento en unos minutos'});
    }, () => {
      this.messageService.add({severity:'success', summary:'Información', detail:'Gestores actualizados correctamente'});
    });
  }
}
