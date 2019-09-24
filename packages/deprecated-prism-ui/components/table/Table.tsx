import React, { MouseEvent } from 'react';
import Button from '../button/Button';
import './table.scss';

interface TableProps {
  /** All actions */
  actions?: TableAction[];
  box?: boolean;
  /** Custom class name for component */
  className?: string;
  columns: Column[];
  data: TableData[];
  'data-testid'?: string;
  title?: string;
}

interface TableAction {
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  primary?: boolean;
}

interface Column {
  label: string;
  key: string;
}

interface TableData {
  [key: string]: string;
}

export const Table = ({
  actions = [
    {
      label: 'action label',
      onClick: () => alert('Table Action'),
      primary: true,
    },
  ],
  box = false,
  className = '',
  columns = [
    {
      label: 'Column label',
      key: 'Column key',
    },
  ],
  data = [
    {
      key: 'Data Key',
    },
  ],
  'data-testid': testid = '',
  title = 'My New Table',
}: TableProps) => (
  <div
    className={`psm-table__wrapper ${box ? 'psm-table--box' : ''} ${className}`}
  >
    {actions && actions.length !== 0 && (
      <div className="psm-table__actions">
        {actions.map((action, index) => (
          <Button
            key={index}
            label={action.label}
            onClick={action.onClick}
            buttonStyle={action.primary ? 'primary' : undefined}
          />
        ))}
      </div>
    )}
    <table className="psm-table">
      {title && (
        <caption className="psm-table-caption" id={`${testid}-table-caption`}>
          {title}
        </caption>
      )}
      <thead>
        <tr className="psm-table__tr">
          {columns.map((column, index) => (
            <th
              className="psm-table__th"
              id={`${testid}-column-${index}-row-${-1}`}
              key={index}
              scope="col"
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIdx) => (
          <tr className="psm-table__tr" key={rowIdx}>
            {columns.map((column, columnIdx) => (
              <td
                className="psm-table__td"
                id={`${testid}-column-${columnIdx}-row-${rowIdx}`}
                data-testid={testid}
                key={columnIdx}
              >
                {row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// docgen relies on the component having a named export, so we use both named and default
export default Table;
