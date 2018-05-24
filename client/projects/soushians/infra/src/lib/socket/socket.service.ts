import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MatSnackBar } from '@angular/material';


// import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

interface Message {
    payload: any;
}

@Injectable()
export class SocketService {
    // private socket:any;

    // public initSocket(): void {
    //     this.socket = socketIo(SERVER_URL);
    // }

    // public send(message: String): void {
    //     this.socket.emit('message', message);
    // }

    // public onMessage(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('message', (data:any) => {
    //             observer.next(data);
    //         });
    //     });
    // }

    // public onConnect(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('connect', () => observer.next());
    //     });
    // }

    // public onDisconnect(): Observable<any> {
    //     return new Observable(observer => {
    //         this.socket.on('disconnect', () => observer.next());
    //     });
    // }
}
export var SocketServiceStub = {}