# Important notes
First, if using this as a React component, wrap this in a nav tag.
Second, the active tab is determined by prop, not state– you have to update it yourself via props.
Nav should change so little compared to every other component that it shouldn't manage
its own state. Instead, your onClick function should update the array of tabs when a user clicks one

## Types
### Tab
```
Tab {
  tabName: string;
  onClick?: (
    event?: MouseEvent<Element>,
  ) => void;
  numErrors?: number;
  isNew?: boolean;
  isNewText?: string;
  focused?: boolean;
}
```