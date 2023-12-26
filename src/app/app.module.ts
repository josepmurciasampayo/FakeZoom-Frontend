import { HasValidTokenGuard } from './has-valid-token.guard';
import { CallService } from './call/call.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

import { NgxJdenticonModule } from "ngx-jdenticon";

import en from '@angular/common/locales/en';
import { SetupComponent } from './setup/setup.component';
import { LdRollarComponent } from './ld-rollar/ld-rollar.component';
import { CallComponent } from './call/call.component';
import { OpinionRecordModalComponent } from './opinion-record-modal/opinion-record-modal.component';
import { CompleteComponent } from './complete/complete.component';
import { AppService } from './app.service';
import { ErrorComponent } from './error/error.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    SetupComponent,
    LdRollarComponent,
    CallComponent,
    OpinionRecordModalComponent,
    CompleteComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzSelectModule,
    NzProgressModule,
    NzIconModule,
    NzAvatarModule,
    NzModalModule,
    NzSpinModule,
    NzBadgeModule,
    NzInputModule,
    NzAlertModule,
    NzTagModule,
    NgxJdenticonModule,
    HttpClientModule,
    NzCollapseModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    NzMessageService,
    CallService,
    AppService,
    HasValidTokenGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
