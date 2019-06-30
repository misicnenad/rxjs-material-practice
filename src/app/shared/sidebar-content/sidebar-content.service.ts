import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Submenu } from './models';

@Injectable({
  providedIn: 'root'
})
export class SidebarContentService {

  content$ = of([
    <Submenu>{
      displayName: 'Home',
      route: '/home',
    },
    <Submenu>{
      displayName: 'Operators',
      route: '/operators',
      children: [
        <Submenu>{
          displayName: 'Combination',
          route: '/combination',
          children: [
            <Submenu>{
              displayName: 'combineAll',
              route: '/combine-all',
            },
          ]
        },
        <Submenu>{
          displayName: 'Conditional',
          route: '/conditional',
          children: [
            <Submenu>{
              displayName: 'defaultIfEmpty',
              route: '/default-if-empty',
            },
          ]
        },
        <Submenu>{
          displayName: 'Creation',
          route: '/creation',
          children: [
            <Submenu>{
              displayName: 'of',
              route: '/of',
            },
          ]
        },
        <Submenu>{
          displayName: 'Error Handling',
          route: '/error-handling',
          children: [
            <Submenu>{
              displayName: 'catch / catchError',
              route: '/catch-catch-error',
            },
          ]
        },
        <Submenu>{
          displayName: 'Filtering',
          route: '/filtering',
          children: [
            <Submenu>{
              displayName: 'takeWhile',
              route: '/take-while',
            },
          ]
        },
        <Submenu>{
          displayName: 'Multicasting',
          route: '/multicasting',
          children: [
            <Submenu>{
              displayName: 'shareReplay',
              route: '/share-replay',
            },
          ]
        },
        <Submenu>{
          displayName: 'Transformation',
          route: '/transformation',
          children: [
            <Submenu>{
              displayName: 'switchMap',
              route: '/switch-map',
            },
          ]
        },
        <Submenu>{
          displayName: 'Utility',
          route: '/utility',
          children: [
            <Submenu>{
              displayName: 'tap / do',
              route: '/tap-do',
            },
          ]
        },
      ]
    },
    <Submenu>{
      displayName: 'Subjects',
      route: '/subjects',
      children: [
        <Submenu>{
          displayName: 'Subject',
          route: '/subject',
        },
        <Submenu>{
          displayName: 'BehaviorSubject',
          route: '/behavior-subject',
        },
        <Submenu>{
          displayName: 'AsyncSubject',
          route: '/async-subject',
        },
        <Submenu>{
          displayName: 'ReplaySubject',
          route: '/replay-subject',
        },
      ]
    }
  ])
}
