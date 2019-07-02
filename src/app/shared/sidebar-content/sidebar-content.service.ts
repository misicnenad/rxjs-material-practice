import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarContentService {
  content$ = of([
    {
      displayName: 'Home',
      route: '/home',
    },
    {
      displayName: 'Operators',
      route: '/operators',
      children: [
        {
          displayName: 'Combination',
          route: '/combination',
          children: [
            {
              displayName: 'combineAll',
              route: '/combine-all',
            },
            {
              displayName: 'combineLatest',
              route: '/combine-latest',
            },
            {
              displayName: 'concat',
              route: '/concat',
            },
            {
              displayName: 'concatAll',
              route: '/concat-all',
            },
            {
              displayName: 'endWith',
              route: '/end-with',
            },
            {
              displayName: 'forkJoin',
              route: '/fork-join',
            },
            {
              displayName: 'merge',
              route: '/merge',
            },
            {
              displayName: 'mergeAll',
              route: '/merge-all',
            },
            {
              displayName: 'pairwise',
              route: '/pairwise',
            },
            {
              displayName: 'race',
              route: '/race',
            },
            {
              displayName: 'startWith',
              route: '/start-with',
            },
            {
              displayName: 'withLatestFrom',
              route: '/with-latest-from',
            },
            {
              displayName: 'zip',
              route: '/zip',
            },
          ],
        },
        {
          displayName: 'Conditional',
          route: '/conditional',
          children: [
            {
              displayName: 'defaultIfEmpty',
              route: '/default-if-empty',
            },
            {
              displayName: 'every',
              route: '/every',
            },
            {
              displayName: 'iif',
              route: '/iif',
            },
            {
              displayName: 'sequenceEqual',
              route: '/sequence-equal',
            },
          ],
        },
        {
          displayName: 'Creation',
          route: '/creation',
          children: [
            {
              displayName: 'ajax',
              route: '/ajax',
            },
            {
              displayName: 'create',
              route: '/create',
            },
            {
              displayName: 'defer',
              route: '/defer',
            },
            {
              displayName: 'empty',
              route: '/empty',
            },
            {
              displayName: 'from',
              route: '/from',
            },
            {
              displayName: 'fromEvent',
              route: '/from-event',
            },
            {
              displayName: 'generate',
              route: '/generate',
            },
            {
              displayName: 'interval',
              route: '/interval',
            },
            {
              displayName: 'of',
              route: '/of',
            },
            {
              displayName: 'range',
              route: '/range',
            },
            {
              displayName: 'throw',
              route: '/throw',
            },
            {
              displayName: 'timer',
              route: '/timer',
            },
          ],
        },
        {
          displayName: 'Error Handling',
          route: '/error-handling',
          children: [
            {
              displayName: 'catch / catchError',
              route: '/catch-error',
            },
            {
              displayName: 'retry',
              route: '/retry',
            },
            {
              displayName: 'retryWhen',
              route: '/retry-when',
            },
          ],
        },
        {
          displayName: 'Filtering',
          route: '/filtering',
          children: [
            {
              displayName: 'audit',
              route: '/audit',
            },
            {
              displayName: 'auditTime',
              route: '/audit-time',
            },
            {
              displayName: 'debounce',
              route: '/debounce',
            },
            {
              displayName: 'debounceTime',
              route: '/debounce-time',
            },
            {
              displayName: 'distinctUntilChanged',
              route: '/distinct-until-changed',
            },
            {
              displayName: 'distinctUntilKeyChanged',
              route: '/distinct-until-key-changed',
            },
            {
              displayName: 'filter',
              route: '/filter',
            },
            {
              displayName: 'find',
              route: '/find',
            },
            {
              displayName: 'first',
              route: '/first',
            },
            {
              displayName: 'ignoreElements',
              route: '/ignore-elements',
            },
            {
              displayName: 'last',
              route: '/last',
            },
            {
              displayName: 'sample',
              route: '/sample',
            },
            {
              displayName: 'single',
              route: '/single',
            },
            {
              displayName: 'skip',
              route: '/skip',
            },
            {
              displayName: 'skipUntil',
              route: '/skip-until',
            },
            {
              displayName: 'skipWhile',
              route: '/skip-while',
            },
            {
              displayName: 'take',
              route: '/take',
            },
            {
              displayName: 'takeLast',
              route: '/take-last',
            },
            {
              displayName: 'takeUntil',
              route: '/take-until',
            },
            {
              displayName: 'takeWhile',
              route: '/take-while',
            },
            {
              displayName: 'throttle',
              route: '/throttle',
            },
            {
              displayName: 'throttleTime',
              route: '/throttle-time',
            },
          ],
        },
        {
          displayName: 'Multicasting',
          route: '/multicasting',
          children: [
            {
              displayName: 'publish',
              route: '/publish',
            },
            {
              displayName: 'multicast',
              route: '/multicast',
            },
            {
              displayName: 'share',
              route: '/share',
            },
            {
              displayName: 'shareReplay',
              route: '/share-replay',
            },
          ],
        },
        {
          displayName: 'Transformation',
          route: '/transformation',
          children: [
            {
              displayName: 'buffer',
              route: '/buffer',
            },
            {
              displayName: 'bufferCount',
              route: '/buffer-count',
            },
            {
              displayName: 'bufferTime',
              route: '/buffer-time',
            },
            {
              displayName: 'bufferToggle',
              route: '/buffer-toggle',
            },
            {
              displayName: 'bufferWhen',
              route: '/buffer-when',
            },
            {
              displayName: 'concatMap',
              route: '/concat-map',
            },
            {
              displayName: 'concatMapTo',
              route: '/concat-map-to',
            },
            {
              displayName: 'exhaustMap',
              route: '/exhaust-map',
            },
            {
              displayName: 'groupBy',
              route: '/group-by',
            },
            {
              displayName: 'map',
              route: '/map',
            },
            {
              displayName: 'mapTo',
              route: '/map-to',
            },
            {
              displayName: 'mergeMap / flatMap',
              route: '/merge-map',
            },
            {
              displayName: 'mergeScan',
              route: '/merge-scan',
            },
            {
              displayName: 'partition',
              route: '/partition',
            },
            {
              displayName: 'pluck',
              route: '/pluck',
            },
            {
              displayName: 'reduce',
              route: '/reduce',
            },
            {
              displayName: 'scan',
              route: '/scan',
            },
            {
              displayName: 'switchMap',
              route: '/switch-map',
            },
            {
              displayName: 'switchMapTo',
              route: '/switch-map-to',
            },
            {
              displayName: 'toArray',
              route: '/to-array',
            },
            {
              displayName: 'window',
              route: '/window',
            },
            {
              displayName: 'windowCount',
              route: '/window-count',
            },
            {
              displayName: 'windowTime',
              route: '/window-time',
            },
            {
              displayName: 'windowToggle',
              route: '/window-toggle',
            },
            {
              displayName: 'windowWhen',
              route: '/window-when',
            },
          ],
        },
        {
          displayName: 'Utility',
          route: '/utility',
          children: [
            {
              displayName: 'tap / do',
              route: '/tap',
            },
            {
              displayName: 'delay',
              route: '/delay',
            },
            {
              displayName: 'delayWhen',
              route: '/delay-when',
            },
            {
              displayName: 'dematerialize',
              route: '/dematerialize',
            },
            {
              displayName: 'finalize / finally',
              route: '/finalize',
            },
            {
              displayName: 'let',
              route: '/let',
            },
            {
              displayName: 'repeat',
              route: '/repeat',
            },
            {
              displayName: 'timeInterval',
              route: '/time-interval',
            },
            {
              displayName: 'timeout',
              route: '/timeout',
            },
            {
              displayName: 'timeoutWith',
              route: '/timeout-with',
            },
            {
              displayName: 'toPromise',
              route: '/to-promise',
            },
          ],
        },
      ],
    },
    {
      displayName: 'Subjects',
      route: '/subjects',
      children: [
        {
          displayName: 'Subject',
          route: '/subject',
        },
        {
          displayName: 'BehaviorSubject',
          route: '/behavior-subject',
        },
        {
          displayName: 'AsyncSubject',
          route: '/async-subject',
        },
        {
          displayName: 'ReplaySubject',
          route: '/replay-subject',
        },
      ],
    },
  ]);
}
