import React, { useCallback, useEffect } from 'react';
import useCodeMirror from '../../hooks/useCodeMirror';
import { EditorState } from '@codemirror/state';
import useArticleStore from '@/stores/article';
import './index.less';
interface Props {
  initialDoc: string;
  onChange: (doc: string) => void;
}
const Editor = () => {
  //   const { onChange, initialDoc } = props;
  const { currentArticleMdContent, changeCurrentArticleMdContent } = useArticleStore(
    store => store,
  );
  const onChange = useCallback((state: EditorState) => {
    console.log(state.doc.toString());
    changeCurrentArticleMdContent(state.doc.toString());
  }, []);
  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: '',
    onChange,
  });

  useEffect(() => {
    return () => {
      editorView?.destroy();
    };
  }, [editorView]);

  // useEffect(() => {
  //   if (editorView) {
  //     const transaction = editorView.state.update({
  //       changes: { from: 0, to: editorView.state.doc.length, insert: currentArticleMdContent },
  //     });
  //     editorView.dispatch(transaction);
  //   }
  // }, [currentArticleMdContent]);

  return (
    <div className="md-editor-container">
      <div className="md-editor-wrapper" ref={refContainer}></div>
    </div>
  );
};
export default Editor;
