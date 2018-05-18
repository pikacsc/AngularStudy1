import { Component, OnInit } from '@angular/core';
import { Experiment } from '../model/experiment';
import { ExperimentsService } from '../common/experiments.service';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  title: string = 'Experiments Page';
  body: string = 'This is the about experiments body';
  experiments: Experiment[];

  constructor(private _experimentsService: ExperimentsService) { }

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
  }
}
