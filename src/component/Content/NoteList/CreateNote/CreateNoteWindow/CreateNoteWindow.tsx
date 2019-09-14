import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import noteBackgroundImages from '../../../../../assets/noteBackground';
import { createNote } from '../../../../../action/notes';
import styles from './index.scss';

const useStyles = makeStyles({
  input: {
    width: '172px',
    borderRadius: '5px',
    padding: '0px 12px',
    border: '1px solid #000',
    background: '#F4F4F4',
  },
  button: {
    background: '#000',
    color: '#fff',
    '&:hover': {
      background: '#444',
    },
  },
});

const CreateNoteWindow = (props: any) => {
  const classes = useStyles({});
  const dispatch = useDispatch();
  const [noteName, setNoteName] = useState('');
  const [noteBackground, setNoteBackground] = useState('andrej-lisakov-V2OyJtFqEtY-unsplash');
  const [verification, setVerification] = useState({ noteName: false, });
  const { open, handleClose, } = props;

  const cleanData = () => {
    setNoteName('');
    setNoteBackground('andrej-lisakov-V2OyJtFqEtY-unsplash');
  };

  const handleOk = () => {
    const checkData = () => {
      if (noteName.replace(' ', '') === '') {
        setVerification({
          ...verification,
          noteName: true,
        });
        return false;
      }
      return true;
    };
    if (checkData()) {
      dispatch(createNote(noteName, noteBackground));
      cleanData();
      handleClose();
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onExited={cleanData}
    >
      <DialogTitle>新增筆記</DialogTitle>
      <DialogContent>
        <FormControl error={verification.noteName}>
          <div className={styles.formRow}>
            <div>筆記名稱&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <TextField
              InputProps={{
                classes: {
                  root: classes.input,
                },
                disableUnderline: true,
                value: noteName,
                onChange: (e) => {
                  setNoteName(e.target.value);
                },
              }}
            />
            <FormHelperText style={{ display: verification.noteName ? 'block' : 'none', }}>
              筆記名稱不可為空！
            </FormHelperText>
          </div>
        </FormControl>
        <div className={styles.formRow}>
          <div>選擇封面</div>
        </div>
        <div className={styles.formRow}>
          {
            noteBackgroundImages.map(image => (
              <div
                key={image}
                onKeyDown={() => {}}
                onClick={() => { setNoteBackground(image); }}
                className={
                  `${styles.priviewNoteBackground}
                  ${noteBackground === image
                    ? `${styles.selectBackground}`
                    : ''}
                  `
                }
                style={{
                  backgroundImage: `url(./static/images/noteBackground/${image}.jpg)`,
                }}
              />
            ))
          }
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          classes={{ root: classes.button, }}
        >
          取消
        </Button>
        <Button
          onClick={handleOk}
          classes={{ root: classes.button, }}
        >
          確定
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateNoteWindow;
