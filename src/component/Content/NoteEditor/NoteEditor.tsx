import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { INote } from '../../../interface/INote';

const NoteEditor = withRouter((props: any) => {
  const { match, history, } = props;
  const { notes, } = useSelector(state => state);
  const [content, setContent] = useState('');
  useEffect(() => {
    const getEditNote = (id: string) => notes.find((note: INote) => note.id === id);
    const targetNote = getEditNote(match.params.id);
    if (targetNote) {
      setContent(targetNote.content);
    } else {
      history.push('/');
    }
  });
  return (
    <div>
      還未完成 嗚嗚
    </div>
  );
});

export default NoteEditor;
