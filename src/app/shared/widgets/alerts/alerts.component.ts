import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertsCompositeService} from '../../../services/impl/alertsComposite.service';
import {SharedService} from '../../shared.service';
import {Promoter} from '../../../model/domain/promoter';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})


export class AlertsComponent implements OnInit, OnDestroy {
  public alerts: any[] = [];
  public colors: string[] = [];
  defaultsPromoters: any[] = [];
  finish$: Subscription;

  constructor(private alertsCompositeService: AlertsCompositeService,
              private sharedService: SharedService) {
    this.alertsCompositeService.alertsDefaults().subscribe();
    this.colors = [
      'has-background-dark',
      'has-background-link',
      'has-background-info',
      'has-background-primary',
      'has-background-success',
      'has-background-danger',
      'has-background-dark'
    ];
  }

  ngOnDestroy(): void {
    this.finish$.unsubscribe();
  }

  ngOnInit(): void {
    this.getAlerts();
    this.finishConfiguration();
  }

  changePromoter(event, idTypeCommunication: number) {
    this.alerts.map(item => {
      if (item.typeCommunication.id === idTypeCommunication) {
        item.promoter.map(p => {
          p.checked = false;
          event.value.map(e => {
            if (p.id === e.id) {
              p.checked = true;
            }
          });
        });
      }
    });
  }

  changeChannel(idTypeCommunication: number, idChannel: number, event) {
    this.alerts.map(item => {
      if (item.typeCommunication.id === idTypeCommunication) {
        item.channel.map(p => {
          if ('pm' + idTypeCommunication + '' + p.id === event.target.id) {
            p.checked = event.target.checked;
          }
        });
      }
    });
  }

  getAlerts() {
    this.alertsCompositeService.alerts().subscribe(alerts => {
      this.alerts = alerts;
      this.alerts.sort((a, b) => (a.typeCommunication.type > (b.typeCommunication.type) ? 1 : -1));
      alerts.map(alert => {
        // add promoters checkeds
        const promoters: Promoter[] = [];
        for (const promoter of alert.promoter) {
          if (promoter.checked) {
            promoters.push(promoter);
          }
        }
        this.defaultsPromoters.push(promoters);
      });
    });
  }


  // get default Alerts
  /*  getAlertsUser() {
      this.alertsCompositeService.alertsByUser()
        .pipe(map(alerts => {
            this.alertsUsers = alerts;
            alerts.map(item => {
              const channel = new Channel(item.idChannel, 'channel', true);
              const alertChannel = new AlertChannelDto(item.idtypeCommunication, channel);
              this.alertChannelDtoList.push(alertChannel);
            });
          }
        ))
        .subscribe();
    }*/

  finishConfiguration() {
    this.finish$ = this.sharedService.getActionDispatch()
      .pipe().subscribe(data => {
        this.alertsCompositeService.createAlerts(this.alerts).subscribe();
      }, () => {
      }, () => {
      });
  }


}
