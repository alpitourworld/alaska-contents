import { Component, Prop, h, Method, State } from '@stencil/core';
import { ContentField } from '../../../models/content-models';
import { ContentMode } from '../../../models/component-models';

@Component({
    tag: 'alaska-text-field',
    styleUrl: 'text-field-component.scss',
    shadow: true
})
export class TextFieldComponent {

    @State()
    mode: ContentMode = 'Default';

    @Method()
    async setMode(mode: ContentMode) {
        this.mode = mode;
    }

    @Prop()
    field: ContentField<string>;

    @Method()
    async setField(field: ContentField<string>) {
        this.field = field;
    }

    render() {
        switch (this.mode) {
            case 'Default':
                return <alaska-text-field-default field={this.field}></alaska-text-field-default>;
            case 'Editing':
                return <alaska-text-field-editor field={this.field}></alaska-text-field-editor>;
            default:
                undefined;
        }
    }
}