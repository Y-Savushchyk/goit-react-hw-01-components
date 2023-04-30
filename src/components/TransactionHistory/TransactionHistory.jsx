
import { Transaction } from './Transaction/Transaction'
import css from './TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
    console.log(items);
    return (
        <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <Transaction key={id} type={type} amount={amount} currency={currency}/>
                   )
               })}
  </tbody>
</table>
    )
}