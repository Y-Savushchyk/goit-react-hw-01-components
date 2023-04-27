import {List} from './list/list'
import css from './Statistics.module.css'

export const Statistics = ({title, stats}) => {
    return (

        <section className="statistics">
            {title && <h2 className={css.title}>{title}</h2>}
            
            <ul className="stat-list">
                {stats.map(({id, label, percentage}) => {
                    return (
                        <List key={id} label={label} percentage={percentage} />
                    )
                })} </ul>
</section>
    )
}