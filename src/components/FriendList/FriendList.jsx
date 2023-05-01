import React from 'react'
import css from './FriendList.module.css';
import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
    
    return (
    <div className={css.main }>
        <ul className={css.list }>
        
                {friends.map(element => 
                    <FriendListItem key={element.id} id={ element.id } isOnline={ element.isOnline } avatar={element.avatar} name={element.name}/>
                )}
      
        </ul>
    </div>  
    )
};    

export const FriendListItem = ({id,isOnline,avatar,name}) => {
    
    return (
        
        <li className={css.itemList } key={id}>
            <div className={css.blockList}>
                {isOnline 
                    ? <span className={css.dotGreen}></span>
                    : <span className={css.dotRed}></span>}
                <img className={css.imgLogo} src={avatar} alt={name}></img>{name}</div></li>
        )

};                       


FriendList.propTypes = {
  friends: 
        PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ),
}

FriendListItem.propTypes = {

            id: PropTypes.number.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
    
  
}