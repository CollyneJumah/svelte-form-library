import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};
export type AutoFormProps = typeof __propDef.props;
export type AutoFormEvents = typeof __propDef.events;
export type AutoFormSlots = typeof __propDef.slots;
export default class AutoForm extends SvelteComponent<AutoFormProps, AutoFormEvents, AutoFormSlots> {
}
export {};
