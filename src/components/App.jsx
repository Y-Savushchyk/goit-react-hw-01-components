import {Profile} from './SocialNetworkProfile/SocialNetworkProfile';
import user from '../user.json'
import css from 'components/app.module.css'

export const App = () => {
  return (
    <div className={css.section}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
}

