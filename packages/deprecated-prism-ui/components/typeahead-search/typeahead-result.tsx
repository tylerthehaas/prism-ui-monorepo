import React, { MutableRefObject, RefObject } from 'react';
import { IdentityResult } from './types';
import './typeahead-result.scss';

interface TypeaheadResultProps {
  ref?: MutableRefObject<RefObject<unknown>>;
  identity: IdentityResult;
}

export default ({ identity }: TypeaheadResultProps) => {
  const { manager } = identity;
  return (
    <li className="psm-typeahead--result" role="button">
      <div>
        {`${identity.firstName} ${identity.lastName} | ${identity.email}`}
      </div>
      <div className="psm-typeahead--result-sub">
        Leader: {`${manager.firstName} ${manager.lastName}`}
      </div>
    </li>
  );
};
