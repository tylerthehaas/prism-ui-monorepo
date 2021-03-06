import React from 'react';
import { render } from '@testing-library/react';

import Table from './Table';

describe('<Table />', () => {
  it('Box defaults to false', () => {
    const { container } = render(
      <Table
        actions={[
          {
            label: 'Create New Initiative',
            primary: true,
            onClick() {
              alert('Initiative Created');
            },
          },
        ]}
        columns={[
          { label: 'Name', key: 'name' },
          { label: 'Assigned To', key: 'assignedTo' },
          { label: 'Time Remaining', key: 'timeRemaining' },
          { label: 'Status', key: 'status' },
        ]}
        data={[
          {
            name: 'Utilization Awards',
            assignedTo: 'Mark',
            timeRemaining: '50 Days',
            status: 'In Progress',
          },
          {
            name: 'Improvement Cards',
            assignedTo: 'Stephanie',
            timeRemaining: '12 Days',
            status: 'In Progress',
          },
          {
            name: 'Safety Hero',
            assignedTo: 'Steve',
            timeRemaining: '0 Days',
            status: 'Complete',
          },
        ]}
        title="Current Initiatives"
      />,
    );
    expect(container.firstChild.classList).toContain('psm-table__wrapper');
    expect(container.querySelector('table').firstChild.classList).toContain(
      'psm-table-caption',
    );
  });
  it('Box works', () => {
    const { container } = render(
      <Table
        actions={[
          {
            label: 'Create New Initiative',
            primary: true,
            onClick() {
              alert('Initiative Created');
            },
          },
        ]}
        box
        columns={[
          { label: 'Name', key: 'name' },
          { label: 'Assigned To', key: 'assignedTo' },
          { label: 'Time Remaining', key: 'timeRemaining' },
          { label: 'Status', key: 'status' },
        ]}
        data={[
          {
            name: 'Utilization Awards',
            assignedTo: 'Mark',
            timeRemaining: '50 Days',
            status: 'In Progress',
          },
          {
            name: 'Improvement Cards',
            assignedTo: 'Stephanie',
            timeRemaining: '12 Days',
            status: 'In Progress',
          },
          {
            name: 'Safety Hero',
            assignedTo: 'Steve',
            timeRemaining: '0 Days',
            status: 'Complete',
          },
        ]}
        title="Current Initiatives"
      />,
    );
    expect(container.firstChild.classList).toContain('psm-table--box');
  });
});
