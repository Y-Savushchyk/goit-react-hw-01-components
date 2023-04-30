import {Profile} from './Profile/profile'
import css from './FriendList.module.css'

export const FriendList = ({ friends }) => {
   console.log(friends);
    return (
        <ul className={css.friendList}>
            {friends.map(({ avatar, name, isOnline, id }) => {
                return (
                    <Profile key={id} avatar={avatar} name={name} isOnline={ isOnline} />
                 )
             })}
</ul>
    )
}