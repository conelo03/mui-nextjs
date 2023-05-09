import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import BaseContainer from '@components/layout/Container';
import usePostEmailLogin from 'services/auth/mutations/usePostEmailLogin.service';
import apiClient from 'services/apis';
import { apiResponseSuccess } from 'lib/helper';

const SignIn = () => {
  const router = useRouter()
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    try {
      const body = {
        identifier: data.get('identifier') ?? '',
        password: data.get('password') ?? '',
      }
      const response = await apiClient.post('/auth/local', body)
      if (apiResponseSuccess(response?.status)) {
        const auth = response?.data
        localStorage.setItem('auth', JSON.stringify(auth))
        const authStorage = localStorage.getItem('auth') ?? null
        const parsedAuthStorage = authStorage ? JSON.parse(authStorage) : null
        console.log(parsedAuthStorage)
        router.replace('/dashboard')
      } else {
        console.error(response)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <BaseContainer title={'Sign In'}>
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="identifier"
          label="Email Address"
          name="identifier"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={() => { router.push('/auth/register') }} variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </BaseContainer>
  )
}

export default SignIn