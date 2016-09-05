import { Component } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { TestComponentBuilder } from '@angular/core/testing';

import {
  addProviders,
  async,
  inject
} from '@angular/core/testing';
import {
  RouterConfig
} from '@angular/router';

import {provideFakeRouter} from '../testing/router/router-testing-providers';

import { AppComponent } from './app.component';

export function main() {

  describe('App component', () => {
    // Disable old forms
    let providerArr: any[];

    beforeEach(() => {
      providerArr = [disableDeprecatedForms(), provideForms()];

      // Support for testing component that uses Router
      let config: RouterConfig = [
        { path: '', component: AppComponent }
      ];

      addProviders([
        provideFakeRouter(TestComponent, config)
      ]);
    });

    it('should build without a problem',
      async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        tcb.overrideProviders(TestComponent, providerArr)
          .createAsync(TestComponent)
          .then((fixture) => {
            expect(fixture.nativeElement.innerText.indexOf('HOME')).toBeTruthy();
          });
      })));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>',
  directives: [AppComponent]
})

class TestComponent {
}
