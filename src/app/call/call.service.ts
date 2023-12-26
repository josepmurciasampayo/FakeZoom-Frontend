import { Injectable } from '@angular/core';
import * as moment from 'moment';

export interface ICallSettings {
  userAvatar: string | number;
  currentPuzzleId: number;
}

export const voiceConfig = {
  '1': {
    user: 'unmasked',
    person1: 'unmasked',
    person2: 'unmasked',
    sign: 'U/U',
  },
  '2': {
    user: 'unmasked',
    person1: 'masked',
    person2: 'masked',
    sign: 'U/M',
  },
  '3': {
    user: 'masked',
    person1: 'unmasked',
    person2: 'unmasked',
    sign: 'M/U',
  },
  '4': {
    user: 'masked',
    person1: 'masked',
    person2: 'masked',
    sign: 'M/M',
  },
};

export const puzzles = [
  {
    id: 7,
    img: '7_img.png',
    clips: [
      {
        speaker: 'person1',
        followedDelay: 10,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 15,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
    ],
  },
  {
    id: 10,
    img: '7_img.png',
    clips: [
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 20,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
    ],
  },
  {
    id: 13,
    img: '13_img.png',
    clips: [
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 15,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
    ],
  },
  {
    id: 15,
    img: '15_img.png',
    clips: [
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 15,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
    ]
  },
  {
    id: 17,
    img: '17_img.png',
    clips: [
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 25,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 25,
      },
      {
        speaker: 'person1',
        followedDelay: 5,
      },
      {
        speaker: 'person2',
        followedDelay: 5,
      },
    ],
  }
];

@Injectable({
  providedIn: 'root',
})
export class CallService {
  public callSettings: ICallSettings = {} as ICallSettings;
  public recordNormal: any;
  public recordDistorted: any;
  public voice: any;
  public currentPuzzleId = 7;
  public metaData = {};
  public useStarted;
  public useEnded;
  public voiceChangerTestStart = moment();
  public voiceChangerTestEnd = moment().add(10, 'seconds');
  constructor() {}

  public getPuzzleById(id: number): any {
    return puzzles.find((p) => p.id === id);
  }
}
