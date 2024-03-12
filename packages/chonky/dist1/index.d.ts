import { DragObjectWithType } from 'react-dnd';
import * as tsdef from 'tsdef';
import { Nullable, Undefinable, Nilable, MaybePromise, AnyObject, WritableProps } from 'tsdef';
import * as React$1 from 'react';
import React__default, { ElementType, UIEvent, CSSProperties, ReactNode } from 'react';
import * as _reduxjs_toolkit from '@reduxjs/toolkit';
import { ThunkAction, Action, ThunkDispatch, PayloadAction } from '@reduxjs/toolkit';
import { IntlConfig, IntlShape } from 'react-intl';
import * as redux from 'redux';
import * as redux_thunk from 'redux-thunk';
import * as reselect from 'reselect';
import FuzzySearch from 'fuzzy-search';

declare enum ChonkyIconName {
    loading = "loading",
    dropdown = "dropdown",
    placeholder = "placeholder",
    dndDragging = "dndDragging",
    dndCanDrop = "dndCanDrop",
    dndCannotDrop = "dndCannotDrop",
    openFiles = "openFiles",
    openParentFolder = "openParentFolder",
    copy = "copy",
    paste = "paste",
    share = "share",
    search = "search",
    selectAllFiles = "selectAllFiles",
    clearSelection = "clearSelection",
    sortAsc = "sortAsc",
    sortDesc = "sortDesc",
    toggleOn = "toggleOn",
    toggleOff = "toggleOff",
    list = "list",
    compact = "compact",
    smallThumbnail = "smallThumbnail",
    largeThumbnail = "largeThumbnail",
    folder = "folder",
    folderCreate = "folderCreate",
    folderOpen = "folderOpen",
    folderChainSeparator = "folderChainSeparator",
    download = "download",
    upload = "upload",
    trash = "trash",
    fallbackIcon = "fallbackIcon",
    symlink = "symlink",
    hidden = "hidden",
    file = "file",
    license = "license",
    code = "code",
    config = "config",
    model = "model",
    database = "database",
    text = "text",
    archive = "archive",
    image = "image",
    video = "video",
    info = "info",
    key = "key",
    lock = "lock",
    music = "music",
    terminal = "terminal",
    users = "users",
    linux = "linux",
    ubuntu = "ubuntu",
    windows = "windows",
    rust = "rust",
    python = "python",
    nodejs = "nodejs",
    php = "php",
    git = "git",
    adobe = "adobe",
    pdf = "pdf",
    excel = "excel",
    word = "word",
    flash = "flash"
}
interface ChonkyIconProps$1 {
    icon: ChonkyIconName | string;
    spin?: boolean;
    className?: string;
    fixedWidth?: boolean;
    style?: React__default.CSSProperties;
    file?: object | null;
}

interface FileData {
    id: string;
    name: string;
    ext?: string;
    isDir?: boolean;
    isHidden?: boolean;
    isSymlink?: boolean;
    isEncrypted?: boolean;
    openable?: boolean;
    selectable?: boolean;
    draggable?: boolean;
    droppable?: boolean;
    dndOpenable?: boolean;
    size?: number;
    modDate?: Date | string;
    childrenCount?: number;
    color?: string;
    icon?: ChonkyIconName | string | any;
    thumbnailUrl?: string;
    folderChainIcon?: Nullable<ChonkyIconName | string | any>;
    [property: string]: any;
}
declare type FileArray<FT extends FileData = FileData> = Nullable<FT>[];
declare type FileFilter = (file: Nullable<FileData>) => boolean;
declare type FileMap<FT extends FileData = FileData> = {
    [fileId: string]: FT;
};
declare type FileIdTrueMap = {
    [fileId: string]: Undefinable<true>;
};

interface MouseClickFilePayload {
    file: FileData;
    fileDisplayIndex: number;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
    clickType: 'single' | 'double';
}
interface KeyboardClickFilePayload {
    file: FileData;
    fileDisplayIndex: number;
    enterKey: boolean;
    spaceKey: boolean;
    altKey: boolean;
    ctrlKey: boolean;
    shiftKey: boolean;
}
interface StartDragNDropPayload {
    sourceInstanceId: string;
    source: Nullable<FileData>;
    draggedFile: FileData;
    selectedFiles: FileData[];
}
declare type EndDragNDropPayload = StartDragNDropPayload & {
    destination: FileData;
    copy: boolean;
};
declare type MoveFilesPayload = EndDragNDropPayload & {
    files: FileData[];
};
declare type ChangeSelectionPayload = {
    selection: Set<string>;
};
interface OpenFilesPayload {
    targetFile?: FileData;
    files: FileData[];
}
interface OpenFileContextMenuPayload {
    clientX: number;
    clientY: number;
    triggerFileId: Nullable<string>;
}

declare type ChonkyDndFileEntryItem$1 = DragObjectWithType & {
    payload: StartDragNDropPayload;
};
declare const ChonkyDndFileEntryType = "dnd-chonky-file-entry";

declare enum FileViewMode {
    List = "list",
    Compact = "compact",
    Grid = "grid"
}
declare type FileViewConfigList$1 = {
    mode: FileViewMode.List;
    entryHeight: number;
};
declare type FileViewConfigGrid$1 = {
    mode: FileViewMode.Compact | FileViewMode.Grid;
    entryWidth: number;
    entryHeight: number;
};
declare type FileViewConfig$1 = FileViewConfigList$1 | FileViewConfigGrid$1;

interface FileActionGroup {
    name: string;
    fileActionIds: string[];
}
declare type FileActionMenuItem = string | FileActionGroup;

interface ContextMenuConfig {
    triggerFileId: Nullable<string>;
    mouseX: number;
    mouseY: number;
}

declare type OptionMap = {
    [optionId: string]: any;
};

declare type FileSelection = FileIdTrueMap;

declare type FileSortKeySelector = (file: Nullable<FileData>) => any;
declare enum SortOrder {
    ASC = "asc",
    DESC = "desc"
}

