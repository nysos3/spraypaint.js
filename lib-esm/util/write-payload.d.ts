import { SpraypaintBase } from "../model";
import { IncludeScopeHash } from "./include-directive";
import { IncludeScope } from "../scope";
import { JsonapiRequestDoc, JsonapiResource } from "../jsonapi-spec";
export declare class WritePayload<T extends SpraypaintBase> {
    model: T;
    jsonapiType: string;
    includeDirective: IncludeScopeHash;
    included: JsonapiResource[];
    idOnly: boolean;
    constructor(model: T, relationships?: IncludeScope, idOnly?: boolean);
    attributes(): import("../model").ModelAttrs<({ [P in Extract<keyof T, string>]: P; } & {
        toString: never;
        valueOf: never;
        charAt: never;
        charCodeAt: never;
        concat: never;
        indexOf: never;
        lastIndexOf: never;
        localeCompare: never;
        match: never;
        replace: never;
        search: never;
        slice: never;
        split: never;
        substring: never;
        toLowerCase: never;
        toLocaleLowerCase: never;
        toUpperCase: never;
        toLocaleUpperCase: never;
        trim: never;
        length: never;
        substr: never;
        codePointAt: never;
        includes: never;
        endsWith: never;
        normalize: never;
        repeat: never;
        startsWith: never;
        anchor: never;
        big: never;
        blink: never;
        bold: never;
        fixed: never;
        fontcolor: never;
        fontsize: never;
        italics: never;
        link: never;
        small: never;
        strike: never;
        sub: never;
        sup: never;
        padStart: never;
        padEnd: never;
        trimLeft: never;
        trimRight: never;
    } & {
        [x: string]: never;
    })[Extract<keyof T, string>], T>;
    removeDeletions(model: T, includeDirective: IncludeScope): void;
    postProcess(): void;
    relationships(): object;
    asJSON(): JsonapiRequestDoc;
    private _isNewAndMarkedForDestruction;
    private _processRelatedModel;
    private _resourceIdentifierFor;
    private _pushInclude;
    private _isIncluded;
    private _eachAttribute;
}
