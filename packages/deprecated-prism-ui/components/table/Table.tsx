import React from 'react';
import Button from '../button/Button';
import './table.scss';

interface TableProps {
  actions?: { label: string; onClick(event: any): any; primary?: boolean }[];
  box?: boolean;
  columns: { label: string; key: string }[];
  data: { [key: string]: string }[];
  'data-testid'?: string;
  title?: string;
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
}: TableProps) => {
  return (
    <div className={`psm-table__wrapper ${box ? 'psm-table--box' : ''}`}>
      {actions && actions.length !== 0 && (
        <div className='psm-table__actions'>
          {actions.map((action, index) => {
            return (
              <Button
                key={index}
                label={action.label}
                onClick={action.onClick}
                primary={action.primary}
              />
            );
          })}
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
            {columns.map((column, index) => {
              return (
                <th
                  className='psm-table__th'
                  id={`${testid}-column-${index}-row-${-1}`}
                  key={index}
                  scope="col"
                >
                  {column.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => {
            return (
              <tr className="psm-table__tr" key={rowIdx}>
                {columns.map((column, columnIdx) => {
                  return (
                    <td
                      className="psm-table__td"
                      id={`${testid}-column-${columnIdx}-row-${rowIdx}`}
                      data-testid={testid}
                      key={columnIdx}
                    >
                      {row[column.key]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
