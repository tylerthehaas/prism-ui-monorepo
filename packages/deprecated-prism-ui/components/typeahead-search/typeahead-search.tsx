import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import Alert from '../alert/Alert';
import Icon from '../icon/Icon';
import useDebounce from '../../hooks/use-debounce';
import './typeahead-search.scss';

interface SearchProps {
  /** Default auth is same-origin */
  auth?: string;
  /** Default characters before the search starts is 3 */
  charactersBeforeSearching?: number;
  'data-testid': string;
  /** The endpoint the API is calling. Default is https://usersearch-perf-qa.alamoapp.octanner.io/users */
  url: string;
  /** Function that fires when a user is selected. You MUST pass something in for this component to do anything besides display users */
  onSelect: () => void | {};
}

interface SearchState {
  apiResults: apiResult[];
  autocompleteResult: string;
  displayedResult: string;
  isSearching: boolean;
  selectedResult: number;
  showResults: boolean;
  userInput: string;
  searchResults: JSX.Element | JSX.Element[] | string;
  userVisibleSearchBox: { userInput: string; autocompleteString: string };
}

interface apiResult {
  avatar: string;
  customerId: string;
  employeeId: string;
  error?: Error;
  firstName: string;
  fullName: string;
  initials: string;
  lastName: string;
  preferName: string;
  status: string;
  systemUserId: string;
}