declare type ThumbnailGenerator = (file: FileData) => Nilable<string> | Promise<Nilable<string>>;

declare type RootState = {
    instanceId: string;
    externalFileActionHandler: Nullable<GenericFileActionHandler<FileAction>>;
    rawFileActions: FileAction[] | any;
    fileActionsErrorMessages: string[];
    fileActionMap: FileActionMap;
    fileActionIds: string[];
    toolbarItems: FileActionMenuItem[];
    contextMenuItems: FileActionMenuItem[];
    rawFolderChain: Nullable<FileArray> | any;
    folderChainErrorMessages: string[];
    folderChain: FileArray;
    rawFiles: FileArray | any;
    filesErrorMessages: string[];
    fileMap: FileMap;
    fileIds: Nullable<string>[];
    cleanFileIds: string[];
    sortedFileIds: Nullable<string>[];
    hiddenFileIdMap: FileIdTrueMap;
    focusSearchInput: Nullable<() => void>;
    searchString: string;
    searchMode: 'currentFolder';
    selectionMap: FileSelection;
    disableSelection: boolean;
    fileViewConfig: FileViewConfig$1;
    sortActionId: Nullable<string>;
    sortOrder: SortOrder;
    optionMap: OptionMap;
    thumbnailGenerator: Nullable<ThumbnailGenerator>;
    doubleClickDelay: number;
    disableDragAndDrop: boolean;
    clearSelectionOnOutsideClick: boolean;
    lastClick: Nullable<{
        index: number;
        fileId: string;
    }>;
    contextMenuMounted: boolean;
    contextMenuConfig: Nullable<ContextMenuConfig>;
};
declare type ChonkyThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, null, Action<string>>;
declare type ChonkyDispatch = ThunkDispatch<RootState, null, Action<string>>;

interface FileAction {
    /**
     * Unique file action ID. If you set the action ID to one of the built-in Chonky
     * action action IDs, you custom action definition will override the built-in
     * definition.
     */
    id: string;
    /**
     * When set to `true`, the action will only be active (dispatchable) when user
     * selects one or more files. If `fileFilter` is defined, it will be applied to
     * selection before checking if its empty.
     */
    requiresSelection?: boolean;
    /**
     * A predicate that determines whether a file should be included in the selection
     * for this action.
     */
    fileFilter?: FileFilter;
    /**
     * List of hotkeys that should trigger this action, defined using `hotkey-js`
     * notation.
     * @see https://www.npmjs.com/package/hotkeys-js
     */
    hotkeys?: string[] | readonly string[];
    /**
     * When button is defined and `toolbar` or `contextMenu` is set to `true`, a
     * button will be added to the relevant UI component. Clicking on this button
     * will active this action. The appearance of the button will change based on
     * the action definition and the current Chonky state.
     */
    button?: FileActionButton;
    /**
     * When `sortKeySelector` is specified, the action becomes a sorting toggle. When
     * this action is activated, it will sort files using the key selector, toggling
     * between Ascending and Descending orders.
     */
    sortKeySelector?: FileSortKeySelector;
    /**
     * When `fileViewConfig` is specified, triggering this action will apply the
     * provided config to Chonky's file view.
     */
    fileViewConfig?: FileViewConfig$1;
    /**
     * When `option` is specified, the action becomes an option toggle. When the action
     * is activated, the boolean value of the option will be toggled.
     */
    option?: FileActionOption;
    /**
     * When selection transform is defined, activating this action will update the file
     * selection. If the transform function returns `null`, selection will be left
     * untouched.
     */
    selectionTransform?: FileSelectionTransform;
    /**
     * When effect is defined, it will be called right before dispatching the action to
     * the user defined action handler. If the effect function returns a promise, Chonky
     * will wait for the promise to resolve or fail before dispatching the action to the
     * handler. If this function returns `true`, the file action will NOT be dispatched
     * the the handler.
     */
    effect?: FileActionEffect;
    /**
     * When customVisibility is defined, it will change the display state of the file action
     * The function must return the visibility as one of the CustomVisibilityState values:
     *  - Hidden
     *  - Disabled
     *  - Default
     *  - Active
     */
    customVisibility?: () => CustomVisibilityState;
    /**
     * Field used to infer the type of action payload. It is used solely for Typescript
     * type inference and action validation.
     */
    __payloadType?: any;
    /**
     * Field used to infer the type of extra state for this action. It is used solely
     * for Typescript type inference and action validation.
     */
    __extraStateType?: any;
}
interface FileActionButton {
    name: string;
    toolbar?: boolean;
    contextMenu?: boolean;
    group?: string;
    tooltip?: string;
    icon?: ChonkyIconName | string | any;
    iconOnly?: boolean;
}
interface FileActionOption {
    id: string;
    defaultValue: boolean;
}
declare type FileSelectionTransform = (data: {
    prevSelection: Set<string>;
    fileIds: ReadonlyArray<string>;
    fileMap: Readonly<FileMap>;
    hiddenFileIds: Set<string>;
}) => Nullable<Set<string>>;
declare type FileActionEffect<Action extends FileAction = any> = (data: {
    action: Action;
    payload: Action['__payloadType'];
    state: FileActionState<{}>;
    reduxDispatch: ChonkyDispatch;
    getReduxState: () => RootState;
}) => MaybePromise<undefined | boolean | void>;
declare type FileActionMap = {
    [actonId: string]: FileAction;
};
declare enum CustomVisibilityState {
    Hidden = 0,
    Disabled = 1,
    Default = 2,
    Active = 3
}

