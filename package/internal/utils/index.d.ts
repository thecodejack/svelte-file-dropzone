export function fileAccepted(file: any, accept: any): (boolean | {
    code: string;
    message: string;
} | null)[];
export function fileMatchSize(file: any, minSize: any, maxSize: any): (boolean | {
    code: string;
    message: string;
})[] | (boolean | null)[];
export function allFilesAccepted({ files, accept, minSize, maxSize, multiple, }: {
    files: any;
    accept: any;
    minSize: any;
    maxSize: any;
    multiple: any;
}): any;
export function isPropagationStopped(event: any): any;
export function isEvtWithFiles(event: any): boolean;
export function isKindFile(item: any): boolean;
export function isIeOrEdge(userAgent?: string): boolean;
/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
export function composeEventHandlers(...fns: Function): Function;
export const FILE_INVALID_TYPE: "file-invalid-type";
export const FILE_TOO_LARGE: "file-too-large";
export const FILE_TOO_SMALL: "file-too-small";
export const TOO_MANY_FILES: "too-many-files";
export function getInvalidTypeRejectionErr(accept: any): {
    code: string;
    message: string;
};
export function getTooLargeRejectionErr(maxSize: any): {
    code: string;
    message: string;
};
export function getTooSmallRejectionErr(minSize: any): {
    code: string;
    message: string;
};
export namespace TOO_MANY_FILES_REJECTION {
    export { TOO_MANY_FILES as code };
    export const message: string;
}
