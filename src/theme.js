import './App.css'

const colors = {
  yello: '#fcd34d',
  dark_yello: '#fbbf24'
}

const theme = {
  fonts: {
    body: '"IBM Plex Sans", sans-serif;',
    //body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  text: {
    highlight: {
      background: 'linear-gradient(to bottom, transparent 50%,' + colors.yello + ' 50%)',
      padding: '0px 5px',
      letterSpacing: '1px'
    }
  },
  buttons: {
    primary: {
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontWeight: 'bold',
      borderRadius: 'circle',
      display: 'inline-flex',
      alignItems: 'center',
      boxShadow: '5px 5px ' + colors.yello,
      justifyContent: 'center',
      color: 'black',
      borderRadius: '4px',
      bg: 'white',
      border: '3px solid black',
      transition: 'transform .125s ease-in-out, box-shadow .125s ease-in-out',
      ':focus,:hover': {
        boxShadow: '8px 5px ' + colors.dark_yello,
        color: colors.dark_yello
        //boxShadow: 'elevated',
        //transform: 'scale(1.0625)'
      }
    }
  }
}

export default theme;