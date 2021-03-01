import {Component, OnInit} from '@angular/core';
import {InstallationsService} from '../../../../services/impl/installations.service';
import {Observable} from 'rxjs';
import {Installation} from '../../../../model/domain/installations';
import {PlansService} from '../../../../services/impl/plans.service';
import {InstallationDto} from '../../../../model/dto/installationDto.model';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.scss']
})
export class InstallationsComponent implements OnInit {
  installations$: Observable<Installation[]>;
  installation: Installation;
  ACTION: string;

  constructor(private installationService: InstallationsService,
              private plansService: PlansService) {
  }

  ngOnInit(): void {
    this.installations$ = this.installationService.installations();
  }

  changeAction(action: string, installation: Installation) {
    this.ACTION = action;
    this.installation = installation;
  }

  get action() {
    return this.ACTION;
  }

  downloadReport(type: string, installation: any) {

    switch (type) {
      case 'planmanual':
        this.plansService.annualMaintenancePlan(new InstallationDto(installation.id, installation.company))
          .subscribe(data => {
            const file = new Blob([data], {type: 'application/pdf;charset=utf-8'});
            saveAs(file, 'Plan mantenimiento anual.pdf');
          });
        break;
    }
  }
}
