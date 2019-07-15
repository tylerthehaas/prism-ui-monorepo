import React from 'react';
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
  const table = (
    <>
      {title && (
        <div className="psm-table-header" id={`${testid}-table-header`}>
          {title}
        </div>
      )}
      {actions && actions.length !== 0 && (
        <div className="psm-table__actions">
          {actions.map((action, index) => {
            return (
              <a
                className={`psm-button${action.primary ? '--primary' : ''}`}
                key={index}
                onClick={action.onClick}
              >
                {action.label}
              </a>
            );
          })}
        </div>
      )}
      <table className="psm-table">
        <thead>
          <tr className="psm-table__tr">
            {columns.map((column, index) => {
              return (
                <th id={`${testid}-column-${index}-row-${-1}`} key={index}>
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
    </>
  );
  return <>{box ? <div className="psm-table--box">{table}</div> : table}</>;
};

export default Table;
