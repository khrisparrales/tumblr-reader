import {Component, Input} from '@angular/core';
import {Post} from "../../data.types";

@Component({
    selector: 'post-chat',
    template: `
        <p *ngFor="let message of post.dialogue">{{message.label}} {{message.phrase}}</p>
    `,
    styles: [`
        p{
            margin: 0;
            padding: 1em 0 1em 1em;
        }
        p:nth-child(odd){
            background-color: lightgrey;
        }
    `]
})
export class PostChatComponent{
    @Input('post') post: Post;
}