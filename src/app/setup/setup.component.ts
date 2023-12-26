import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Voice } from '../voices';
import { recordAudio } from '../lib/recorder/recorder';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CallService, voiceConfig } from '../call/call.service';
import { sentences } from './sentences';
import * as moment from 'moment';

type voiceType = 'masked' | 'unmasked';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.less'],
})
export class SetupComponent implements AfterViewInit {
  @ViewChild('speakerAudio') speakerAudio: any;
  private voice: any;

  public testingMic = true;
  public speakerTesting = false;
  public playingAudio = true;
  public speakerTestAudio = '';
  public micBlocked = false;
  public micMuted = false;
  public readonly speakerTestAudios = {
    '/assets/speaker-test/lemon-female.mp3': 'lemon',
    '/assets/speaker-test/lemon.mp3': 'lemon',
  };
  public wordToCheck = '';
  public listenYourself = false;
  public selectingAvatar = false;
  public showInstructionsStep = 0;
  public waitingForParticipants = false;
  public waitingForConnection = false;
  public randomSentences = [];
  public canProceedVoiceChanger = false;
  public microphone = undefined;

  public get speakerTestPassed(): boolean {
    return (
      this.wordToCheck &&
      this.wordToCheck.toLowerCase() ===
        this.speakerTestAudios[this.speakerTestAudio]
    );
  }

  public get instructionButtonLabel(): string {
    if (this.waitingForParticipants) {
      return 'Waiting...';
    } else if (this.waitingForConnection) {
      return 'Connecting...';
    } else if (this.showInstructionsStep === 4) {
      return 'Begin Meeting';
    } else {
      return 'Next';
    }
  }

  public avatarToken = [];

  @ViewChild('canvas') public canvas: TemplateRef<any>;
  @ViewChild('canvas2') public canvas2: TemplateRef<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private message: NzMessageService,
    public callService: CallService
  ) {}

  ngAfterViewInit(): void {
    this.route.params.subscribe(({ id }: { id: string }) => {
      this.consentMicrophone(voiceConfig[id].user);
      this.callService.useStarted = moment();
    });

    for (let i = 0; i < 10; i++) {
      this.avatarToken.push(this.makeid(5));
    }

    this.randomSentences = this.pickRandom(sentences, 3);
  }

  private consentMicrophone(vt: voiceType) {
    if (navigator.mediaDevices) {
      console.log('getUserMedia supported.');
      this.microphone = navigator.permissions
        .query({ name: 'microphone' })
        .then((permissionObj) => {
          if (this.micBlocked && permissionObj.state === 'granted') {
            location.reload();
          } else if (permissionObj.state === 'denied') {
            this.micBlocked = true;
          }
          //
        });

      // get the microphone input whcih resolves to the microphone stream
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(
          async function (stream) {
            // show the page and hide the error message saying "allow microphone"
            // $("#page-content").show()
            // $("#allow-text").hide()

            const canvas = this.canvas.nativeElement;
            // create the voice object. This object holds the logic of the clear and distorted voices
            try {
              this.callService.voice = this.voice = new Voice(
                stream,
                undefined,
                canvas
              );

              // initialize it with the normal voice
              if (vt === 'masked') {
                this.voice.pitch('high');
              } else {
                this.voice.normal();
              }

              // create the voice recorder (used upon pressing the record button)
              this.callService.recordNormal = await recordAudio(
                this.voice.audioStream
              );
              this.callService.recordDistorted = await recordAudio(
                this.voice.audioStreamChanged
              );
              this.micTestingComplete(stream);
            } catch (e) {
              console.error(e);
            }
          }.bind(this)
        )
        .catch((err) => {
          this.micBlocked = true;
        });
    } else {
      this.message.create('error', `Audio not supported on your browser`);
    }
  }

  private micTestingComplete(stream) {
    setTimeout(() => {
      this.voice.clear_nodes();
      this.message.create('success', `Your microphone is working`);
      this.testingMic = false;
      this.speakerTesting = true;
      this.selectAudio();

      // stream.getTracks() // get all tracks from the MediaStream
      //   .forEach( track => track.stop() ); // stop each of them
    }, 5000);
  }

  private selectAudio(): void {
    const keys = Object.keys(this.speakerTestAudios);
    const prop = keys[Math.floor(Math.random() * keys.length)];
    this.speakerTestAudio = prop;
  }

  public nextInstructions(): void {
    this.showInstructionsStep++;
    if (this.showInstructionsStep === 2) {
      this.waitingForParticipants = true;
      setTimeout(() => {
        this.showInstructionsStep = 3;
        this.waitingForParticipants = false;
        this.waitingForConnection = true;

        setTimeout(() => {
          this.waitingForConnection = false;
          this.showInstructionsStep = 4;
        }, this.randomMins(10, 15) * 1000);
      }, this.randomMins(30, 60) * 1000);
    }
    if (this.showInstructionsStep === 5) {
      this.router.navigate([
        `/call/${this.route.snapshot.params.id}/${this.callService.callSettings.userAvatar}`,
      ], { queryParams: this.route.snapshot.queryParams });
    }
  }

  public startVoiceChangerTest() {
    this.callService.voiceChangerTestStart = moment();
    this.listenYourself = true;
    this.speakerTesting = false;
      navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((async function (stream) {
        const canvas = this.canvas2.nativeElement;
        // create the voice object. This object holds the logic of the clear and distorted voices
        try {
          this.callService.voice = this.voice = new Voice(
            stream,
            undefined,
            canvas
          );

          // initialize it with the normal voice
          if (voiceConfig[this.route.snapshot.params.id].user === 'masked') {
            this.voice.pitch('high');
          } else {
            this.voice.normal();
          }
        } catch (e) {
          console.error(e);
        }
      }).bind(this));

    setTimeout(() => {
      this.canProceedVoiceChanger = true;
    }, 10000);
  }

  public endVoiceChangerTest() {
    this.selectingAvatar = true;
    this.listenYourself = false;
    this.callService.voiceChangerTestEnd = moment();
    this.voice.clear_nodes();
  }

  private randomMins(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public replay(): void {
    this.speakerAudio.nativeElement.play();
  }

  public makeid(length) {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  private pickRandom = (arr, count) => {
    let _arr = [...arr];
    return [...Array(count)].map(
      () => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]
    );
  };
}
