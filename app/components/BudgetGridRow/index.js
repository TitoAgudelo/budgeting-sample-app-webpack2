// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import formatAmount from 'utils/formatAmount';
import type { Transaction } from 'modules/transactions';
import type { Categories } from 'modules/categories';
import styles from './style.scss';

// budget frid type
type BudgetGridRowProps = {
  transaction: Transaction,
  categories: Categories,
};

const BudgetGridRow = ({ transaction, categories }: BudgetGridRowProps) => {
  const amount = formatAmount(transaction.value);
  const amountCls = amount.isNegative ? styles.neg : styles.pos;
  const { id, categoryId, description } = transaction;
  const category = categories[categoryId];
  const budgetUrl = `/transaction/${id}`;

  return (
    <Link className={styles.link} to={budgetUrl}>
      <tr key={id} className={styles.row}>
        <td>
          <div className={styles.cellLabel}>Category</div>
          <div className={styles.cellContent}>{category}</div>
        </td>
        <td>
          <div className={styles.cellLabel}>Description</div>
          <div className={styles.cellContent}>{description}</div>
        </td>
        <td className={amountCls}>
          <div className={styles.cellLabel}>Amount</div>
          <div className={styles.cellContent}>{amount.text}</div>
        </td>
      </tr>
    </Link>
  );
};

export default BudgetGridRow;
