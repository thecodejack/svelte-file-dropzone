import type { FileWithPath } from "file-selector";
import accepts from "./attr-accept";

// Error codes
export const FILE_INVALID_TYPE = "file-invalid-type";
export const FILE_TOO_LARGE = "file-too-large";
export const FILE_TOO_SMALL = "file-too-small";
export const TOO_MANY_FILES = "too-many-files";

export type GenericFileItem = FileWithPath | (DataTransferItem & { kind: 'file' });

export interface ErrorDescription {
  code: string;
  message: string;
};

// File Errors
export const getInvalidTypeRejectionErr = (accept: string | (string[])) => {
  accept = Array.isArray(accept) && accept.length === 1 ? accept[0] : accept;
  const messageSuffix = Array.isArray(accept)
    ? `one of ${accept.join(", ")}`
    : accept;
  return {
    code: FILE_INVALID_TYPE,
    message: `File type must be ${messageSuffix}`,
  } as ErrorDescription;
};

export const getTooLargeRejectionErr = (maxSize: number) => {
  return {
    code: FILE_TOO_LARGE,
    message: `File is larger than ${maxSize} bytes`,
  };
};

export const getTooSmallRejectionErr = (minSize: number) => {
  return {
    code: FILE_TOO_SMALL,
    message: `File is smaller than ${minSize} bytes`,
  };
};

export const TOO_MANY_FILES_REJECTION = {
  code: TOO_MANY_FILES,
  message: "Too many files",
};

// Firefox versions prior to 53 return a bogus MIME type for every file drag, so dragovers with
// that MIME type will always be accepted
export function fileAccepted(file: File, accept: string | (string[])) {
  const accepted =
    file.type === "application/x-moz-file" || accepts(file, accept);
  return {
    accepted,
    acceptError: accepted ? null : getInvalidTypeRejectionErr(accept),
  } as { accepted: true, acceptError: null } | { accepted: false, acceptError: ErrorDescription };
}

export function fileMatchSize(file: File, minSize: number, maxSize: number): 
  { sizeMatch: true, sizeError: null } | { sizeMatch: false, sizeError: ErrorDescription } {
  if (isDefined(file.size)) {
    if (isDefined(minSize) && isDefined(maxSize)) {
      if (file.size > maxSize) return { sizeMatch: false, sizeError: getTooLargeRejectionErr(maxSize) };
      if (file.size < minSize) return { sizeMatch: false, sizeError: getTooSmallRejectionErr(minSize) };
    } else if (isDefined(minSize) && file.size < minSize)
      return { sizeMatch: false, sizeError: getTooSmallRejectionErr(minSize) };
    else if (isDefined(maxSize) && file.size > maxSize)
      return { sizeMatch: false, sizeError: getTooLargeRejectionErr(maxSize) };
  }
  return { sizeMatch: true, sizeError: null };
}

function isDefined(value: any) {
  return value !== undefined && value !== null;
}

export function allFilesAccepted({
  files,
  accept,
  minSize,
  maxSize,
  multiple,
}: {
  files: File[],
  accept: string | string[],
  minSize: number,
  maxSize: number,
  multiple: boolean,
}) {
  if (!multiple && files.length > 1) {
    return false;
  }

  return files.every((file) => {
    const { accepted } = fileAccepted(file, accept);
    const { sizeMatch } = fileMatchSize(file, minSize, maxSize);
    return accepted && sizeMatch;
  });
}

// React's synthetic events has event.isPropagationStopped,
// but to remain compatibility with other libs (Preact) fall back
// to check event.cancelBubble
export function isPropagationStopped(event: Event & { isPropagationStopped?: any }) {
  if (typeof event.isPropagationStopped === "function") {
    return event.isPropagationStopped();
  } else if (typeof event.cancelBubble !== "undefined") {
    return event.cancelBubble;
  }
  return false;
}

export function isEvtWithFiles(event:  Event & { dataTransfer?: DataTransfer | null, target: { files?: any } | null } ) {
  if (!event.dataTransfer) {
    return !!event.target && !!event.target.files;
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/types
  // https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types#file
  return Array.prototype.some.call(
    event.dataTransfer.types,
    (type) => type === "Files" || type === "application/x-moz-file"
  );
}

export function isKindFile(item: any) {
  return typeof item === "object" && item !== null && item.kind === "file";
}

function isIe(userAgent: string) {
  return (
    userAgent.indexOf("MSIE") !== -1 || userAgent.indexOf("Trident/") !== -1
  );
}

function isEdge(userAgent: string) {
  return userAgent.indexOf("Edge/") !== -1;
}

export function isIeOrEdge(userAgent = window.navigator.userAgent) {
  return isIe(userAgent) || isEdge(userAgent);
}

/**
 * This is intended to be used to compose event handlers
 * They are executed in order until one of them calls `event.isPropagationStopped()`.
 * Note that the check is done on the first invoke too,
 * meaning that if propagation was stopped before invoking the fns,
 * no handlers will be executed.
 *
 * @param fns the event hanlder functions
 * @return the event handler to add to an element
 */
export function composeEventHandlers(...fns: Function[]): Function {
  return (event: Event, ...args: any[]) =>
    fns.some((fn) => {
      if (!isPropagationStopped(event) && fn) {
        fn(event, ...args);
      }
      return isPropagationStopped(event);
    });
}
