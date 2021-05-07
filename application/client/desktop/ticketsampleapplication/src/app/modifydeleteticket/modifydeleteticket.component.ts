import { Component, OnInit } from '@angular/core';
import { ModifydeleteticketService } from './modifydeleteticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifydeleteticket',
  templateUrl: './modifydeleteticket.component.html',
  styleUrls: ['./modifydeleteticket.component.scss'],
})

export class ModifydeleteticketComponent implements OnInit {
    queryId: any;
    typesampleitemArray: any = [];
    severitysampleitemArray: any = [];
    public ticketsample = {
        name: '',
        groups: '',
        description: '',
        types: '',
        severity: '',
    }

    constructor (
        private modifydeleteticketService: ModifydeleteticketService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
            this.activatedRoute.queryParams.subscribe(params => { 
 	 	this.queryId = params.id;
 	 	this.GpGetNounById();
 	 	});
    }
    typesampleGpGetAllValues() {
        this.modifydeleteticketService.typesampleGpGetAllValues().subscribe(data => {
            this.typesampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    severitysampleGpGetAllValues() {
        this.modifydeleteticketService.severitysampleGpGetAllValues().subscribe(data => {
            this.severitysampleitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpUpdate() {
        this.modifydeleteticketService.GpUpdate(this.ticketsample).subscribe(data => {
            this.ticketsample.name = ''
 	 	this.ticketsample.groups = ''
 	 	this.ticketsample.description = ''
 	 	this.ticketsample.types = ''
 	 	this.ticketsample.severity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
    GpDelete() {
        this.modifydeleteticketService.GpDelete(this.queryId).subscribe(data => {
            this.GpGetNounById();
        },
        error => {
            console.log('Error', error);
        });
    }
    GpGetNounById() {
        this.modifydeleteticketService.GpGetNounById(this.queryId).subscribe(data => {
            this.ticketsample = data
        },
        error => {
            console.log('Error', error);
        });
    }
}