declare type FileActionData<Action extends FileAction> = {
    id: Action['id'];
    action: Action;
    payload: Action['__payloadType'];
    state: FileActionState<Action['__extraStateType']>;
};
declare type FileActionState<ExtraState extends object = AnyObject> = {
    /**
     * The ID of the Chonky instance that dispatched this action. This is useful if
     * you're reusing the same action handler for multiple Chonky instances.
     */
    instanceId: string;
    /**
     * All selected files at the time the action was requested. Note that this does not
     * reflect the changes applied by action's selection transform, if one is defined.
     */
    selectedFiles: FileData[];
    /**
     * Selected files filtered using actions file filter. If not file filter is defined,
     * this is the same as `selectedFiles`. Note that this does not reflect the changes
     * applied by action's selection transform, if one is defined.
     */
    selectedFilesForAction: FileData[];
    /**
     * If this action was requested using the file context menu, this field will hold
     * the file that user right-clicked on to open the menu. If this action was not
     * triggered using the context menu or right click was not on any file, this will be
     * `null`.
     */
    contextMenuTriggerFile: Nullable<FileData>;
} & ExtraState;
declare type MapFileActionsToData<U> = U extends FileAction ? FileActionData<U> : never;
declare type GenericFileActionHandler<T> = (data: MapFileActionsToData<T>) => void | Promise<void>;

/**
 * We have option IDs in a separate file to avoid circular deps...
 */
declare const OptionIds: {
    ShowHiddenFiles: string;
    ShowFoldersFirst: string;
    DarkMode: string;
};

