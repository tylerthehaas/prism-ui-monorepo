import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  array,
  boolean,
  object,
} from '@storybook/addon-knobs';
import Modal from './Modal';
import Button from '../button/Button';

function ModalDocs() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal show={show} onClose={() => setShow(false)} title="Default Modal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse
        interdum consectetur libero id faucibus nisl tincidunt. Nibh ipsum
        consequat nisl vel pretium lectus quam id. Ullamcorper malesuada proin
        libero nunc consequat interdum varius sit amet. Euismod elementum nisi
        quis eleifend quam.
      </Modal>
    </>
  );
}

function ModalTitle(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal
        show={show}
        actions={[
          {
            label: "I don't actually do anything right now",
            primary: true,
            onClick: () =>
              console.log("You just had to test it anyway, didn't you?"),
            shouldCloseModal: true,
          },
          {
            label: "I'm for testing",
            primary: false,
            onClick: () => {},
          },
        ]}
        onClose={() => setShow(false)}
        {...props}
      />
    </>
  );
}

function ModalActions(props) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        title="modal"
        {...props}
      />
    </>
  );
}

function ModalShow() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal show={show} onClose={() => setShow(false)} title="modal" />
    </>
  );
}

function ModalClose() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal
        show={show}
        title="modal"
        onClose={() => {
          alert('the modal has been closed');
          setShow(false);
        }}
      />
    </>
  );
}

function ModalKnobs(props) {
  const [show, setShow] = useState(true);
  return (
    <>
      <Button onClick={() => setShow(true)}>Click</Button>
      <Modal
        show={show}
        onClose={() => {
          setShow(false);
        }}
        {...props}
      />
    </>
  );
}

ModalDocs.displayName = 'Modal';
ModalTitle.displayName = 'Modal';
ModalActions.displayName = 'Modal';
ModalShow.displayName = 'Modal';
ModalClose.displayName = 'Modal';
ModalKnobs.displayName = 'Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => <ModalDocs />)
  .add('title', () => <ModalTitle title="this is a title" />)
  .add('actions', () => (
    <ModalActions
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
  .add('show', () => <ModalShow show />)
  .add('onClose', () => (
    <ModalClose
      onClose={() => {
        alert('the modal has been closed');
        // eslint-disable-next-line no-undef
        setShow(false);
      }}
    />
  ))
  .add('knobs', () => (
    <ModalKnobs
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
    />
  ));
