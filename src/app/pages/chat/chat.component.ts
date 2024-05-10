import { Component, effect, inject, signal } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatService } from '../../supabase/chat.service';
import { Ichat } from '../../interface/chat-response';
import { DatePipe } from '@angular/common';
import { DeleteModelComponent } from '../../layout/delete-model/delete-model.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe, DeleteModelComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {

  private auth = inject(AuthService)
  private chat_service = inject(ChatService)
  private router = inject(Router)
  chatForm!: FormGroup
  private fb = inject(FormBuilder)
  chats = signal<Ichat[]>([]);

  constructor() {
    this.chatForm = this.fb.group({
      chat_message: ['',Validators.required]
    });

    effect(() => {
      this.onListChat()
    })
  }

  async logOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login'])
    }).catch((err) => {
      alert(err.message)
    })
  }

  onSubmit() {
    const formValue = this.chatForm.value.chat_message
    console.log(formValue);
    this.chat_service.chatMessage(formValue).then((res) => {
      console.log(res);
      this.chatForm.reset(); // The typing area get cleared just after the message is being sent to the database.
      this.onListChat()
    })
    .catch((err) => {
      alert(err.message);
    });
  }

  onListChat() {
    this.chat_service
    .listChat()
    .then((res: Ichat[] | null) => {
      console.log(res);
      if (res != null) {
        this.chats.set(res)
      } else {
        console.log("No messages found !!!")
      }
      
    })
    .catch((err) => {
      alert(err.message);
    })
  }

  openDropDown(msg: Ichat) {
    console.log(msg);
    this.chat_service.selectedChats(msg)
  }

}
