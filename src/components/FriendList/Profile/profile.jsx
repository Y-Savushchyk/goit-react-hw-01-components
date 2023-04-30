import PropTypes from 'prop-types';
import {statusColor} from '../../untils/onlineStatus'
import css from './profile.module.css'





export const Profile = ({avatar, name, isOnline}) => {
    return (
        <li className={css.item} style={{ borderColor:statusColor(isOnline)}}>
  <span className={css.status}style={{backgroundColor:statusColor(isOnline)}}></span>
  <img className={css.avatar} src={avatar} alt={name} width="48" />
  <p className={css.name}>{name}</p>
</li>
    )
    
}
Profile.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
    }