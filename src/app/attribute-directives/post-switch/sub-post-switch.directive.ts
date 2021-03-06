import { ElementRef, Directive } from '@angular/core';
import { HotkeysService } from 'angular2-hotkeys';
import { HtmlItemSwitchService } from '../../services/item-switch/html-item-switch.service';
import { PostSwitch } from './post-switch';

@Directive({ selector: '[subPostSwitch]' })
export class SubPostSwitchDirective extends PostSwitch {
    constructor(el: ElementRef, hotkeysService: HotkeysService,
                htmlItemSwitchService: HtmlItemSwitchService) {
        super(el, hotkeysService, htmlItemSwitchService, 'n', 'm');
    }

    protected getElements(el: ElementRef): HTMLElement[] {
        return this.flatten(this.toArray(el.nativeElement.children).map((element: HTMLElement) => {
            return this.toArray(element.querySelectorAll('*[switch-target]'));
        }));
    }
}
