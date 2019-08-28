## Types
```
TableAction {
  label: string;
  onClick?: (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  primary?: boolean
}

Column {
  label: string;
  key: string;
}

TableData {
  [key: string]: string
}
```
