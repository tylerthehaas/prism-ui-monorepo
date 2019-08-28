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
import ModalNotes from './modal-notes.md';

const textForModal = `INTERVIEWER: this resume is just a vhs tape of you doing karate for 27 minutes.

ME: and?

INTERVIEWER: at minute 13 you don't even break the board. you just kick it and scream ouch.

MOM: that's my fault i held it wrong`;

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Modal
        actions={object('Action object', [
          {
            label: text('Action label', 'I am an action'),
            onClick: () => {
              alert('You clicked the action!');
            },
            primary: boolean('Primary', true),
            position: text('Position', 'left'),
            shouldCloseModal: boolean('Should close modal', true),
          },
        ])}
        modalButtonId={text('Modal button ID', '42')}
        modalTrigger={boolean('Modal trigger', true)}
        title={text('Title', 'Your highness')}
      >
        {textForModal}
      </Modal>
    ),
    {
      notes: {
        markdown: ModalNotes,
      },
    },
  );
