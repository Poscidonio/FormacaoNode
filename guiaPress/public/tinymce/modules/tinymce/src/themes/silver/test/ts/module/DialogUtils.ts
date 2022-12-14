import { UiFinder } from '@ephox/agar';
import { TestHelpers } from '@ephox/alloy';
import { SugarBody } from '@ephox/sugar';
import { TinyUiActions } from '@ephox/wrap-mcagar';

import Editor from 'tinymce/core/api/Editor';
import { Dialog } from 'tinymce/core/api/ui/Ui';
import { WindowParams } from 'tinymce/core/api/WindowManager';

const open = <T>(editor: Editor, spec: Dialog.DialogSpec<T>, params: WindowParams): Dialog.DialogInstanceApi<T> =>
  editor.windowManager.open(spec, params);

const openWithStore = <T>(editor: Editor, spec: Dialog.DialogSpec<T>, params: WindowParams, store: TestHelpers.TestStore): Dialog.DialogInstanceApi<T> => {
  const dialogSpec = {
    onSubmit: store.adder('onSubmit'),
    onClose: store.adder('onClose'),
    onCancel: store.adder('onCancel'),
    onChange: store.adder('onChange'),
    onAction: store.adder('onAction'),
    ...spec
  };
  return open(editor, dialogSpec, params);
};

const close = (editor: Editor): void => {
  TinyUiActions.closeDialog(editor);
  UiFinder.notExists(SugarBody.body(), 'div[role=dialog]');
};

export {
  close,
  open,
  openWithStore
};
