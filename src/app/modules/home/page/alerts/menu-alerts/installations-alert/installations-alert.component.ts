import {Component, OnInit} from '@angular/core';
import {InstallationsService} from '../../../../../../services/impl/installations.service';
import {TreeNode} from 'primeng/api';
import {map} from 'rxjs/operators';
import {PromoterService} from '../../../../../../services/impl/promoter.service';
import {InstallationDto} from '../../../../../../model/dto/installationDto.model';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {AssignInstallationPromoterComponent} from './assign-installation-promoter/assign-installation-promoter.component';


@Component({
  selector: 'app-installations-alert',
  templateUrl: './installations-alert.component.html',
  styleUrls: ['./installations-alert.component.scss']
})
export class InstallationsAlertComponent implements OnInit {
  files: TreeNode[];
  cols: any[];
  dialog: DynamicDialogRef;
  titleDialog: string;

  constructor(private installationsService: InstallationsService,
              private promoterService: PromoterService,
              public dialogService: DialogService) {
    this.cols = [
      {field: 'param0', header: 'Código'},
      {field: 'param1', header: 'Dirección'},
      {field: 'param2', header: 'Población'}
    ];
    this.files = [];
  }


  ngOnInit(): void {
    this.installationsTree();
  }


  installationsTree() {
    this.installationsService.installationsTree().pipe(map(item => {
      console.log(item);
      //this.titleDialog = item.data.param1;
      item.data.itemList.forEach(a => {
        const node = {
          data: {
            param0: a.param0,
            param1: a.param1,
            param2: a.param2,
            param3: a.param3,
          },
          leaf: a.leaf
        };
        this.files.push(node);
      });


    })).subscribe();
  }

  onNodeExpand(event) {
    const nodes = event.node;
    const nodesList: any[] = [];
    const installation = new InstallationDto(nodes.data.param0, nodes.data.param3);
    this.promoterService.treePromotersByInstallation(installation).pipe(map(item => {
      console.log(item);
      item.data.itemList.forEach(a => {
        let descriptionPromoter = '';
        if (a.param2.includes('principal')) {
          descriptionPromoter = ' - ' + a.param2;
        } else {
          descriptionPromoter = a.param2;
        }

        const node = {
          data: {
            param0: a.param1 + descriptionPromoter,
          },
          leaf: a.leaf
        };
        nodesList.push(node);
      });


    })).subscribe(() => {
    }, () => {
    }, () => {
      nodes.children = nodesList;
      this.files = [...this.files];
    });
  }

  openAssignPromoter(rowData) {
    this.dialog = this.dialogService.open(AssignInstallationPromoterComponent, {
      header: rowData.param1 + ', ' + rowData.param2,
      width: '50%',
      contentStyle: {'height': '40rem', 'overflow': 'auto'},
      baseZIndex: 10000,
      data: {
        installation: rowData
      }
    });
  }
}
