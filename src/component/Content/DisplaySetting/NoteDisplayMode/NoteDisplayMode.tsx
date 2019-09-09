import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { changeDisplayNotesMode } from '../../../../action/notes';

const NoteDisplayMode = () => {
  const { theme, displayNotesMode, } = useSelector(state => state);
  const dispatch = useDispatch();
  const getIconColor = (iconType: string) => {
    switch (theme) {
      case 'light':
        switch (displayNotesMode === iconType) {
          case true:
            return '#000';
          case false:
            return '#eee';
          default:
            throw new Error('No have displayNotesMode');
        }
      case 'dark':
        switch (displayNotesMode === iconType) {
          case true:
            return '#fff';
          case false:
            return '#696969';
          default:
            throw new Error('No have displayNotesMode');
        }
      default:
        throw new Error('No have theme');
    }
  };
  return (
    <div>
      <IconButton
        onClick={() => {
          dispatch(changeDisplayNotesMode('list'));
        }}
      >
        <ViewListIcon
          style={{ color: getIconColor('list'), }}
        />
      </IconButton>
      <IconButton
        onClick={() => {
          dispatch(changeDisplayNotesMode('module'));
        }}
      >
        <ViewModuleIcon
          style={{ color: getIconColor('module'), }}
        />
      </IconButton>
    </div>
  );
};

export default NoteDisplayMode;