export const TypeaheadSearch = ({
  auth = 'same-origin',
  charactersBeforeSearching = 3,
  'data-testid': testid = '',
  url = 'https://usersearch-perf-qa.alamoapp.octanner.io/users',
  onSelect,
}: SearchProps) => {
  const [userVisibleSearchBox, setUserVisibleSearchBox] = useState<
    SearchState['userVisibleSearchBox']
  >({
    userInput: '',
    autocompleteString: '',
  });
  const [searchResults, setSearchResults] = useState<
    SearchState['searchResults']
  >([]);

  const [userInput, setUserInput] = useState<SearchState['userInput']>('');
  const [autocompleteString] = useState('');
  const [selectedResult, setSelectedResult] = useState<
    SearchState['selectedResult']
  >(0);
  const [apiResults, setApiResults] = useState<SearchState['apiResults']>([]);
  const [isSearching, setIsSearching] = useState<SearchState['isSearching']>(
    false,
  );

  const [showResults, setShowResults] = useState<SearchState['showResults']>(
    false,
  );

  const debouncedSearchInput = useDebounce(userInput, 250);

  async function searchUsers() {
    try {
      const result = await fetch(`${url}?q=${userInput}`, {
        headers: {
          Authorization: auth,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setIsSearching(false);
      return result.json();
    } catch (err) {
      setIsSearching(false);
      return {
        error: {
          message: 'Failed to fetch',
        },
      };
    }
  }

  function transformResultForDisplay(result: apiResult) {
    if (result !== undefined) {
      return `${result.firstName} ${result.lastName}`;
    }
    return '';
  }

  function getAutocompleteString(typeaheadString: string) {
    return userInput + typeaheadString.substring(userInput.length);
  }

  function transformApiResults(results: apiResult[]) {
    if (!Array.isArray(results)) {
      const errorResult = results as apiResult;
      setShowResults(true);
      return (
        <Alert alertType="error">
          <div className="psm-alert--error">
            Error: {errorResult.error ? errorResult.error.message : ''}
          </div>
        </Alert>
      );
    }
    if (userInput.length === 0) return '';
    if (results.length === 0)
      return <li className="psm-typeahead--result">No results</li>;
    if (results.length > 0) {
      setShowResults(true);
      return results.map(result => {
        return (
          <li>
            <div
              className="psm-typeahead--result"
              key={result.systemUserId}
              onClick={() => onSelect()}
              onKeyDown={event => (event.key === 'Enter' ? onSelect() : {})}
              role="button"
              tabIndex={0}
            >
              {result.firstName} {result.lastName}
            </div>
          </li>
        );
      });
    }
    if (userInput.length >= charactersBeforeSearching) {
      setShowResults(true);
      return <li className="psm-typeahead--result">Not found!</li>;
    }
    return '';
  }

  async function handleApiLogic() {
    const results = await searchUsers();
    setApiResults(results);
    setSearchResults(transformApiResults(results));
    setUserVisibleSearchBox({
      userInput,
      autocompleteString: getAutocompleteString(
        transformResultForDisplay(results[0]),
      ),
    });
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInput(event.currentTarget.value);
  }

  function handleArrowRight() {
    if (userVisibleSearchBox.autocompleteString !== '') {
      return setUserVisibleSearchBox({
        userInput: transformResultForDisplay(apiResults[selectedResult]),
        autocompleteString: '',
      });
    }
    return onSelect();
  }

  function handleArrowDown() {
    if (apiResults[selectedResult + 1]) {
      if (userVisibleSearchBox.autocompleteString !== '') {
        return handleArrowRight();
      }
      setSelectedResult(selectedResult + 1);
      return setUserVisibleSearchBox({
        userInput: transformResultForDisplay(apiResults[selectedResult + 1]),
        autocompleteString: '',
      });
    }
    setSelectedResult(0);
    return setUserVisibleSearchBox({
      userInput: transformResultForDisplay(apiResults[0]),
      autocompleteString: '',
    });
  }

  function handleArrowUp() {
    if (apiResults[selectedResult - 1]) {
      if (userVisibleSearchBox.autocompleteString !== '') {
        return handleArrowRight();
      }
      setSelectedResult(selectedResult - 1);
      return setUserVisibleSearchBox({
        userInput: transformResultForDisplay(apiResults[selectedResult - 1]),
        autocompleteString: '',
      });
    }
    setSelectedResult(apiResults.length - 1);
    return setUserVisibleSearchBox({
      userInput: transformResultForDisplay(apiResults[apiResults.length - 1]),
      autocompleteString: '',
    });
  }

  function handleAutocomplete(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'Tab':
      case 'ArrowRight':
        handleArrowRight();
        break;
      case 'ArrowDown':
        handleArrowDown();
        break;
      case 'ArrowUp':
        handleArrowUp();
        break;
      default:
        return '';
    }
    return {};
  }

  useEffect(() => {
    setUserVisibleSearchBox({
      userInput,
      autocompleteString,
    });
    if (userInput.length <= charactersBeforeSearching) {
      setShowResults(false);
    }
  }, [userInput]);

  useEffect(() => {
    if (debouncedSearchInput && userInput.length >= charactersBeforeSearching) {
      setIsSearching(true);
      handleApiLogic();
    }
  }, [debouncedSearchInput]);

  return (
    <div className="psm-input-trailing-icon" id={testid}>
      <div className="psm-typeahead" id="search">
        <input
          aria-hidden
          className="psm-typeahead--background"
          value={userVisibleSearchBox.autocompleteString}
          readOnly
          tabIndex={-1}
        />
        <input
          aria-describedby="search"
          aria-label="search"
          className="psm-typeahead--search psm-input"
          data-testid={`${testid}-input`}
          id="search-input psm-input-text"
          name="search-input"
          onChange={handleInputChange}
          onKeyDown={handleAutocomplete}
          placeholder="Find someone at your company..."
          type="search"
          value={userVisibleSearchBox.userInput}
        />
        {
          <button
            aria-label="search icon"
            className="search-psm-icon-svg-search psm-typeahead--icon"
            data-testid={`${testid}--icon`}
            onClick={() => onSelect()}
            style={{
              cursor: 'pointer',
            }}
            type="button"
          >
            <Icon
              iconName="search"
              height="16px"
              width="16px"
              fill="white"
              className="svg-icon-search"
            />
          </button>
        }
      </div>
      <div
        className={`psm-typeahead--results ${showResults ? 'showResults' : ''}`}
      >
        {isSearching && (
          <div className="psm-typeahead--result">Searching ...</div>
        )}
        <ol>{searchResults}</ol>
      </div>
    </div>
  );
};

export default TypeaheadSearch;
