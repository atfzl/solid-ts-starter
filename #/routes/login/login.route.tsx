import Spinner from '#/components/spinner/spinner.component';
import { formPipeline, passwordPipeline, usernamePipeline } from '#/modules/login/login.pipeline';
import { loginState } from '#/modules/login/login.state';
import { css } from 'emotion';
import { Match, Switch } from 'solid-js/dom';

function Login() {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100vh;
      `}
    >
      <div
        className={css`
          margin-top: -20rem;
        `}
      >
        <form forwardRef={formPipeline}>
          <input
            value={(void 0, loginState.username)}
            forwardRef={usernamePipeline}
            placeholder="id"
          />
          <input
            value={(void 0, loginState.password)}
            forwardRef={passwordPipeline}
            placeholder="password"
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div
        className={css`
          height: 8rem;
        `}
      >
        <Switch>
          <Match when={(void 0, loginState.status === 'checking')}>
            <Spinner />
          </Match>
          <Match when={(void 0, loginState.status === 'failure')}>
            <div
              className={css`
                align-self: flex-start;
                color: red;
              `}
            >
              wrong id or password
            </div>
          </Match>
        </Switch>
      </div>
    </div>
  );
}

export default Login;