declare const ChonkyActions: {
    CopyFiles: tsdef.WritableProps<{
        readonly id: "copy_files";
        readonly requiresSelection: true;
        readonly hotkeys: readonly ["ctrl+c"];
        readonly button: {
            readonly name: "Copy selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.copy;
        };
    }>;
    CreateFolder: tsdef.WritableProps<{
        readonly id: "create_folder";
        readonly button: {
            readonly name: "Create folder";
            readonly toolbar: true;
            readonly tooltip: "Create a folder";
            readonly icon: ChonkyIconName.folderCreate;
        };
    }>;
    UploadFiles: tsdef.WritableProps<{
        readonly id: "upload_files";
        readonly button: {
            readonly name: "Upload files";
            readonly toolbar: true;
            readonly tooltip: "Upload files";
            readonly icon: ChonkyIconName.upload;
        };
    }>;
    DownloadFiles: tsdef.WritableProps<{
        readonly id: "download_files";
        readonly requiresSelection: true;
        readonly button: {
            readonly name: "Download files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.download;
        };
    }>;
    DeleteFiles: tsdef.WritableProps<{
        readonly id: "delete_files";
        readonly requiresSelection: true;
        readonly hotkeys: readonly ["delete"];
        readonly button: {
            readonly name: "Delete files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.trash;
        };
    }>;
    OpenSelection: tsdef.WritableProps<{
        readonly id: "open_selection";
        readonly hotkeys: readonly ["enter"];
        readonly requiresSelection: true;
        readonly fileFilter: typeof FileHelper.isOpenable;
        readonly button: {
            readonly name: "Open selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.openFiles;
        };
    }>;
    SelectAllFiles: tsdef.WritableProps<{
        readonly id: "select_all_files";
        readonly hotkeys: readonly ["ctrl+a"];
        readonly button: {
            readonly name: "Select all files";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.selectAllFiles;
        };
        readonly selectionTransform: FileSelectionTransform;
    }>;
    ClearSelection: tsdef.WritableProps<{
        readonly id: "clear_selection";
        readonly hotkeys: readonly ["escape"];
        readonly button: {
            readonly name: "Clear selection";
            readonly toolbar: true;
            readonly contextMenu: true;
            readonly group: "Actions";
            readonly icon: ChonkyIconName.clearSelection;
        };
        readonly selectionTransform: FileSelectionTransform;
    }>;
    EnableListView: tsdef.WritableProps<{
        readonly id: "enable_list_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.List;
            readonly entryHeight: 30;
        };
        readonly button: {
            readonly name: "Switch to List view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.list;
            readonly iconOnly: true;
        };
    }>;
    EnableCompactView: tsdef.WritableProps<{
        readonly id: "enable_compact_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.Compact;
            readonly entryHeight: 40;
            readonly entryWidth: 220;
        };
        readonly button: {
            readonly name: "Switch to Compact view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.compact;
            readonly iconOnly: true;
        };
    }>;
    EnableGridView: tsdef.WritableProps<{
        readonly id: "enable_grid_view";
        readonly fileViewConfig: {
            readonly mode: FileViewMode.Grid;
            readonly entryWidth: 165;
            readonly entryHeight: 130;
        };
        readonly button: {
            readonly name: "Switch to Grid view";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.smallThumbnail;
            readonly iconOnly: true;
        };
    }>;
    SortFilesByName: tsdef.WritableProps<{
        readonly id: "sort_files_by_name";
        readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => string | undefined;
        readonly button: {
            readonly name: "Sort by name";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    SortFilesBySize: tsdef.WritableProps<{
        readonly id: "sort_files_by_size";
        readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => number | undefined;
        readonly button: {
            readonly name: "Sort by size";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    SortFilesByDate: tsdef.WritableProps<{
        readonly id: "sort_files_by_date";
        readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => string | Date | undefined;
        readonly button: {
            readonly name: "Sort by date";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    ToggleHiddenFiles: tsdef.WritableProps<{
        readonly id: "toggle_hidden_files";
        readonly hotkeys: readonly ["ctrl+h"];
        readonly option: {
            readonly id: string;
            readonly defaultValue: true;
        };
        readonly button: {
            readonly name: "Show hidden files";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    ToggleShowFoldersFirst: tsdef.WritableProps<{
        readonly id: "toggle_show_folders_first";
        readonly option: {
            readonly id: string;
            readonly defaultValue: true;
        };
        readonly button: {
            readonly name: "Show folders first";
            readonly toolbar: true;
            readonly group: "Options";
        };
    }>;
    FocusSearchInput: tsdef.WritableProps<{
        readonly id: "focus_search_input";
        readonly hotkeys: readonly ["ctrl+f"];
    }>;
    ToggleDarkMode: tsdef.WritableProps<{
        readonly id: "enable_dark_mode";
        readonly option: {
            readonly id: string;
            readonly defaultValue: false;
        };
        readonly button: {
            readonly name: "Enable dark mode";
            readonly toolbar: true;
            readonly icon: ChonkyIconName.list;
            readonly iconOnly: true;
        };
    }>;
    MouseClickFile: tsdef.WritableProps<{
        readonly id: "mouse_click_file";
        readonly __payloadType: MouseClickFilePayload;
    }>;
    KeyboardClickFile: tsdef.WritableProps<{
        readonly id: "keyboard_click_file";
        readonly __payloadType: KeyboardClickFilePayload;
    }>;
    StartDragNDrop: tsdef.WritableProps<{
        readonly id: "start_drag_n_drop";
        readonly __payloadType: StartDragNDropPayload;
    }>;
    EndDragNDrop: tsdef.WritableProps<{
        readonly id: "end_drag_n_drop";
        readonly __payloadType: EndDragNDropPayload;
    }>;
    MoveFiles: tsdef.WritableProps<{
        readonly id: "move_files";
        readonly __payloadType: MoveFilesPayload;
    }>;
    ChangeSelection: tsdef.WritableProps<{
        readonly id: "change_selection";
        readonly __payloadType: ChangeSelectionPayload;
    }>;
    OpenFiles: tsdef.WritableProps<{
        readonly id: "open_files";
        readonly __payloadType: OpenFilesPayload;
    }>;
    OpenParentFolder: tsdef.WritableProps<{
        readonly id: "open_parent_folder";
        readonly hotkeys: readonly ["backspace"];
        readonly button: {
            readonly name: "Go up a directory";
            readonly toolbar: true;
            readonly contextMenu: false;
            readonly icon: ChonkyIconName.openParentFolder;
            readonly iconOnly: true;
        };
    }>;
    OpenFileContextMenu: tsdef.WritableProps<{
        readonly id: "open_file_context_menu";
        readonly __payloadType: OpenFileContextMenuPayload;
    }>;
};
declare const DefaultFileActions: (tsdef.WritableProps<{
    readonly id: "open_selection";
    readonly hotkeys: readonly ["enter"];
    readonly requiresSelection: true;
    readonly fileFilter: typeof FileHelper.isOpenable;
    readonly button: {
        readonly name: "Open selection";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.openFiles;
    };
}> | tsdef.WritableProps<{
    readonly id: "select_all_files";
    readonly hotkeys: readonly ["ctrl+a"];
    readonly button: {
        readonly name: "Select all files";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.selectAllFiles;
    };
    readonly selectionTransform: FileSelectionTransform;
}> | tsdef.WritableProps<{
    readonly id: "clear_selection";
    readonly hotkeys: readonly ["escape"];
    readonly button: {
        readonly name: "Clear selection";
        readonly toolbar: true;
        readonly contextMenu: true;
        readonly group: "Actions";
        readonly icon: ChonkyIconName.clearSelection;
    };
    readonly selectionTransform: FileSelectionTransform;
}> | tsdef.WritableProps<{
    readonly id: "enable_list_view";
    readonly fileViewConfig: {
        readonly mode: FileViewMode.List;
        readonly entryHeight: 30;
    };
    readonly button: {
        readonly name: "Switch to List view";
        readonly toolbar: true;
        readonly icon: ChonkyIconName.list;
        readonly iconOnly: true;
    };
}> | tsdef.WritableProps<{
    readonly id: "enable_grid_view";
    readonly fileViewConfig: {
        readonly mode: FileViewMode.Grid;
        readonly entryWidth: 165;
        readonly entryHeight: 130;
    };
    readonly button: {
        readonly name: "Switch to Grid view";
        readonly toolbar: true;
        readonly icon: ChonkyIconName.smallThumbnail;
        readonly iconOnly: true;
    };
}> | tsdef.WritableProps<{
    readonly id: "sort_files_by_name";
    readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => string | undefined;
    readonly button: {
        readonly name: "Sort by name";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | tsdef.WritableProps<{
    readonly id: "sort_files_by_size";
    readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => number | undefined;
    readonly button: {
        readonly name: "Sort by size";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | tsdef.WritableProps<{
    readonly id: "sort_files_by_date";
    readonly sortKeySelector: (file: tsdef.Nullable<FileData>) => string | Date | undefined;
    readonly button: {
        readonly name: "Sort by date";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | tsdef.WritableProps<{
    readonly id: "toggle_hidden_files";
    readonly hotkeys: readonly ["ctrl+h"];
    readonly option: {
        readonly id: string;
        readonly defaultValue: true;
    };
    readonly button: {
        readonly name: "Show hidden files";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | tsdef.WritableProps<{
    readonly id: "toggle_show_folders_first";
    readonly option: {
        readonly id: string;
        readonly defaultValue: true;
    };
    readonly button: {
        readonly name: "Show folders first";
        readonly toolbar: true;
        readonly group: "Options";
    };
}> | tsdef.WritableProps<{
    readonly id: "focus_search_input";
    readonly hotkeys: readonly ["ctrl+f"];
}>)[];

interface I18nConfig extends Partial<IntlConfig> {
    formatters?: Partial<ChonkyFormatters>;
}
interface ChonkyFormatters {
    formatFileModDate: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
    formatFileSize: (intl: IntlShape, file: Nullable<FileData>) => Nullable<string>;
}

/**
 * File browser methods exposed to developers via the `FileBrowser` ref.
 */
interface FileBrowserHandle {
    /**
     * Method used to get the current file selection.
     * @returns An ES6 Set containing the IDs of the selected files.
     */
    getFileSelection(): Set<string>;
    /**
     * Method used to set the current file selection.
     * @param selection An ES6 Set containing the IDs of files that should be selected.
     * IDs of files that are not present in the `files` array will be ignored.
     * @param [reset=true] Whether to clear the current selection before applying
     * the new selection. When set to `false`, the new selection will be merged with
     * the current selection. Set to `true` by default.
     */
    setFileSelection(selection: Set<string>, reset?: boolean): void;
    /**
     * Method used to programatically trigger file actions in Chonky.
     * @param action A file action definition object
     * @param payload The payload expected by the action. If action does not expect
     * a payload, this should be set to `undefined`.
     */
    requestFileAction<Action extends FileAction>(action: Action, payload: Action['__payloadType']): Promise<void>;
}
declare type ChonkyActionUnion = typeof ChonkyActions[keyof typeof ChonkyActions];
/**
 * Props for the `FileBrowser` component that is exposed to library users.
 */
interface FileBrowserProps {
    /**
     * An ID used to identify this particular Chonky instance. Useful when there are
     * multiple Chonky instances on the same page, and they need to interact with
     * each other. When no instance ID is provided, a random hash is used in its place.
     * Note that instance ID should remain static. Any changes to "instanceId" after
     * initial FileBrowser mount will be ignored.
     */
    instanceId?: string;
    /**
     * List of files that will be displayed in the main container. The provided value
     * **must** be an array, where each element is either `null` or an object that
     * satisfies the `FileData` type. If an element is `null`, a loading placeholder
     * will be displayed in its place.
     */
    files: FileArray;
    /**
     * The current folder hierarchy. This should be an array of `files`, every
     * element should either be `null` or an object of `FileData` type. The first
     * element should represent the top-level directory, and the last element
     * should be the current folder.
     */
    folderChain?: Nullable<FileArray>;
    /**
     * An array of file actions that will be available to your users at runtime.
     * These actions will be activated in addition to default actions. If you don't
     * want default file actions to be enabled, see `disableDefaultFileActions` prop.
     */
    fileActions?: Nullable<FileAction[]>;
    /**
     * An action handler that will be called every time a file action is dispatched.
     */
    onFileAction?: Nullable<GenericFileActionHandler<ChonkyActionUnion>>;
    /**
     * The function that determines the thumbnail image URL for a file. It gets a file
     * object as the input, and should return a `string` or `null`. It can also
     * return a promise that resolves into a `string` or `null`.
     */
    thumbnailGenerator?: Nullable<ThumbnailGenerator>;
    /**
     * Maximum delay between the two clicks in a double click, in milliseconds.
     */
    doubleClickDelay?: number;
    /**
     * The flag that completely disables file selection functionality. If any handlers
     * depend on file selections, their input will always have empty file selections.
     */
    disableSelection?: boolean;
    /**
     * The value that determines what default file actions will be disabled. You can
     * set this to `true` to disable all default file actions, or explicitly pass an
     * array of default file action IDs that you want to disable.
     */
    disableDefaultFileActions?: boolean | string[];
    /**
     * The flag that completely disables drag & drop functionality for this instance
     * of Chonky.
     */
    disableDragAndDrop?: boolean;
    /**
     * The flag that is used to disable `react-dnd` context provider inside of this
     * instance of Chonky, while keeping other drag & drop functionality in tact.
     * Useful when you want to provide your own `react-dnd` context.
     */
    disableDragAndDropProvider?: boolean;
    /**
     * The ID of the sort-selector-setting action to activate by default. This field can
     * be used to specify the default sort order in Chonky.
     */
    defaultSortActionId?: Nullable<string>;
    /**
     * The ID of the file-view-setting action to activate by default. This field can
     * be used to specify the default file view in Chonky.
     */
    defaultFileViewActionId?: string;
    /**
     * Determines whether the file selection should be cleared when user clicks
     * anywhere outside of Chonky. By default, selection is cleared on outside click
     * unless the click target is a button.
     */
    clearSelectionOnOutsideClick?: boolean;
    /**
     * Icon component that will be used in this instance of Chonky. Note that this
     * will only affect the current instance of Chonky. If you wanna set the icon
     * component for all Chonky instances, use the global config.
     */
    iconComponent?: ElementType<ChonkyIconProps$1>;
    /**
     * Enables dark mode theme.
     */
    darkMode?: boolean;
    /**
     * Configuration for the `react-intl` i18n library. Chonky provides some default
     * values, e.g. `locale` and `defaultLocale` are set to `en`. Any settings you
     * specify here will override the defaults.
     * @see https://formatjs.io/docs/react-intl/components
     */
    i18n?: I18nConfig;
    /**
     * Define listener for on scroll events on file lists
     */
    onScroll?: (e: UIEvent<HTMLDivElement>) => void;
    /**
     * add style on file list
     */
    fileListStyle?: CSSProperties & {
        gridHeight: any;
    };
    /**
     * React element
     */
    activeStar: React.ReactElement<any, any>;
    /**
     * React element
     */
    deactivateStar: React.ReactElement<any, any>;
    /**
     * React element
     */
    tags: React.ReactElement<any, any>;
}

declare const FileBrowser: React__default.ForwardRefExoticComponent<FileBrowserProps & {
    children?: ReactNode;
} & React__default.RefAttributes<FileBrowserHandle>>;

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FileNavbarProps {
}
declare const FileNavbar: React__default.FC<FileNavbarProps>;

interface FileToolbarProps {
}
declare const FileToolbar: React__default.FC<FileToolbarProps>;

interface FileListProps {
    onScroll?: (e: UIEvent<HTMLDivElement>) => void;
    fileListStyle?: CSSProperties & {
        gridHeight: any;
    };
    activeStar: React__default.ReactElement<any, any>;
    deactivateStar: React__default.ReactElement<any, any>;
    tags: React__default.ReactElement<any, any>;
}
declare const FileList: React__default.FC<FileListProps>;

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

interface FileContextMenuProps {
}
declare const FileContextMenu: React__default.FC<FileContextMenuProps>;

/**
 * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>
 * @copyright 2020
 * @license MIT
 */

declare const FullFileBrowser: React__default.MemoExoticComponent<React__default.ForwardRefExoticComponent<FileBrowserProps & React__default.RefAttributes<FileBrowserHandle>>>;

declare const defineFileAction: <Action extends FileAction>(action: Action, effect?: FileActionEffect<FileAction> | undefined) => WritableProps<Action>;

declare class FileHelper {
    static isDirectory(file: Nullable<FileData>): file is FileData;
    static isHidden(file: Nullable<FileData>): file is FileData;
    static isSymlink(file: Nullable<FileData>): file is FileData;
    static isEncrypted(file: Nullable<FileData>): file is FileData;
    static isClickable(file: Nullable<FileData>): file is FileData;
    static isOpenable(file: Nullable<FileData>): file is FileData;
    static isSelectable(file: Nullable<FileData>): file is FileData;
    static isDraggable(file: Nullable<FileData>): file is FileData;
    static isDroppable(file: Nullable<FileData>): file is FileData;
    static isDndOpenable(file: Nullable<FileData>): file is FileData;
    static getModDate(file: Nullable<FileData>): Nullable<Date>;
    static parseDate(maybeDate: Date | string | any): Nullable<Date>;
    static getChildrenCount(file: Nullable<FileData>): Nullable<number>;
}

declare enum I18nNamespace {
    Toolbar = "toolbar",
    FileList = "fileList",
    FileEntry = "fileEntry",
    FileContextMenu = "contextMenu",
    FileActions = "actions",
    FileActionGroups = "actionGroups"
}
declare const getI18nId: (namespace: I18nNamespace, stringId: string) => string;
declare const getActionI18nId: (actionId: string, stringId: string) => string;
declare const defaultFormatters: ChonkyFormatters;

declare type ChonkyConfig = Pick<FileBrowserProps, 'fileActions' | 'onFileAction' | 'thumbnailGenerator' | 'doubleClickDelay' | 'disableSelection' | 'disableDefaultFileActions' | 'disableDragAndDrop' | 'disableDragAndDropProvider' | 'defaultSortActionId' | 'defaultFileViewActionId' | 'clearSelectionOnOutsideClick' | 'iconComponent' | 'darkMode' | 'i18n'>;
declare const setChonkyDefaults: (config: Partial<ChonkyConfig>) => void;

interface CustomFileData extends FileData {
    parentId?: string;
    childrenIds?: string[];
}
interface CustomFileMap<FT extends CustomFileData> {
    [fileId: string]: FT;
}
interface FileMapParams<FT extends CustomFileData> {
    baseFileMap: CustomFileMap<FT>;
    initialFolderId: string;
}
declare const useFolderChain: <FT extends CustomFileData>(fileMap: CustomFileMap<FT>, currentFolderId: string) => FileArray<FT>;
declare const useFiles: <FT extends CustomFileData>(fileMap: CustomFileMap<FT>, currentFolderId: string) => FileArray<FT>;
declare const useFileMapMethods: <FT extends CustomFileData>(baseFileMap: CustomFileMap<FT>, initialFolderId: string) => {
    fileMap: CustomFileMap<FT>;
    currentFolderId: string;
    methods: {
        setFileMap: React$1.Dispatch<React$1.SetStateAction<CustomFileMap<FT>>>;
        setCurrentFolderId: React$1.Dispatch<React$1.SetStateAction<string>>;
        resetFileMap: () => void;
        moveFiles: (files: FT[], source: FT, destination: FT) => void;
    };
};
declare type FileMethods = ReturnType<typeof useFileMapMethods>['methods'];
declare const useFileActionHandler: (methods: FileMethods) => (data: FileActionData<FileAction>) => void;
declare const useFileMap: <FT extends CustomFileData = CustomFileData>({ baseFileMap, initialFolderId, }: FileMapParams<FT>) => {
    data: {
        fileMap: CustomFileMap<FT>;
        currentFolderId: string;
        folderChain: FileArray<FT>;
        files: FileArray<FT>;
    };
    methods: {
        setFileMap: React$1.Dispatch<React$1.SetStateAction<CustomFileMap<FT>>>;
        setCurrentFolderId: React$1.Dispatch<React$1.SetStateAction<string>>;
        resetFileMap: () => void;
        moveFiles: (files: FT[], source: FT, destination: FT) => void;
    };
    fileActionHandler: (data: FileActionData<FileAction>) => void;
};

type fileMap_CustomFileData = CustomFileData;
type fileMap_CustomFileMap<FT extends CustomFileData> = CustomFileMap<FT>;
type fileMap_FileMapParams<FT extends CustomFileData> = FileMapParams<FT>;
declare const fileMap_useFolderChain: typeof useFolderChain;
declare const fileMap_useFiles: typeof useFiles;
declare const fileMap_useFileMapMethods: typeof useFileMapMethods;
type fileMap_FileMethods = FileMethods;
declare const fileMap_useFileActionHandler: typeof useFileActionHandler;
declare const fileMap_useFileMap: typeof useFileMap;
declare namespace fileMap {
  export {
    fileMap_CustomFileData as CustomFileData,
    fileMap_CustomFileMap as CustomFileMap,
    fileMap_FileMapParams as FileMapParams,
    fileMap_useFolderChain as useFolderChain,
    fileMap_useFiles as useFiles,
    fileMap_useFileMapMethods as useFileMapMethods,
    fileMap_FileMethods as FileMethods,
    fileMap_useFileActionHandler as useFileActionHandler,
    fileMap_useFileMap as useFileMap,
  };
}

declare const reduxActions: _reduxjs_toolkit.CaseReducerActions<{
    setExternalFileActionHandler(state: RootState, action: PayloadAction<Nilable<GenericFileActionHandler<FileAction>>>): void;
    setRawFileActions(state: RootState, action: PayloadAction<FileAction[] | any>): void;
    setFileActionsErrorMessages(state: RootState, action: PayloadAction<string[]>): void;
    setFileActions(state: RootState, action: PayloadAction<FileAction[]>): void;
    updateFileActionMenuItems(state: RootState, action: PayloadAction<[FileActionMenuItem[], FileActionMenuItem[]]>): void;
    setRawFolderChain(state: RootState, action: PayloadAction<FileArray | any>): void;
    setRawFiles(state: RootState, action: PayloadAction<FileArray | any>): void;
    setSortedFileIds(state: RootState, action: PayloadAction<Nullable<string>[]>): void;
    setHiddenFileIds(state: RootState, action: PayloadAction<FileIdTrueMap>): void;
    setFocusSearchInput(state: RootState, action: PayloadAction<Nullable<() => void>>): void;
    setSearchString(state: RootState, action: PayloadAction<string>): void;
    selectAllFiles(state: RootState): void;
    selectFiles(state: RootState, action: PayloadAction<{
        fileIds: string[];
        reset: boolean;
    }>): void;
    toggleSelection(state: RootState, action: PayloadAction<{
        fileId: string;
        exclusive: boolean;
    }>): void;
    clearSelection(state: RootState): void;
    setSelectionDisabled(state: RootState, action: PayloadAction<boolean>): void;
    setFileViewConfig(state: RootState, action: PayloadAction<FileViewConfig$1>): void;
    setSort(state: RootState, action: PayloadAction<{
        actionId: string;
        order: SortOrder;
    }>): void;
    setOptionDefaults(state: RootState, action: PayloadAction<OptionMap>): void;
    toggleOption(state: RootState, action: PayloadAction<string>): void;
    setThumbnailGenerator(state: RootState, action: PayloadAction<Nullable<ThumbnailGenerator>>): void;
    setDoubleClickDelay(state: RootState, action: PayloadAction<number>): void;
    setDisableDragAndDrop(state: RootState, action: PayloadAction<boolean>): void;
    setClearSelectionOnOutsideClick(state: RootState, action: PayloadAction<boolean>): void;
    setLastClickIndex(state: RootState, action: PayloadAction<Nullable<{
        index: number;
        fileId: string;
    }>>): void;
    setContextMenuMounted(state: RootState, action: PayloadAction<boolean>): void;
    showContextMenu(state: RootState, action: PayloadAction<ContextMenuConfig>): void;
    hideContextMenu(state: RootState): void;
}>;
declare const rootReducer: redux.Reducer<RootState, redux.AnyAction>;

declare const useChonkyStore: (chonkyInstanceId: string) => _reduxjs_toolkit.EnhancedStore<RootState, redux.AnyAction, _reduxjs_toolkit.MiddlewareArray<redux_thunk.ThunkMiddleware<RootState, redux.AnyAction, null> | redux_thunk.ThunkMiddleware<RootState, redux.AnyAction, undefined> | redux.Middleware<{}, RootState, redux.Dispatch<redux.AnyAction>>>>;
/**
 * Hook that can be used with parametrized selectors.
 */
declare const useParamSelector: <Args extends any[], Value>(parametrizedSelector: (...args: Args) => (state: RootState) => Value, ...selectorParams: Args) => Value;
/**
 * DTE - DispatchThunkEffect. This method is used to decrease code duplication in
 * main Chonky method.
 */
declare const useDTE: <Args extends any[]>(actionCreator: (...args: Args) => any, ...selectorParams: Args) => void;
declare const usePropReduxUpdate: <Payload extends unknown>(actionCreator: (payload: Payload) => any, payload: Payload) => void;

declare const selectInstanceId: (state: RootState) => string;
declare const selectExternalFileActionHandler: (state: RootState) => Nullable<GenericFileActionHandler<FileAction>>;
declare const selectFileActionMap: (state: RootState) => FileActionMap;
declare const selectFileActionIds: (state: RootState) => string[];
declare const selectFileActionData: (fileActionId: string) => (state: RootState) => FileAction;
declare const selectToolbarItems: (state: RootState) => FileActionMenuItem[];
declare const selectContextMenuItems: (state: RootState) => FileActionMenuItem[];
declare const selectFolderChain: (state: RootState) => FileArray<FileData>;
declare const selectCurrentFolder: (state: RootState) => Nullable<FileData>;
declare const selectParentFolder: (state: RootState) => Nullable<FileData>;
declare const selectRawFiles: (state: RootState) => any;
declare const selectFileMap: (state: RootState) => FileMap<FileData>;
declare const selectCleanFileIds: (state: RootState) => string[];
declare const selectFileData: (fileId: Nullable<string>) => (state: RootState) => FileData | null;
declare const selectHiddenFileIdMap: (state: RootState) => FileIdTrueMap;
declare const selectHiddenFileCount: (state: RootState) => number;
declare const selectFocusSearchInput: (state: RootState) => Nullable<() => void>;
declare const selectSearchString: (state: RootState) => string;
declare const selectSelectionMap: (state: RootState) => FileIdTrueMap;
declare const selectSelectedFileIds: (state: RootState) => string[];
declare const selectSelectionSize: (state: RootState) => number;
declare const selectIsFileSelected: (fileId: Nullable<string>) => (state: RootState) => boolean;
declare const selectSelectedFiles: (state: RootState) => FileData[];
declare const selectSelectedFilesForAction: (fileActionId: string) => (state: RootState) => FileData[] | undefined;
declare const selectSelectedFilesForActionCount: (fileActionId: string) => (state: RootState) => number | undefined;
declare const selectDisableSelection: (state: RootState) => boolean;
declare const selectFileViewConfig: (state: RootState) => FileViewConfig$1;
declare const selectSortActionId: (state: RootState) => Nullable<string>;
declare const selectSortOrder: (state: RootState) => SortOrder;
declare const selectOptionMap: (state: RootState) => OptionMap;
declare const selectOptionValue: (optionId: string) => (state: RootState) => any;
declare const selectThumbnailGenerator: (state: RootState) => Nullable<ThumbnailGenerator>;
declare const selectDoubleClickDelay: (state: RootState) => number;
declare const selectIsDnDDisabled: (state: RootState) => boolean;
declare const selectClearSelectionOnOutsideClick: (state: RootState) => boolean;
declare const selectContextMenuMounted: (state: RootState) => boolean;
declare const selectContextMenuConfig: (state: RootState) => Nullable<ContextMenuConfig>;
declare const selectContextMenuTriggerFile: (state: RootState) => FileData | null;
declare const selectors: {
    getFileActionMap: (state: RootState) => FileActionMap;
    getOptionMap: (state: RootState) => OptionMap;
    getFileMap: (state: RootState) => FileMap<FileData>;
    getFileIds: (state: RootState) => Nullable<string>[];
    getCleanFileIds: (state: RootState) => string[];
    getSortActionId: (state: RootState) => Nullable<string>;
    getSortOrder: (state: RootState) => SortOrder;
    getSearchString: (state: RootState) => string;
    _getLastClick: (state: RootState) => Nullable<{
        index: number;
        fileId: string;
    }>;
    getSortedFileIds: reselect.OutputSelector<RootState, Nullable<string>[], (res1: Nullable<string>[], res2: SortOrder, res3: FileArray<FileData>, res4: FileAction | null, res5: any) => Nullable<string>[]>;
    getSearcher: reselect.OutputSelector<RootState, FuzzySearch<FileData>, (res: FileArray<FileData>) => FuzzySearch<FileData>>;
    getSearchFilteredFileIds: reselect.OutputSelector<RootState, string[], (res1: string[], res2: string, res3: FuzzySearch<FileData>) => string[]>;
    getHiddenFileIdMap: reselect.OutputSelector<RootState, any, (res1: string[], res2: FileArray<FileData>, res3: any) => any>;
    getDisplayFileIds: reselect.OutputSelector<RootState, Nullable<string>[], (res1: Nullable<string>[], res2: any) => Nullable<string>[]>;
    getLastClickIndex: reselect.OutputSelector<RootState, number | null, (res1: Nullable<{
        index: number;
        fileId: string;
    }>, res2: Nullable<string>[]) => number | null>;
    makeGetAction: (fileActionSelector: (state: RootState) => Nullable<string>) => reselect.OutputSelector<RootState, FileAction | null, (res1: FileActionMap, res2: Nullable<string>) => FileAction | null>;
    makeGetOptionValue: (optionId: string, defaultValue?: any) => reselect.OutputSelector<RootState, any, (res: OptionMap) => any>;
    makeGetFiles: (fileIdsSelector: (state: RootState) => Nullable<string>[]) => reselect.OutputSelector<RootState, FileArray<FileData>, (res1: FileMap<FileData>, res2: Nullable<string>[]) => FileArray<FileData>>;
};
declare const getFileData: (state: RootState, fileId: Nullable<string>) => FileData | null;
declare const getIsFileSelected: (state: RootState, file: FileData) => boolean;
declare const getSelectedFiles: (state: RootState, ...filters: Nilable<FileFilter>[]) => FileData[];
declare const getSelectedFilesForAction: (state: RootState, fileActionId: string) => FileData[] | undefined;

/**
 * Thunk that dispatches actions to the external (user-provided) action handler.
 */
declare const thunkDispatchFileAction: (data: FileActionData<FileAction>) => ChonkyThunk;
/**
 * Thunk that is used by internal components (and potentially the user) to "request"
 * actions. When action is requested, Chonky "prepares" the action data by extracting it
 * from Redux state. Once action data is ready, Chonky executes some side effect and/or
 * dispatches the action to the external action handler.
 */
declare const thunkRequestFileAction: <Action extends FileAction>(action: Action, payload: Action["__payloadType"]) => ChonkyThunk;

declare type ChonkyIconProps = ChonkyIconProps$1;

declare type FileViewConfig = FileViewConfig$1;
declare type FileViewConfigGrid = FileViewConfigGrid$1;
declare type FileViewConfigList = FileViewConfigList$1;

declare type ChonkyDndFileEntryItem = ChonkyDndFileEntryItem$1;
declare type FileActionHandler = GenericFileActionHandler<ChonkyActionUnion>;
declare type ChonkyFileActionData = MapFileActionsToData<ChonkyActionUnion>;

export { ChonkyActionUnion, ChonkyActions, ChonkyDndFileEntryItem, ChonkyDndFileEntryType, ChonkyFileActionData, ChonkyFormatters, ChonkyIconName, ChonkyIconProps, CustomVisibilityState, DefaultFileActions, FileAction, FileActionButton, FileActionData, FileActionEffect, FileActionHandler, FileActionState, FileArray, FileBrowser, FileBrowserHandle, FileBrowserProps, FileContextMenu, FileData, FileHelper, FileList, FileNavbar, FileSelectionTransform, FileToolbar, FileViewConfig, FileViewConfigGrid, FileViewConfigList, FileViewMode, FullFileBrowser, GenericFileActionHandler, I18nConfig, I18nNamespace, MapFileActionsToData, OptionIds, ThumbnailGenerator, defaultFormatters, defineFileAction, fileMap, getActionI18nId, getFileData, getI18nId, getIsFileSelected, getSelectedFiles, getSelectedFilesForAction, reduxActions, rootReducer, selectCleanFileIds, selectClearSelectionOnOutsideClick, selectContextMenuConfig, selectContextMenuItems, selectContextMenuMounted, selectContextMenuTriggerFile, selectCurrentFolder, selectDisableSelection, selectDoubleClickDelay, selectExternalFileActionHandler, selectFileActionData, selectFileActionIds, selectFileActionMap, selectFileData, selectFileMap, selectFileViewConfig, selectFocusSearchInput, selectFolderChain, selectHiddenFileCount, selectHiddenFileIdMap, selectInstanceId, selectIsDnDDisabled, selectIsFileSelected, selectOptionMap, selectOptionValue, selectParentFolder, selectRawFiles, selectSearchString, selectSelectedFileIds, selectSelectedFiles, selectSelectedFilesForAction, selectSelectedFilesForActionCount, selectSelectionMap, selectSelectionSize, selectSortActionId, selectSortOrder, selectThumbnailGenerator, selectToolbarItems, selectors, setChonkyDefaults, thunkDispatchFileAction, thunkRequestFileAction, useChonkyStore, useDTE, useParamSelector, usePropReduxUpdate };
