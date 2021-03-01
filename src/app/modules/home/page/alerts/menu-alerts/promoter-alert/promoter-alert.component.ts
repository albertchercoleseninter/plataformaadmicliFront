import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {PromoterService} from '../../../../../../services/impl/promoter.service';
import {Observable} from 'rxjs';
import {Promoter} from '../../../../../../model/domain/promoter';
import {PromoterDto} from '../../../../../../model/dto/promoterDto.model';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-promoter-alert',
  templateUrl: './promoter-alert.component.html',
  styleUrls: ['./promoter-alert.component.scss']
})
export class PromoterAlertComponent implements OnInit {
  promoters$: Observable<Promoter[]>;
  @Input() associatePromoter: boolean;
  promoterForm: FormGroup;

  //overlaypanelPromoter
  @ViewChild('op', {static: false}) overlayPromoter;

  //overlaypanelMainPromoter
  @ViewChild('op2', {static: false}) overlayMainPromoter;

  //mainPromoter
  mainPromoterDefault: PromoterDto;

  constructor(private promoterService: PromoterService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {

    this.promoterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9 ]{9}')]),
    });
  }

  ngOnInit(): void {
    this.promoters();
  }

  /**
   * Get all promoters
   * Return Promoter []
   */
  promoters() {
    this.promoters$ = this.promoterService.promoters();
  }


  onRowEditSave(promoter: PromoterDto) {
    this.promoterService.updatePromoter(promoter).subscribe((r) => {
      if (r === true) {
        this.messageService.add({severity: 'success', summary: 'Información', detail: 'Gestor actualizado correctamente'});
        this.promoters();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se ha podido actualizar el gestor, compruebe que el teléfono / correo es válido.'
        });
      }
    }, () => {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'No se ha podido actualizar el gestor, realice un nuevo intento en unos minutos'
      });

    }, () => {
    });
  }

  onRowDelete(promoter: PromoterDto) {
    this.confirmationService.confirm({
      target: event.target,
      message: '¿Está seguro de que desea eliminar el gestor?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.promoterService.deletePromoter(promoter).subscribe((r) => {
          if (r === true) {
            this.messageService.add({severity: 'success', summary: 'Información', detail: 'Gestor eliminado correctamente'});
            this.promoters();
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Debe escoger un nuevo gestor principal antes de eliminar este gestor.'
            });
          }
        }, () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'No se ha podido eliminar el gestor, realice un nuevo intento en unos minutos.'
          });
        });
      },
      reject: () => {
      }

    });

  }

  onSubmit() {
    const promoter = new PromoterDto();
    promoter.name = this.promoterForm.value.name;
    promoter.email = this.promoterForm.value.email;
    promoter.phone = this.promoterForm.value.phone;
    this.promoterService.addPromoter(promoter).subscribe((f) => {
      if (f === true) {
        this.messageService.add({severity: 'success', summary: 'Información', detail: 'Gestor creado correctamente'});
        this.promoters();

      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se ha podido crear el gestor, realice un nuevo intento en unos minutos.'
        });
      }
    }, () => {
    });
    this.overlayPromoter.hide();
  }


  closeMainPromoter() {
    this.overlayMainPromoter.hide();
  }

  submitMainPromoter() {
    this.promoterService.setMainPromoter(this.mainPromoterDefault).subscribe((result) => {
      if (result) {
        this.messageService.add({severity: 'success', summary: 'Información', detail: 'Gestor actualizado correctamente'});
        this.promoters();
        this.overlayMainPromoter.hide();
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'No se ha podido actualizar el gestor, realice un nuevo intento en unos minutos.'
        });
      }
    });
  }
}
