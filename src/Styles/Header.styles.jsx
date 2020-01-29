import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    
  }
});

const useStyles = makeStyles({
  headerLogo: {
    paddingTop: '24px',
    maxHeight: '150px'
  },
});

export default useStyles;