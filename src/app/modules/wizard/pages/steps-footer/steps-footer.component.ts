import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SharedService} from '../../../../shared/shared.service';
import {MessageService} from 'primeng/api';
import {toast} from 'bulma-toast';

@Component({
  selector: 'app-steps-footer',
  templateUrl: './steps-footer.component.html',
  styleUrls: ['./steps-footer.component.scss']
})
export class StepsFooterComponent implements OnInit {
  urlStep: string;
  nameButton: string;
  disableButtton: boolean;
  positionButton: string;
  iconButton: string;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router, private shared: SharedService) {
    this.nameButton = 'Siguiente';
    this.disableButtton = false;
    this.positionButton = 'has-text-right';
    this.iconButton = 'fas fa-angle-right';
  }

  ngOnInit(): void {
    const href = this.router.url;
    if (!href.includes('wizard')) {
      this.nameButton = 'Guardar cambios';
      this.positionButton = 'ml-5 has-text-right';
      this.iconButton = 'fas fa-save';
    }
  }

  changeStep() {
    this.shared.nextCurrentUrl(false);
    const href = this.router.url;
    let ACTION = '';
    switch (href) {
      case '/wizard/intro':
        this.urlStep = '/wizard/promoter';
        ACTION = 'INTRO';
        break;

      case '/wizard/promoter':
        this.urlStep = '/wizard/alerts';
        ACTION = 'PROMOTER';
        break;

      case '/wizard/alerts':
        this.urlStep = '/wizard/resume';
        ACTION = 'ALERT';
        break;

      case '/wizard/resume':
        this.urlStep = '/home';
        break;

      case  '/home/configurador/alertas':
        this.urlStep = '/home/configurador/menu-alert';
        toast({
          message: 'Alertas guardadas correctamente.',
          type: 'is-success',
          dismissible: false,
          pauseOnHover: true,
          position: 'bottom-right'
        });
        break;

    }
    this.router.navigateByUrl(this.urlStep);
    this.shared.setActionDispatch(ACTION);
  }

}
