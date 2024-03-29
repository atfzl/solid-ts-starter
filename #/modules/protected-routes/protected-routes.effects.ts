import { loginState, setLoginState } from '#/modules/login/login.state';
import { history, location } from '#/utils/router.util';
import { createEffect } from 'solid-js';

createEffect(() => {
  if (location() === '/login') {
    return;
  }

  if (loginState.status !== 'success') {
    history.push('/login');
  }
});

createEffect(() => {
  if (location() === '/logout') {
    setLoginState({ status: 'pristine' });
    history.push('/');
  }
});
