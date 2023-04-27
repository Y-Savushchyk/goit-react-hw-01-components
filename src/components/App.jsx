import { Profile } from 'components/SocialNetworkProfile/SocialNetworkProfile'
import {Statistics} from 'components/Statistics/Statistics'
import css from 'components/App.module.css'

export const App = () => {
  return (
    <section className={css.section}>
      <Profile/>
    </section>
  );
};
