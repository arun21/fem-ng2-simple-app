import {Component} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {Experiment} from '../common/experiment.model';
import {ExperimentsService} from '../common/experiments.service';
import {StateService} from '../common/state.service';
import {ExperimentDetailComponent} from './experiment-details/experiment.detail.component';

@Component({
  selector: 'experiments',
  templateUrl: 'app/experiments/experiments.component.html',
  directives: [ExperimentDetailComponent]
})
export class ExperimentsComponent {
  title: string = 'Experiments Page';
  body: string = 'This is the about experiments body';
  message: string;
  experiments: Experiment[];

  constructor(
    private _stateService: StateService,
    private _experimentsService: ExperimentsService) {}

  ngOnInit() {
    this.experiments = this._experimentsService.getExperiments();
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
