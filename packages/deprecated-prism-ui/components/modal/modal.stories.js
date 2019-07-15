import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  array,
  boolean,
  object,
} from '@storybook/addon-knobs';
import Modal from './Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => <Modal />)
  .add('modal trigger', () => <Modal modalTrigger />)
  .add('title', () => <Modal title="this is a title" />)
  .add('actions', () => (
    <Modal
      actions={{
        label: 'this is a label',
        primary: true,
        onClick: () => alert('you have clicked the modal'),
        position: 'left',
        shouldCloseModal: true,
      }}
    />
  ))
  .add('show', () => <Modal show />)
  .add('onClose', () => (
    <Modal onClose={() => alert('the modal has been closed')} />
  ))
  .add('knobs', () => (
    <Modal
      actions={array('Actions', [
        object('Action object', {
          label: text('Action label', 'I am an action'),
          primary: boolean('Primary', true),
          position: text('Position', 'left'),
          shouldCloseModal: boolean('Should close modal', true),
        }),
      ])}
      modalButtonId={text('Modal button ID', '42')}
      modalTrigger={boolean('Modal trigger', true)}
      show={boolean('Show', true)}
      title={text('Title', 'Your highness')}
    />
  ));
