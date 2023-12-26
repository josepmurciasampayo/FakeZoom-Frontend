import { AppService } from './../app.service';
import { OpinionRecordModalComponent } from './../opinion-record-modal/opinion-record-modal.component';
import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallService, voiceConfig as vc, puzzles } from './call.service';
import * as XLSX from 'xlsx';
import * as fileSaver from 'file-saver';
import * as JSZip from 'jszip';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import * as moment from 'moment';
import  'moment-duration-format';
import { from, fromEvent } from 'rxjs';





@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.less']
})
export class CallComponent implements OnInit, AfterViewInit {
  @ViewChild('audio') audio: any;
  @ViewChild('opinionModal') opinionModal: OpinionRecordModalComponent;

  public readonly puzzleIds = [7, 10, 13, 15, 17];
  public currentPuzzleId = this.puzzleIds[0];

  private audioClipNum: number = 0;
  private versionNumber = 1;
  private idol = true;
  public completed = false;
  public audioInit = false;
  public person1Avatar = this.makeid(5);
  public person2Avatar = this.makeid(5);
  public recordings = [];
  public msgs = {};
  public downloadableContent = undefined;
  public downloadFileName = undefined;
  private skipCode = new Set();

  public get puzzleImage(): string {
    return `/assets/puzzles/${this.currentPuzzleId}_img.png`
  }

  private get selectedPuzzleClips(): any {
    const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
    return selectedPuzzle.clips || [];
  }

  public get audioURL(): string {
    const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
    const folder = selectedPuzzle.clips[this.audioClipNum] ? vc[this.route.snapshot.params.id][selectedPuzzle.clips[this.audioClipNum].speaker]: '';

   return `/assets/puzzles/${this.currentPuzzleId}/${folder}/${this.audioClipNum + 1}.mp3`;
  }

  public get speaker(): string {
    const selectedPuzzle = this.callService.getPuzzleById(this.currentPuzzleId);
    return !this.idol && selectedPuzzle.clips[this.audioClipNum] && selectedPuzzle.clips[this.audioClipNum].speaker;
  }

  public get voiceConfig(): any {
    return vc[this.route.snapshot.params.id];
  }

  constructor(
    public callService: CallService,
    public route: ActivatedRoute,
    private appService: AppService,
  ) {
    this.callService.currentPuzzleId = this.currentPuzzleId;
  }

  ngOnInit(): void {
    fromEvent(document, 'keydown').subscribe((event: KeyboardEvent) => {
      if(
        event.code.toLowerCase() === 'keyq' ||
        event.code.toLowerCase() === 'keys' ||
        event.code.toLowerCase() === 'keyz' ||
        event.code.toLowerCase() === 'digit0'
      ) {
        this.skipCode.add(event.code.toLowerCase());
        if(this.skipCode.size === 4) {
          this.clipCompleted(true);
        }
      }
    });
    fromEvent(document, 'keyup').subscribe((event: KeyboardEvent) => {
      if(
        event.code.toLowerCase() === 'keyq' ||
        event.code.toLowerCase() === 'keys' ||
        event.code.toLowerCase() === 'keyz' ||
        event.code.toLowerCase() === 'digit0'
      ) {
        this.skipCode.delete(event.code.toLowerCase());
      }
    });
    from(this.skipCode).subscribe(d => console.log(d));

    this.appService.consume(this.route.snapshot.queryParams.token).subscribe();
  }

  ngAfterViewInit(): void {
    this.route.params.subscribe(({ id, userAvatar }: { id: number, userAvatar: any }) => {
        this.versionNumber = id;
        this.callService.callSettings.userAvatar = userAvatar;
       // this.opinionModal.show(this.puzzleImage);
         this.setInit();

    });
  }

  private replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

  private formatTextFileContent(voiceChangeData, data) {
    const TotalMeetingTime = this.prependTab(this.timeDiff(this.callService.useStarted, moment().add(5000, 'millisecond')));
    let str =
    this.replaceAll(JSON.stringify([...[ {SetupTestingTime: this.prependTab(voiceChangeData), TotalMeetingTime}]]), '[', '');
    str =
    this.replaceAll(str, ']', '');
    str =
    this.replaceAll(str, '{', '');
    str =
    this.replaceAll(str, '}', '');
    str =
    this.replaceAll(str, '"', '');
    str =
    this.replaceAll(str, ',', '\t');
    str =
    this.replaceAll(str, ':', ':\t');

    str =
      this.replaceAll(str, 'SetupTestingTime', '\tSetupTestingTime');
    data.forEach(obj => {
      const UserOpinion = obj.UserOpinion;
      delete obj.UserOpinion;
      let objStr = JSON.stringify(obj);
      objStr =
      this.replaceAll(objStr, ']', '');
      objStr =
      this.replaceAll(objStr, '{', '');
      objStr =
      this.replaceAll(objStr, '}', '');
      objStr =
      this.replaceAll(objStr, '"', '');
      objStr =
      this.replaceAll(objStr, ',', '\t');
      objStr =
      this.replaceAll(objStr, ':', ':\t');
      objStr = objStr + `UserOpinion: ${UserOpinion}`;
      objStr = this.replaceAll(objStr, 'UserOpinion:', '\tUserOpinion:\t');

        str = str + objStr;
    });
    str =  this.replaceAll(str, 'TestId', '\tTestId');
    return str
  }


