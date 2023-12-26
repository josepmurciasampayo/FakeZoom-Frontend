import { CallService } from './../call/call.service';
import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { decodeFileAndAddInCollection } from '../utils';
import { Voice } from '../voices';
import { recordAudio } from '../lib/recorder/recorder';
import * as moment from 'moment';
import { map, switchMap, take, scan, filter, tap } from 'rxjs/operators';
import { fromEvent, interval, merge } from 'rxjs';

@Component({
  selector: 'app-opinion-record-modal',
  templateUrl: './opinion-record-modal.component.html',
  styleUrls: ['./opinion-record-modal.component.less']
})
export class OpinionRecordModalComponent{
  @ViewChild('canvas') public canvas: TemplateRef<any>;
  @Input() voiceConfig: any;
  recording = false;
  @Input() recordings = [];
  @Input() msgs = {};
  @Input() callService: CallService;
  public visible = false;
  public showImage = false;
  public imgPath = '';
  public recordStartTime;
  public recordEndTime;
  public promptShowTime;
  public hideClicked = false;
  private record;
  private voice;
  private awayFocusSubsciption;
  private readonly bluredStream = fromEvent(window, 'blur');
  private readonly focusedStream = fromEvent(window, 'focus');
  private awayfocus = 0;
  private awaytime = 0;
  private lastInteraction = moment();

  @Output() public closed: EventEmitter<any> = new EventEmitter<any>();

  public get canSubmit() {
    return this.callService.currentPuzzleId &&
      this.recordings.find(file => file.name === `${this.callService.currentPuzzleId}.wav`) &&
      this.msgs[this.callService.currentPuzzleId];
  }

  public get collpaseTitle() {
    return this.showImage ? 'Hide Problem': 'Show Problem';
  }

  constructor() {
    const mouseMove = fromEvent(document, 'mousemove');
    const mouseDown = fromEvent(document, 'mousedown');
    const keyDown = fromEvent(document, 'keydown');

    merge(mouseMove, mouseDown, keyDown)
      .pipe(tap(() => this.lastInteraction = moment()))
      .subscribe();

    interval(1000)
      .pipe(filter(() => this.visible && !this.hideClicked))
      .subscribe(() => {
      if(this.lastInteraction < moment().subtract(10, 'seconds')) {
        this.awaytime = this.awaytime + 1000;
        console.log(this.awaytime);
      };
    });

  }

  public recordBtnClicked() {

    try {

      if(this.recording) {
        this.recordEndTime = moment();
        this.recording = false;
        this.record.stop().then((audio) =>{
          audio.audioBlob.arrayBuffer().then(data => {
             decodeFileAndAddInCollection(this.voice, data, this.callService.currentPuzzleId ,this.recordings)
           // decodeAndDownload(this.voice, data, 'masked');
            // this.voice.clear_nodes();
          });
        });
      } else {
        this.recordStartTime = moment();
        this.recording = true;

        let stream;
        if(this.voiceConfig.user === 'masked') {
          this.voice.pitch('high');
          stream = this.voice.audioStreamChanged;
        } else {
          this.voice.normal();
          stream = this.voice.audioStream;
        }
        recordAudio(stream).then(recordData => {
          this.record = recordData;
          this.record.start();
        });

      }
    } catch (e) {
      console.error(e);
    }

  }

  public show(path: string) {
    this.visible = true;
    this.promptShowTime = moment();
    this.imgPath = path;
    this.totalIdleTimeSubscription();

    navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(
      async function (stream) {

        // create the voice object. This object holds the logic of the clear and distorted voices
        try {
          const canvas = this.canvas.nativeElement;
          this.voice = new Voice(stream, undefined, canvas);


          // if (this.voiceConfig.user === 'masked') {
          //   this.voice.pitch('high');
          // } else {
          //   this.voice.normal();
          // }

          // create the voice recorder (used upon pressing the record button)

        } catch (e) {
          console.error(e);
        }
      }.bind(this)
    )
    .catch((err) => {
      console.log(err);
    });
  }

  public hide() {
    this.replaceLineBreaksTextAreaChanges();
    setTimeout(() => {
      this.hideClicked = true;
    })
    this.showImage = false;

    if(this.awayFocusSubsciption)  this.awayFocusSubsciption.unsubscribe();
    setTimeout(() => {
      this.visible = false;
      this.record = undefined;
      this.voice = undefined;
      this.hideClicked = false;
    }, 10000 + this.recordEndTime.diff(this.recordStartTime, 'milliseconds'));

  }

  public modalClosed() {
    this.closed.emit({recordStartTime: this.recordStartTime, recordEndTime: this.recordEndTime, promptShowTime: this.promptShowTime, awayFocus: this.awayfocus, awayTime: this.awaytime});
    this.recordStartTime = undefined;
    this.recordEndTime = undefined;
    this.promptShowTime = undefined;
    this.awayfocus = 0;
    this.awaytime = 0;
  }

  public deleteRecording(): void {
    this.recordings = this.recordings.filter(file => file.name === `${this.callService.currentPuzzleId}.wav`);
    this.recordStartTime = undefined;
    this.recordEndTime = undefined;
  }


 private totalIdleTimeSubscription() {
  let durations$ = this.bluredStream.pipe(
    map(() => Date.now()),
    switchMap(focusTime => {
      //focusTime = ft;
      return this.focusedStream.pipe(
        map(() => Date.now()),
        map(outTime => outTime - focusTime))
    }),
  );



  this.awayFocusSubsciption = durations$
    .pipe(scan((sum: number, next: number) => sum + next, 0))
    .subscribe(total => this.awayfocus = total)
  };

  public onKeydown(event){
    event.preventDefault();
  }

  public replaceLineBreaksTextAreaChanges() {
    this.msgs[this.callService.currentPuzzleId] =  this.msgs[this.callService.currentPuzzleId].replace(/\n/g, "");
  }
}
