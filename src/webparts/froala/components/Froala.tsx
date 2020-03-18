import * as React from 'react';
import styles from './Froala.module.scss';
import { IFroalaProps, IFroalaState } from './IFroalaProps';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';
import { escape } from '@microsoft/sp-lodash-subset';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
//import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';

// Include special components if required.
// import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
// import FroalaEditorA from 'react-froala-wysiwyg/FroalaEditorA';
// import FroalaEditorButton from 'react-froala-wysiwyg/FroalaEditorButton';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';
// import FroalaEditorInput from 'react-froala-wysiwyg/FroalaEditorInput';

export default class Froala extends React.Component<IFroalaProps, IFroalaState> {
     constructor(props: IFroalaProps) {
          super(props);

          this.state = {
               content: this.props.description
          };
     }

     public render(): React.ReactElement<IFroalaProps> {
          const froalaConfig = {
               key: '',
               // language: 'de',
               // placeholderText: '',
               charCounterCount: false,
               // editorClass: styles.RTEEditor,
               toolbarInline: true,
               toolbarVisibleWithoutSelection: true
               // linkInsertButtons: ['linkBack'],
               // linkEditButtons: ['linkOpen', 'linkEdit', 'linkRemove'],
               // linkAlwaysBlank: true,
               // linkNoOpener: false,
               // quickInsertButtons: ['ol', 'ul', 'table'],
               // toolbarButtons: ['undo', 'redo', '|', 'bold', 'italic', 'underline', '|', 'outdent', 'indent', 'formatOL', 'formatUL', '|', 'insertLink', 'insertTable']
          };

          return (
               <div className={styles.froala}>
                    <Panel isOpen={true} styles={{ commands: { display: 'none' }, content: { paddingLeft: '0px !important;', paddingRight: '0px !important;' } }} type={PanelType.large}>
                         <FroalaEditor tag='textarea' model={this.state.content} config={froalaConfig} onModelChange={value => this.setState({ content: value })} />
                    </Panel>
               </div>
          );
     }
}