  private createFile() {

  }

  private download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}

  public clipCompleted(skip) {

    if(skip) {
      this.idol = true;
      this.audioInit = false;
      this.audioClipNum = this.selectedPuzzleClips.length;

      this.opinionModal.show(this.puzzleImage);
    }
    else {
      this.audioClipNum++;
      this.idol = true;

      if(this.selectedPuzzleClips.length > this.audioClipNum) {
        setTimeout(() =>{
          this.idol = false;
          this.audio.nativeElement.load();
          this.audio.nativeElement.play();
        }, this.selectedPuzzleClips[this.audioClipNum - 1].followedDelay * 1000);
      } else if (this.selectedPuzzleClips.length === this.audioClipNum) {
        setTimeout(() => this.opinionModal.show(this.puzzleImage), 5000);
      }
    }
  }

  private setInit() {
    this.idol = true;
    this.audioInit = false;
    this.audioClipNum = 0;

    setTimeout(() => {
      this.idol = false;
      this.audioInit = true;

    }, 5000);
  }

  public makeid(length) {
    let result           = '';
    const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
   }
   return result;
  }

  public opinionReceived(params) {
    this.callService.metaData = {
      ...this.callService.metaData,
      [this.callService.currentPuzzleId]: params,
    };
    const index = this.puzzleIds.indexOf(this.currentPuzzleId);
    if(index < this.puzzleIds.length - 1) {
      this.callService.currentPuzzleId = this.currentPuzzleId = this.puzzleIds[index + 1];
      this.setInit();
    } else {
      const dataArray = [];

      Object.keys(this.msgs).forEach((key) => {
        const metaData = (this.callService.metaData[key] as any);
        dataArray.push({
          TestId: this.prependTab(key),
          UserOpinion: this.prependTab(this.msgs[key]),
          RecordingTime: this.prependTab(this.timeDiff(metaData.recordStartTime, metaData.recordEndTime)),
          AwayFocus:  this.prependTab(this.optimizeTime(metaData.awayFocus)),
          AwayComputer:  this.prependTab(this.optimizeTime(metaData.awayTime)),
          OpinionSubmissionTime:  this.prependTab(this.timeDiff(metaData.promptShowTime, metaData.recordStartTime)),
        })
      });
     // this.createXlFile(dataArray, this.makeid(8));
      // download zip
      const zip = new JSZip();
      const zipFileName = `TestDeliverable_${this.route.snapshot.queryParams.token}`;
      var zipFolder =zip.folder(zipFileName);
      this.recordings.forEach((file: File) => {
        zipFolder.file(file.name, file.arrayBuffer());
      });
      zipFolder.file(this.makeid(8) + '.txt', this.createXlFile(dataArray, this.makeid(8)));
      this.completed = true;
      setTimeout(() => {
        zip.generateAsync({type:"blob"})
        .then((function(content) {
            // see FileSaver.js
            this.downloadableContent = content;
            this.downloadFileName = zipFileName;

            this.saveZipFile();
        }).bind(this));
      }, 5000);
    }

  }

  private createXlFile(json: any[], excelFileName: string) {
    // const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const voiceChangerDuration = this.timeDiff(this.callService.voiceChangerTestStart, this.callService.voiceChangerTestEnd);
    const content = this.formatTextFileContent(voiceChangerDuration, json);

    return new Blob([this.voiceConfig.sign ,...content], {type: 'text/plain'});
  }

  private blobOfXlx(buffer: any, fileName: string): any {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    return data;
    // fileSaver.saveAs(data, fileName + '_export_' + new  Date().getTime() + EXCEL_EXTENSION);
 }

 private timeDiff(a, b): string {
    const diffInMS = b.diff(a, 'milliseconds');
    return moment.duration(diffInMS, "milliseconds").format("ss.SS", {
      trim: false
    });
 }

 private optimizeTime(ms: number): string {
  return moment.duration(ms, "milliseconds").format("ss.SS", {
    trim: false
  });
 }

 public saveZipFile() {
  fileSaver.saveAs(this.downloadableContent, this.downloadFileName);
 };

 public prependTab(text) {
   return text;
 }
}
