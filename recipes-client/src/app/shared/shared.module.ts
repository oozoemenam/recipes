import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [],
  imports: [PrimeNgModule],
  exports: [PrimeNgModule],
})
export class SharedModule {}
