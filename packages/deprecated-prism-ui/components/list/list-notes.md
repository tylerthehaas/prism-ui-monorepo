## Types
```
  ListItem {
    /** The things that will go in your list */
  content: string;
  /** String to indicate when this thing happened. If empty, nothing will appear */
  age?: string;
  }
```

```
  Dropdown {
    label: string;
    onClick?: (event?: MouseEvent<HTMLLIElement | HTMLDivElement>) => void;
  }
```