import {Component, Input, OnInit} from '@angular/core';
import {BillingsService} from '../../../../../../services/impl/billings.service';
import {Billing} from '../../../../../../model/domain/billing';
import {PartsService} from '../../../../../../services/impl/parts.service';
import {BillingDto, PartBillingDto} from '../../../../../../model/dto/partBillingDto';
import {map} from 'rxjs/operators';
import {Installation} from '../../../../../../model/domain/installations';
import {Year} from '../../../../../../model/domain/utils';
import {saveAs} from 'file-saver';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-billing-installation',
  templateUrl: './billing-installation.component.html',
  styleUrls: ['./billing-installation.component.scss']
})
export class BillingInstallationComponent implements OnInit {
  months: string[];
  billings: Billing[];
  years: Year[];
  selectedYear: Year;
  @Input() installationInput: Installation;

  constructor(private billingService: BillingsService, private partService: PartsService, private messageService: MessageService) {
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
    this.billingService.getSkeleton().then(data => this.billings = data);
  }

  showPart(part, month: number) {
    const p: PartBillingDto = {
      installation: this.installationInput.id,
      month: month + 1,
      company: this.installationInput.company,
      type: part.type,
      year: this.selectedYear.year,
      client: this.installationInput.client.id
    };
    this.billingService.getCodes(p).pipe(map(x => {
        if (x.length === 0) {
         this.messageService.add({severity: 'info', summary: 'No existen facturas para descargar'});
        }
        x.forEach((value, index) => {
          const codes: number[] = [];
          codes.push(value);
          const partDto: BillingDto = {
            requestFacturas: codes,
            tipo: part.type,
            empresa: this.installationInput.company,
            guardar: false,
            fondo: true,
            ejercicio: this.selectedYear.year,
            ensobrado: false,
            doblePagina: false,
            adjuntarParte: false
          };
          this.billingService.download(partDto).subscribe(data => {
            const file = new Blob([data], {type: 'application/pdf;charset=utf-8'});
            saveAs(file, this.installationInput.street.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '') + ' FACTURA ' + ' ' +
              this.months[month] + '.pdf');
          });
        });
      }
    )).subscribe();
  }

}
