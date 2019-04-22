import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { tap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-semana2',
  templateUrl: './semana2.component.html',
  styleUrls: ['./semana2.component.scss']
})
export class Semana2Component{

  checkCurrent: boolean = false;

  @ViewChild('cc')cc :ElementRef

  // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) { }

  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
        
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'application') { 
      console.error('unsupported file type :( ')
      return;
    }

    // The storage path
    const path = `Eido/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'Eido student homeworks!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      // The file's download URL
     finalize(() =>{
      this.downloadURL = this.task.downloadURL();
     }),
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          alert(this.cc.nativeElement.value)
          // Update firestore on completion
          this.task.downloadURL()
          this.db.collection('photos').add( { path:snap.downloadURL, size: snap.totalBytes })
        }
      })
    )
    
  }



  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  checkId(cc) {
    let value = this.cc.nativeElement.value.length
    console.log(value);
    if(value < 7){
      alert('Por favor ingresa como mínimo 7 (siete) caracteres  ');
    }
    if (this.cc.nativeElement.value == "" || this.cc.nativeElement.value == null || value < 7) {
      this.checkCurrent = true;
      alert('Por favor ingresa tu número de identificación');
    } else {
      this.checkCurrent = true;
    }
  }

}
