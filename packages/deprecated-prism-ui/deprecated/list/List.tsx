import React, { useState } from 'react';
import './list.scss';

export type Sizes = 'sm' | 'md' | 'lg';

export type ListProps = {
  dataTestId?: string;
  rows?: Array<{
    columns?: Array<{
      text: string;
      isButton: boolean;
      onClick?(event?: any): any;
      buttonPrimary?: boolean;
    }>;
  }>;
  size: Sizes;
};

export type ListState = {
  focusedColumn: number;
  focusedRow: number;
  isTab: boolean;
};

const defaultRows = [
  {
    columns: [
      { text: 'cell 1', isButton: false },
      { text: 'cell 2', isButton: false },
      { text: 'cell 3', isButton: false },
    ],
  },
];

export const List = ({
  dataTestId = '',
  rows = defaultRows,
  size = 'lg',
}: ListProps) => {
  const [focusedColumn, setFocusedColumn] = useState<
    ListState['focusedColumn']
  >(0);
  const [FocusedRow, setFocusedRow] = useState<ListState['focusedRow']>(0);
  const [isTab, setIsTab] = useState<ListState['isTab']>(false);

  function handleKeyboard(event) {
    const { keyCode } = event;
    const columnsLength = rows[FocusedRow].columns.length;

    switch (keyCode) {
      case 38:
        FocusedRow !== 0
          ? setFocusedRow(FocusedRow - 1)
          : setFocusedRow(rows.length - 1);
        setIsTab(true);
        break;

      case 40:
        FocusedRow + 1 !== rows.length
          ? setFocusedRow(FocusedRow + 1)
          : setFocusedRow(0);
        setIsTab(true);
        break;

      case 39:
        focusedColumn + 1 !== columnsLength
          ? setFocusedColumn(focusedColumn + 1)
          : setFocusedColumn(0);
        setIsTab(true);
        break;

      case 37:
        focusedColumn > 0
          ? setFocusedColumn(focusedColumn - 1)
          : setFocusedColumn(columnsLength - 1);
        setIsTab(true);
        break;

      case 9:
        setIsTab(true);
        break;

      case 13:
        rows[FocusedRow].columns[focusedColumn].isButton
          ? rows[FocusedRow].columns[focusedColumn].onClick
          : {};
        setIsTab(false);
        break;

      default:
        document
          .getElementById(
            `${dataTestId}-row-${FocusedRow}-column-div-${focusedColumn}`,
          )
          .focus();
        setIsTab(true);
        break;
    }
  }

  return (
    <div className="psm-list" role="list" onKeyDown={handleKeyboard}>
      {rows.map((row, rowIndex) => {
        return (
          <ul
            className={`psm-list__row psm-list__row-${size}`}
            id={`${dataTestId}-row-div-${rowIndex}`}
            key={rowIndex}
            onFocus={() => setFocusedRow(rowIndex)}
          >
            {row.columns.map((column, columnIndex) => {
              if (columnIndex === 0) {
                if (!column.isButton) {
                  return (
                    <li
                      className="psm-list__row__lead"
                      data-testid={`${dataTestId}-${dataTestId}-row-${rowIndex}-column-${columnIndex}`}
                      id={`${dataTestId}-row-${rowIndex}-column-div-${columnIndex}`}
                      key={columnIndex}
                      onClick={() => setIsTab(false)}
                      role="listitem"
                      style={{
                        outline: isTab ? null : 'none',
                      }}
                      tabIndex={0}
                    >
                      {column.text}
                    </li>
                  );
                } else {
                  return (
                    <li
                      aria-label={`${column.text}-button`}
                      key={columnIndex}
                      role="listitem"
                      tabIndex={-1}
                    >
                      <button
                        className="psm-button--primary"
                        data-testid={`${dataTestId}-${dataTestId}-row-${rowIndex}-column-${columnIndex}`}
                        id={`${dataTestId}-row-${rowIndex}-column-div-${columnIndex}`}
                        key={columnIndex}
                        onClick={() => {
                          column.onClick;
                          setIsTab(false);
                        }}
                        style={{
                          outline: isTab ? null : 'none',
                        }}
                        tabIndex={0}
                      >
                        {column.text}
                      </button>
                    </li>
                  );
                }
              } else {
                if (!column.isButton) {
                  return (
                    <li
                      data-testid={`${dataTestId}-${dataTestId}-row-${rowIndex}-column-${columnIndex}`}
                      id={`${dataTestId}-row-${rowIndex}-column-div-${columnIndex}`}
                      key={columnIndex}
                      onClick={() => setIsTab(false)}
                      role="listitem"
                      style={{
                        outline: isTab ? null : 'none',
                      }}
                      tabIndex={0}
                    >
                      {column.text}
                    </li>
                  );
                } else {
                  return (
                    <li
                      aria-label={`${column.text} button`}
                      key={columnIndex}
                      role="listitem"
                      tabIndex={0}
                    >
                      <button
                        aria-labelledby={column.text}
                        className="psm-button--primary"
                        data-testid={`${dataTestId}-row-${rowIndex}-column-${columnIndex}`}
                        id={`${dataTestId}-row-${rowIndex}-column-div-${columnIndex}`}
                        key={columnIndex}
                        onClick={() => {
                          column.onClick();
                          setIsTab(false);
                        }}
                        style={{
                          outline: isTab ? null : 'none',
                        }}
                        tabIndex={0}
                      >
                        {column.text}
                      </button>
                    </li>
                  );
                }
              }
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default List;
