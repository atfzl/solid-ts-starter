import Header from '#/components/header/header.component';
import '#/modules/protected-routes/protected-routes.effects';
import { location } from '#/utils/router.util';
import { Match, Show, Switch } from 'solid-js/dom';
import HomeRoute from './home/home.route';
import LoginRoute from './login/login.route';

function Routes() {
  return (
    <div>
      <Show when={(void 0, ['/', '/login'].includes(location()))}>
        <Header />
      </Show>
      <Switch>
        <Match when={(void 0, location() === '/')}>
          <HomeRoute />
        </Match>
        <Match when={(void 0, location() === '/login')}>
          <LoginRoute />
        </Match>
      </Switch>
    </div>
  );
}

export default Routes;
