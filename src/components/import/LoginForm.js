import React from 'react'
import useForm from './useForm'
import validate from './LoginRules'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  isError: {
    color: 'red'
  },
  button: {
    margin: theme.spacing(1)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%'
  },
  margin: {
    margin: theme.spacing(1)
  }
}))

const Form = () => {
  const classes = useStyles()
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate
  )

  function login() {
    console.log('No errors')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box component="span" m={1}>
          <div className={classes.container}>
            <FormControl
              noValidate
              autoComplete="off"
              className={classes.margin}
            >
              <InputLabel htmlFor="email">Email:</InputLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email || ''}
                required
                id="email"
                className={`input ${errors.email && 'is-error'}`}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              {errors.email && (
                <p className={classes.isError}>{errors.email}</p>
              )}
            </FormControl>
            <FormControl
              noValidate
              autoComplete="off"
              className={classes.margin}
            >
              <InputLabel htmlFor="password">Password:</InputLabel>
              <Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password || ''}
                required
                id="password"
                className={`input ${errors.password && 'is-error'}`}
                startAdornment={
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                }
              />
              {errors.password && (
                <p className={classes.isError}>{errors.password}</p>
              )}
            </FormControl>
            <div>
              <Button variant="contained" className={classes.button}>
                Register
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                className={classes.button}
              >
                Login
              </Button>
            </div>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  )
}

export default Form
