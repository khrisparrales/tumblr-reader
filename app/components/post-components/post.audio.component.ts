import {Component, Input, OnChanges} from '@angular/core';
import {CustomSanitizationService} from "../../shared/custom.sanitization.service";
import {IframeBehaviourDirective} from "../../attribute-directives/iframe.behaviour.directive";

@Component({
    selector: 'post-audio',
    directives: [IframeBehaviourDirective],
    template: `
        <div [innerHTML]="player" iframeBehaviour></div>
    `
})
export class PostAudioComponent implements OnChanges{
    @Input('postPlayer') postPlayer: string;
    private player: any;
    constructor(private sanitizationService: CustomSanitizationService) {}

    ngOnChanges(){
        this.player = this.sanitizationService.sanitize(this.postPlayer);
    }
}