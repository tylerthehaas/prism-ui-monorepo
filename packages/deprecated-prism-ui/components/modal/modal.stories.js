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
        title="New Modal"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Laoreet suspendisse
        interdum consectetur libero id faucibus nisl tincidunt. Nibh ipsum
        consequat nisl vel pretium lectus quam id. Ullamcorper malesuada proin
        libero nunc consequat interdum varius sit amet. Euismod elementum nisi
        quis eleifend quam. Elit pellentesque habitant morbi tristique senectus
        et netus et malesuada. Sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus viverra. Malesuada fames ac turpis egestas maecenas
        pharetra convallis posuere. Fusce id velit ut tortor pretium viverra. Et
        ultrices neque ornare aenean euismod elementum. Sagittis aliquam
        malesuada bibendum arcu vitae. In hac habitasse platea dictumst quisque.
        Eget felis eget nunc lobortis mattis aliquam faucibus purus. Mattis
        pellentesque id nibh tortor id. Aenean et tortor at risus viverra
        adipiscing at. Quis imperdiet massa tincidunt nunc. Elit ullamcorper
        dignissim cras tincidunt lobortis. At imperdiet dui accumsan sit amet.
        Proin sagittis nisl rhoncus mattis rhoncus. Tellus at urna condimentum
        mattis pellentesque id nibh tortor. Pellentesque dignissim enim sit amet
        venenatis. Phasellus faucibus scelerisque eleifend donec pretium
        vulputate sapien nec sagittis. Penatibus et magnis dis parturient montes
        nascetur ridiculus. Venenatis a condimentum vitae sapien pellentesque
        habitant morbi tristique senectus. Varius sit amet mattis vulputate enim
        nulla aliquet. Ultrices dui sapien eget mi proin sed libero enim sed.
        Massa ultricies mi quis hendrerit dolor magna eget est lorem.
        Pellentesque habitant morbi tristique senectus et. Sit amet venenatis
        urna cursus eget nunc. Vulputate enim nulla aliquet porttitor lacus
        luctus accumsan. Justo eget magna fermentum iaculis. Mi proin sed libero
        enim sed faucibus turpis in eu. Nunc sed augue lacus viverra. Sit amet
        porttitor eget dolor morbi non. Tristique risus nec feugiat in fermentum
        posuere. Elementum sagittis vitae et leo duis ut. Laoreet non curabitur
        gravida arcu ac tortor dignissim. Libero volutpat sed cras ornare arcu
        dui vivamus arcu felis. Urna condimentum mattis pellentesque id nibh
        tortor id aliquet. Elit pellentesque habitant morbi tristique senectus.
        Egestas sed tempus urna et pharetra. Purus gravida quis blandit turpis
        cursus in hac habitasse. Mauris nunc congue nisi vitae suscipit tellus
        mauris a diam. Morbi non arcu risus quis varius quam quisque. Odio
        pellentesque diam volutpat commodo sed egestas egestas. Vitae elementum
        curabitur vitae nunc sed velit. Sed faucibus turpis in eu mi. Vitae
        congue mauris rhoncus aenean vel elit. Tortor at auctor urna nunc id
        cursus metus aliquam eleifend. Fermentum dui faucibus in ornare quam
        viverra orci. Bibendum ut tristique et egestas. Ipsum dolor sit amet
        consectetur. Nibh ipsum consequat nisl vel pretium lectus. Duis
        convallis convallis tellus id interdum velit laoreet. Porttitor lacus
        luctus accumsan tortor. Nisl suscipit adipiscing bibendum est. Molestie
        at elementum eu facilisis sed odio. Eget est lorem ipsum dolor sit. Eget
        gravida cum sociis natoque penatibus. Ut sem viverra aliquet eget sit
        amet. Fermentum iaculis eu non diam phasellus vestibulum. Placerat
        vestibulum lectus mauris ultrices. Enim diam vulputate ut pharetra sit
        amet aliquam. Justo nec ultrices dui sapien eget mi proin sed. Turpis
        nunc eget lorem dolor sed viverra ipsum nunc. Pellentesque pulvinar
        pellentesque habitant morbi tristique senectus. Non sodales neque
        sodales ut etiam sit amet nisl purus. Risus quis varius quam quisque.
        Odio morbi quis commodo odio aenean sed adipiscing diam. Sit amet risus
        nullam eget felis eget. Ornare arcu odio ut sem nulla. Et egestas quis
        ipsum suspendisse ultrices. Est ullamcorper eget nulla facilisi etiam
        dignissim diam. Diam sit amet nisl suscipit adipiscing. In nisl nisi
        scelerisque eu ultrices vitae. Purus gravida quis blandit turpis. Mattis
        molestie a iaculis at erat pellentesque. Lacus luctus accumsan tortor
        posuere ac ut consequat. Turpis tincidunt id aliquet risus feugiat in.
        Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Erat velit
        scelerisque in dictum non consectetur a. Adipiscing diam donec
        adipiscing tristique risus. Eu non diam phasellus vestibulum lorem sed
        risus. Cursus turpis massa tincidunt dui ut ornare lectus. Volutpat
        consequat mauris nunc congue nisi vitae suscipit. Quam adipiscing vitae
        proin sagittis nisl rhoncus mattis rhoncus. Pellentesque pulvinar
        pellentesque habitant morbi. Magna fermentum iaculis eu non diam
        phasellus vestibulum. Sit amet aliquam id diam maecenas. Lobortis
        feugiat vivamus at augue eget arcu. Semper viverra nam libero justo.
        Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Risus
        in hendrerit gravida rutrum quisque. Vestibulum rhoncus est pellentesque
        elit. Vitae et leo duis ut diam quam nulla porttitor. Sed vulputate mi
        sit amet mauris commodo quis imperdiet. Nisl nunc mi ipsum faucibus
        vitae aliquet nec ullamcorper. Quam vulputate dignissim suspendisse in
        est ante in. Est sit amet facilisis magna. Augue lacus viverra vitae
        congue eu. Suscipit adipiscing bibendum est ultricies integer quis
        auctor. Scelerisque purus semper eget duis at tellus at urna. Ut sem
        viverra aliquet eget sit amet tellus. Feugiat nisl pretium fusce id
        velit ut tortor pretium. Arcu ac tortor dignissim convallis aenean et
        tortor. Diam volutpat commodo sed egestas egestas fringilla phasellus.
        Convallis posuere morbi leo urna molestie at elementum eu facilisis.
        Nunc sed augue lacus viverra vitae congue eu. Viverra suspendisse
        potenti nullam ac. Aenean sed adipiscing diam donec adipiscing tristique
        risus nec feugiat. Tellus orci ac auctor augue mauris augue neque
        gravida. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet.
        Faucibus ornare suspendisse sed nisi. Adipiscing bibendum est ultricies
        integer quis auctor elit. Blandit cursus risus at ultrices mi tempus
        imperdiet nulla malesuada. Justo laoreet sit amet cursus sit amet dictum
        sit. Ultrices neque ornare aenean euismod elementum nisi quis. Aliquet
        sagittis id consectetur purus ut faucibus pulvinar. Eu ultrices vitae
        auctor eu. Lectus proin nibh nisl condimentum id venenatis a
        condimentum. Vitae congue eu consequat ac felis donec et odio
        pellentesque. Pellentesque adipiscing commodo elit at imperdiet dui.
        Placerat orci nulla pellentesque dignissim. Lectus quam id leo in vitae.
        Lobortis feugiat vivamus at augue eget arcu dictum varius. Neque egestas
        congue quisque egestas. Quisque non tellus orci ac auctor augue mauris.
        Condimentum id venenatis a condimentum vitae sapien pellentesque
        habitant. Feugiat in fermentum posuere urna nec tincidunt praesent
        semper feugiat. Commodo quis imperdiet massa tincidunt nunc pulvinar
        sapien et. Purus semper eget duis at tellus at urna condimentum mattis.
        Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Tempus
        iaculis urna id volutpat. Dignissim diam quis enim lobortis scelerisque
        fermentum dui faucibus. Enim sit amet venenatis urna. Ut faucibus
        pulvinar elementum integer enim neque volutpat ac tincidunt. Leo integer
        malesuada nunc vel risus commodo viverra maecenas. Vestibulum rhoncus
        est pellentesque elit ullamcorper dignissim cras tincidunt lobortis.
        Auctor augue mauris augue neque. Venenatis urna cursus eget nunc
        scelerisque viverra mauris in. Etiam non quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Elementum curabitur vitae nunc sed velit
        dignissim sodales ut. Viverra accumsan in nisl nisi scelerisque eu
        ultrices vitae auctor. Pulvinar mattis nunc sed blandit libero volutpat
        sed cras. Viverra maecenas accumsan lacus vel facilisis. Arcu felis
        bibendum ut tristique et egestas quis. In hendrerit gravida rutrum
        quisque non tellus orci. In eu mi bibendum neque egestas congue quisque.
        Commodo elit at imperdiet dui. Ac feugiat sed lectus vestibulum mattis
        ullamcorper velit sed ullamcorper. Sit amet dictum sit amet justo donec
        enim diam. Sagittis purus sit amet volutpat consequat mauris nunc congue
        nisi. At lectus urna duis convallis. Mi bibendum neque egestas congue
        quisque. Sed vulputate mi sit amet mauris commodo quis imperdiet. Et
        sollicitudin ac orci phasellus. Bibendum enim facilisis gravida neque
        convallis a cras. Massa id neque aliquam vestibulum morbi. In dictum non
        consectetur a erat nam at lectus. Quis risus sed vulputate odio ut enim
        blandit. Mattis pellentesque id nibh tortor. Enim ut sem viverra
        aliquet. Nec feugiat nisl pretium fusce id velit ut. Iaculis at erat
        pellentesque adipiscing. Viverra adipiscing at in tellus integer feugiat
        scelerisque varius morbi. Ut consequat semper viverra nam libero justo
        laoreet. In hac habitasse platea dictumst vestibulum. Amet venenatis
        urna cursus eget nunc scelerisque viverra mauris. Mattis rhoncus urna
        neque viverra justo. Senectus et netus et malesuada fames ac turpis
        egestas. At auctor urna nunc id. Vivamus arcu felis bibendum ut
        tristique. Ac tincidunt vitae semper quis lectus nulla. Ac felis donec
        et odio. Amet massa vitae tortor condimentum lacinia quis vel. Augue
        interdum velit euismod in pellentesque massa. Amet purus gravida quis
        blandit turpis cursus in hac habitasse. Vestibulum morbi blandit cursus
        risus at ultrices mi tempus. In est ante in nibh mauris. Donec massa
        sapien faucibus et molestie ac feugiat sed. Non enim praesent elementum
        facilisis leo vel. Faucibus turpis in eu mi. Eu sem integer vitae justo
        eget magna fermentum. Ultricies mi quis hendrerit dolor magna eget est.
        Mauris augue neque gravida in fermentum et sollicitudin ac. Tempor orci
        dapibus ultrices in iaculis. Scelerisque eleifend donec pretium
        vulputate sapien nec sagittis aliquam. Volutpat blandit aliquam etiam
        erat. Nullam non nisi est sit amet facilisis. Pellentesque sit amet
        porttitor eget dolor morbi non arcu. Molestie nunc non blandit massa
        enim. Ullamcorper eget nulla facilisi etiam dignissim diam. Feugiat nibh
        sed pulvinar proin gravida hendrerit. Morbi non arcu risus quis varius
        quam quisque id diam. Arcu non sodales neque sodales. Quam id leo in
        vitae turpis. Et malesuada fames ac turpis egestas sed tempus urna et.
        Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Nulla
        malesuada pellentesque elit eget gravida cum sociis natoque. Nulla
        malesuada pellentesque elit eget gravida. Non pulvinar neque laoreet
        suspendisse interdum consectetur libero id. Proin nibh nisl condimentum
        id venenatis a condimentum. Eget duis at tellus at urna condimentum
        mattis pellentesque id. Sagittis eu volutpat odio facilisis mauris sit.
        Accumsan lacus vel facilisis volutpat est velit egestas. A iaculis at
        erat pellentesque adipiscing commodo elit. Ipsum dolor sit amet
        consectetur. Volutpat lacus laoreet non curabitur. Mi quis hendrerit
        dolor magna eget. Consequat id porta nibh venenatis cras. Cum sociis
        natoque penatibus et magnis. Ligula ullamcorper malesuada proin libero
        nunc consequat. Tincidunt lobortis feugiat vivamus at augue eget arcu
        dictum. Aliquet bibendum enim facilisis gravida. Pretium aenean pharetra
        magna ac placerat. Nunc faucibus a pellentesque sit amet porttitor.
        Vivamus arcu felis bibendum ut tristique et. Integer eget aliquet nibh
        praesent tristique magna. Sit amet consectetur adipiscing elit ut
        aliquam purus sit amet. Cras semper auctor neque vitae tempus quam
        pellentesque. Aenean euismod elementum nisi quis. Ac tortor vitae purus
        faucibus ornare suspendisse sed. Imperdiet massa tincidunt nunc pulvinar
        sapien et ligula. Aliquet risus feugiat in ante metus dictum at. Ut
        tristique et egestas quis ipsum suspendisse ultrices gravida. Pretium
        fusce id velit ut tortor. Mauris a diam maecenas sed enim ut. Habitasse
        platea dictumst vestibulum rhoncus est pellentesque elit. Nec feugiat in
        fermentum posuere urna nec tincidunt praesent. Quam nulla porttitor
        massa id. Quis vel eros donec ac odio tempor orci dapibus. Eget felis
        eget nunc lobortis mattis aliquam faucibus. Massa ultricies mi quis
        hendrerit dolor magna. Volutpat ac tincidunt vitae semper. Dictum non
        consectetur a erat nam at lectus urna duis. Sem nulla pharetra diam sit
        amet. Elementum pulvinar etiam non quam. Id donec ultrices tincidunt
        arcu non. A iaculis at erat pellentesque adipiscing commodo elit at.
        Semper feugiat nibh sed pulvinar proin gravida. Est velit egestas dui id
        ornare arcu odio. Aliquam vestibulum morbi blandit cursus. Vitae proin
        sagittis nisl rhoncus mattis. Scelerisque viverra mauris in aliquam sem.
        Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Elit
        pellentesque habitant morbi tristique senectus et netus et malesuada.
        Fames ac turpis egestas integer eget. Suspendisse interdum consectetur
        libero id faucibus nisl tincidunt. Velit sed ullamcorper morbi tincidunt
        ornare massa eget. Neque vitae tempus quam pellentesque nec nam aliquam
        sem. Vitae tortor condimentum lacinia quis vel eros donec. Est
        pellentesque elit ullamcorper dignissim cras. Cursus vitae congue mauris
        rhoncus aenean vel elit. Maecenas accumsan lacus vel facilisis volutpat
        est velit. Vestibulum lectus mauris ultrices eros in cursus turpis
        massa. Dictum varius duis at consectetur lorem donec. Vulputate enim
        nulla aliquet porttitor lacus luctus accumsan tortor. Tincidunt arcu non
        sodales neque. Sed egestas egestas fringilla phasellus faucibus
        scelerisque. Quis hendrerit dolor magna eget est lorem ipsum. Donec ac
        odio tempor orci dapibus ultrices. Sodales neque sodales ut etiam sit
        amet nisl. Dui sapien eget mi proin sed. Luctus venenatis lectus magna
        fringilla urna porttitor rhoncus dolor purus. Ante metus dictum at
        tempor. Faucibus interdum posuere lorem ipsum dolor sit. Pretium lectus
        quam id leo in vitae. Aliquet bibendum enim facilisis gravida. Urna id
        volutpat lacus laoreet non curabitur gravida arcu. Vitae purus faucibus
        ornare suspendisse sed nisi. Ut tristique et egestas quis ipsum
        suspendisse. Libero volutpat sed cras ornare. Varius morbi enim nunc
        faucibus a pellentesque sit amet. Vitae ultricies leo integer malesuada
        nunc vel risus commodo viverra. Non pulvinar neque laoreet suspendisse.
        Nibh venenatis cras sed felis eget velit. Bibendum est ultricies integer
        quis auctor elit sed vulputate. Turpis massa sed elementum tempus
        egestas sed sed risus. Sed viverra tellus in hac habitasse. Et leo duis
        ut diam quam nulla porttitor massa. Aliquam malesuada bibendum arcu
        vitae elementum curabitur. Tortor id aliquet lectus proin. Ultricies
        lacus sed turpis tincidunt. Libero volutpat sed cras ornare arcu dui
        vivamus. Dui vivamus arcu felis bibendum ut. Tortor at auctor urna nunc
        id. Turpis egestas maecenas pharetra convallis posuere morbi leo urna
        molestie. Eleifend mi in nulla posuere sollicitudin aliquam ultrices
        sagittis orci. Nullam eget felis eget nunc lobortis mattis. Hendrerit
        dolor magna eget est lorem ipsum dolor. Aliquet sagittis id consectetur
        purus. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Ultrices
        sagittis orci a scelerisque purus semper eget. Ac ut consequat semper
        viverra nam libero. Et malesuada fames ac turpis egestas sed. Diam
        maecenas ultricies mi eget mauris pharetra et. Blandit cursus risus at
        ultrices mi tempus imperdiet nulla malesuada. Vel pretium lectus quam
        id.
      </Modal>
    </>
  );
}

ModalDocs.displayName = 'Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('default', () => <ModalDocs />)
  .add('title', () => <Modal title="this is a title" />)
  .add('actions', () => (
    <Modal
      actions={[
        {
          label: 'this is a label',
          primary: true,
          onClick: () => alert('you have clicked the modal'),
          position: 'left',
          shouldCloseModal: true,
        },
      ]}
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
