import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import Icon from '../icon/Icon';
import useDebounce from '../../hooks/use-debounce';
import { IdentityResult } from './types';
import TypeaheadResult from './typeahead-result';
import './typeahead-search.scss';

interface SearchProps {
  'data-testid'?: string;
  /** Authentication header */
  auth?: string;
  /** Default characters before the search starts is 3 */
  threshold?: number;
  /** Custom class name for component */
  className?: string;
  /** Function that fires when a user is selected. You MUST pass something in for this component to do anything besides display users */
  onSelect: () => void | {};
  /** The endpoint the API is calling. Default is https://usersearch-perf-qa.alamoapp.octanner.io/users */
  url: string;
}

interface SearchState {
  identityResults: IdentityResult[];
  selectedResult: number;
  userInput: string;
  searchResults: JSX.Element[];
}

export default ({
  auth = '',
  threshold = 3,
  className = '',
  'data-testid': testid = '',
  onSelect,
  url = '/users',
}: SearchProps) => {
  const [searchResults, setSearchResults] = useState<
    SearchState['searchResults']
  >([]);

  const [userInput, setUserInput] = useState<SearchState['userInput']>('');
  const debouncedSearchInput = useDebounce(userInput, 250);

  function searchUsers() {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
    if (auth) {
      headers.append('Authorization', auth);
    }
    const query = `
      query ($condition: IdentityInput!) {
        identitySearch(condition: $condition) {
          pagesCount
          recordsCount
          totalRecordsCount
          identities {
            id
            firstName
            lastName
            preferredName
            email
            managerId
            manager {
              firstName
              lastName
              jobTitle
            }
          }
        }
      }
    `;
    const condition = {
      name: userInput,
      size: 7,
    };

    return fetch(`${url}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        variables: {
          condition,
        },
        query,
      }),
    })
      .then(result => {
        return result.json();
      })
      .catch(() => {
        return {
          error: {
            message: 'Failed to fetch',
          },
        };
      });
  }

  function extractIdentities(results: any): Array<IdentityResult> {
    const {
      data: { identitySearch: { identities } } = {
        identitySearch: { identities: [] },
      },
    } = results;
    return identities;
  }

  function transformApiResults(identities: IdentityResult[]) {
    if (identities.length > 0) {
      return identities.map(identity => {
        return <TypeaheadResult key={identity.id} identity={identity} />;
      });
    }

    if (userInput.length >= threshold) {
      return [<li className="psm-typeahead--result">Not found!</li>];
    }
    return [];
  }

  async function handleApiLogic() {
    const results = await searchUsers();
    const identities = extractIdentities(results);
    setSearchResults(transformApiResults(identities));
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchResults([]);
    setUserInput(event.currentTarget.value);
  }

  function handleArrowRight() {
    return onSelect();
  }

  function handleAutocomplete(event: KeyboardEvent<HTMLInputElement>) {
    switch (event.key) {
      case 'Tab':
      case 'ArrowRight':
        handleArrowRight();
        break;
      default:
        return '';
    }
    return {};
  }

  useEffect(() => {
    if (debouncedSearchInput && userInput.length >= threshold) {
      handleApiLogic();
    }
    // eslint-disable-next-line
  }, [threshold, debouncedSearchInput, userInput.length]);

  return (
    <div className={`psm-input-trailing-icon ${className}`} id={testid}>
      <div className="psm-typeahead" id="search">
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
          autoComplete="off"
          type="search"
          value={userInput}
        />
        <button
          aria-label="search icon"
          className="search-psm-icon-svg-search psm-typeahead--icon"
          data-testid={`${testid}--icon`}
          onClick={() => onSelect()}
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
      </div>
      {searchResults.length > 0 && (
        <div className="psm-typeahead--results showResults">
          <ol>{searchResults}</ol>
        </div>
      )}
    </div>
  );
};
