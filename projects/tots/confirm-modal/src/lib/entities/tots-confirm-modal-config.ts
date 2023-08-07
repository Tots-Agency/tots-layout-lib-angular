import { ThemePalette } from "@angular/material/core";

export class TotsConfirmModalConfig {
    title: string = '';
    caption: string = '';
    buttons: Array<{ title: string, value: any, color?: ThemePalette}> = [
        { title: 'NO', value: false },
        { title: 'YES', value: true, color: 'warn' },
    ];

    constructor(title?: string, caption?: string) {
        this.title = title ?? '';
        this.caption = caption ?? '';
    }
}
