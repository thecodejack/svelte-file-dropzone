import { SvelteComponentTyped } from "svelte";
import { fromEvent } from "file-selector";
declare const __propDef: {
    props: {
        /**
           * Set accepted file types.
           * See https://github.com/okonet/attr-accept for more information.
           */ accept: string | string[];
        disabled?: boolean | undefined;
        getFilesFromEvent?: typeof fromEvent | undefined;
        maxSize?: number | undefined;
        minSize?: number | undefined;
        multiple?: boolean | undefined;
        preventDropOnDocument?: boolean | undefined;
        noClick?: boolean | undefined;
        noKeyboard?: boolean | undefined;
        noDrag?: boolean | undefined;
        noDragEventsBubbling?: boolean | undefined;
        containerClasses?: string | undefined;
        containerStyles?: string | undefined;
        disableDefaultStyles?: boolean | undefined;
        name?: string | undefined;
    };
    events: {
        dragenter: CustomEvent<any>;
        dragover: CustomEvent<any>;
        dragleave: CustomEvent<any>;
        filedropped: CustomEvent<any>;
        drop: CustomEvent<any>;
        droprejected: CustomEvent<any>;
        dropaccepted: CustomEvent<any>;
        filedialogcancel: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type DropzoneProps = typeof __propDef.props;
export declare type DropzoneEvents = typeof __propDef.events;
export declare type DropzoneSlots = typeof __propDef.slots;
export default class Dropzone extends SvelteComponentTyped<DropzoneProps, DropzoneEvents, DropzoneSlots> {
}
export {};
