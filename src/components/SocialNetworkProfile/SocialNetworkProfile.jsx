import css from './SocialNetworkProfile.module.css';
import PropTypes from 'prop-types';
import user from '../../user.json'
import { MdAlternateEmail } from 'react-icons/md';
export const SocialNetworkProfile =({username, tag, location, avatar, stats}) =>{
    return (<div className={css.profile}>
    <div className={css.description}>
      <img
        src={user.avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{user.username}</p>
        <p className={css.tag}><MdAlternateEmail size={16} viewBox='1 0 20 22'/> {user.tag}</p>
      <p className={css.location}>{user.location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>)
};
SocialNetworkProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}