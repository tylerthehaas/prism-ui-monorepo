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

const textForModal = `INTERVIEWER: this resume is just a vhs tape of you doing karate for 27 minutes.

ME: and?

INTERVIEWER: at minute 13 you don’t even break the board. you just kick it and scream ouch.

MOM: that’s my fault i held it wrong`;

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => <Modal modalTrigger />)
  .add('title', () => <Modal modalTrigger title="this is a title" />)
  .add('actions', () => (
    <Modal
      modalTrigger
      actions={[
        {
          label: 'This is an action',
          primary: true,
          onClick: () => alert('you have clicked the action'),
          position: 'left',
          shouldCloseModal: true,
        },
      ]}
    />
  ))
  .add('show', () => (
    <Modal show title="this exists solely to satisfy a test" />
  ))
  .add('onClose', () => (
    <Modal
      modalTrigger
      onClose={() => {
        alert('the modal has been closed');
      }}
    />
  ))
  .add('knobs', () => (
    <Modal
      actions={array('Actions', [
        object('Action object', {
          label: text('Action label', 'I am an action'),
          onClick: () => {
            alert('You clicked the action!');
          },
          primary: boolean('Primary', true),
          position: text('Position', 'left'),
          shouldCloseModal: boolean('Should close modal', true),
        }),
      ])}
      modalButtonId={text('Modal button ID', '42')}
      modalTrigger={boolean('Modal trigger', true)}
      title={text('Title', 'Your highness')}
    >
      {textForModal}
    </Modal>
  ));
