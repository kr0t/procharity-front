import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authForm: {
    display: 'flex',
    maxWidth: '314px',
    margin: '60px 0 0 0',
    flexDirection: 'column',
    border: 'none',
    padding: '0',
    width: '288px',
    gap: 20,
    alignItems: 'center',
  },

  authFormInputContainer: {
    position: 'relative',
    marginBottom: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 35,
    width: '100%',
    border: 'none',
  },

  authFormSubmitContainer: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
  },

  authFormButtonContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },

  authFormButton: {
    cursor: 'pointer',
    top: '8px',
    right: '12px',
    width: '90px',
    minHeight: '44px',
    backgroundPosition: 'center',
    background: theme.palette.secondary.main,
    border: 'none',
    padding: '0',
  },

  authFormInput: {
    backgroundColor: theme.palette.background.paper,
    filter: 'none',
    borderColor: 'transparent',
    borderRadius: '4px',
    border: 'none',
    color: '#ffff',
    position: 'relative',
    width: '100%',
    maxWidth: '288px',
  },
}));

export default useStyles;