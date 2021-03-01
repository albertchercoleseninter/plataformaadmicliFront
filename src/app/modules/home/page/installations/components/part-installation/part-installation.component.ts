import {Component, Input, OnInit} from '@angular/core';
import {PartsService} from '../../../../../../services/impl/parts.service';
import {PartBillingDto, PartDto} from '../../../../../../model/dto/partBillingDto';
import {Year} from '../../../../../../model/domain/utils';
import {Installation} from '../../../../../../model/domain/installations';
import {map} from 'rxjs/operators';
import {saveAs} from 'file-saver';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-part-installation',
  templateUrl: './part-installation.component.html',
  styleUrls: ['./part-installation.component.scss']
})

export class PartInstallationComponent implements OnInit {
  months: string[];
  parts: PartBillingDto[];
  years: Year[];
  selectedYear: Year;
  @Input() installationInput: Installation;

  constructor(private partService: PartsService,
              private messageService: MessageService) {
    this.months = this.partService.months();
    this.years = [
      {
        id: 1,
        year: new Date().getFullYear()
      },
      {
        id: 2,
        year: new Date().getFullYear() - 1
      }
    ];
  }

  ngOnInit(): void {
    this.partService.getSkeleton().then(data => this.parts = data);
  }

  showPart(part, month: number) {
    const p: PartBillingDto = {
      installation: this.installationInput.id,
      month: month + 1,
      company: this.installationInput.company,
      type: part.type,
      year: this.selectedYear.year
    };
    this.partService.getCodes(p).pipe(map(x => {
        if (x.length === 0) {
          this.messageService.add({severity: 'info', summary: 'No existen actuaciones para descargar'});
        }
        x.forEach((value, index) => {
          const partDto: PartDto = {
            codigo: String(value),
            tipo: part.type,
            empresa: this.installationInput.company,
            guardar: false,
            fondo: true
          };
          this.partService.download(partDto).subscribe(data => {
            const file = new Blob([data], {type: 'application/pdf;charset=utf-8'});
            saveAs(file, this.installationInput.street.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') + ' ACTUACION ' + ' ' +
              this.months[month] + '.pdf');
          });
        });
      }
    )).subscribe();
  }
}
