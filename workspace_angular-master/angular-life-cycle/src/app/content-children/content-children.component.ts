import { Component, OnInit, ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { Pane } from '../content-child/content-child.component';

@Component({
  selector: 'index',
  template: `
 <div class="top-level">Top level panes: {{serializedPanes}}</div>
 <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
 `
})
export class Index {

  @ContentChildren(Pane) topLevelPanes: QueryList<Pane>;

  // Index 컴포넌트가 바로 밑으로 갖고 있는 자식 엘리먼트뿐만 아니라
  // Index 컴포넌트가 중첩된 환경에서 자식의 자식 엘리먼트도 참조한다.
  @ContentChildren(Pane, { descendants: true }) arbitraryNestedPanes: QueryList<Pane>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }

  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

@Component({
  selector: 'app-content-children',
  // templateUrl: './content-children.component.html',
  template: `
    <index>
      <pane id="1"></pane>
      <pane id="2"></pane>
      <pane id="3" *ngIf="shouldShow">
        <index>
          <pane id="3.1"></pane>
          <pane id="3.2"></pane>
        </index>
      </pane>
    </index>
    <button (click)="toggle()">Toggle 3</button>
 `,
  styleUrls: ['./content-children.component.css']
})
export class ContentChildrenComponent implements OnInit {
  shouldShow = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.shouldShow = !this.shouldShow;
  }
}
