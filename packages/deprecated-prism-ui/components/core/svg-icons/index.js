import React from 'react';
import PropTypes from 'prop-types';

import Add from './svg/add.js';
import Agenda from './svg/agenda.js';
import Align from './svg/align.js';
import Announcements from './svg/announcements.js';
import ArrowDown from './svg/arrow-down.js';
import ArrowLeft from './svg/arrow-left.js';
import ArrowRight from './svg/arrow-right.js';
import ArrowSmallDown from './svg/arrow-small-down.js';
import ArrowSmallLeft from './svg/arrow-small-left.js';
import ArrowSmallRight from './svg/arrow-small-right.js';
import ArrowSmallUp from './svg/arrow-small-up.js';
import ArrowTailDown from './svg/arrow-tail-down.js';
import ArrowTailLeft from './svg/arrow-tail-left.js';
import ArrowTailRight from './svg/arrow-tail-right.js';
import ArrowTailUp from './svg/arrow-tail-up.js';
import ArrowTriangleDown from './svg/arrow-triangle-down.js';
import ArrowTriangleLeft from './svg/arrow-triangle-left.js';
import ArrowTriangleRight from './svg/arrow-triangle-right.js';
import ArrowTriangleUp from './svg/arrow-triangle-up.js';
import ArrowUp from './svg/arrow-up.js';
import Attachment from './svg/attachment.js';
import AvatarAdd from './svg/avatar-add.js';
import AvatarCheck from './svg/avatar-check.js';
import AvatarCircle from './svg/avatar-circle.js';
import Avatar from './svg/avatar.js';
import BookmarkFilled from './svg/bookmark-filled.js';
import BookmarkUnfilled from './svg/bookmark-unfilled.js';
import Bulletpoint from './svg/bulletpoint.js';
import CalendarAdd from './svg/calendar-add.js';
import Calendar from './svg/calendar.js';
import Chart from './svg/chart.js';
import ChatEmpty from './svg/chat-empty.js';
import ChatFilled from './svg/chat-filled.js';
import ChatGroup from './svg/chat-group.js';
import Check from './svg/check.js';
import CheckboxFill from './svg/checkbox-fill.js';
import CheckboxUnselected from './svg/checkbox-unselected.js';
import Close from './svg/close.js';
import Desktop from './svg/desktop.js';
import Document from './svg/document.js';
import DownloadCloud from './svg/download-cloud.js';
import Download from './svg/download.js';
import EditNote from './svg/edit-note.js';
import Eye from './svg/eye.js';
import Filter from './svg/filter.js';
import Flag from './svg/flag.js';
import Globe from './svg/globe.js';
import Goal from './svg/goal.js';
import Group from './svg/group.js';
import HeartEmpty from './svg/heart-empty.js';
import HeartFilled from './svg/heart-filled.js';
import Image from './svg/image.js';
import InboxCheck from './svg/inbox-check.js';
import InformationCircle from './svg/information-circle.js';
import InvoiceSpreadsheet from './svg/invoice-spreadsheet.js';
import Loader from './svg/loader.js';
import Lock from './svg/lock.js';
import Mail from './svg/mail.js';
import MenuDots from './svg/menu-dots.js';
import MenuHamburger from './svg/menu-hamburger.js';
import Notification from './svg/notification.js';
import OneOnOne from './svg/one-on-one.js';
import Pause from './svg/pause.js';
import Person from './svg/person.js';
import PlayScreen from './svg/play-screen.js';
import Play from './svg/play.js';
import Power from './svg/power.js';
import Print from './svg/print.js';
import RadioSelect from './svg/radio-select.js';
import RadioUnselect from './svg/radio-unselect.js';
import Refresh from './svg/refresh.js';
import Releases from './svg/releases.js';
import RoadMap from './svg/road-map.js';
import Search from './svg/search.js';

const Icon = props => {
  switch (props.name) {
    case 'add':
      return <Add {...props} />;
    case 'agenda':
      return <Agenda {...props} />;
    case 'align':
      return <Align {...props} />;
    case 'announcements':
      return <Announcements {...props} />;
    case 'arrow-down':
    case 'stre-down':
      return <ArrowDown {...props} />;
    case 'arrow-left':
    case 'stre-left':
      return <ArrowLeft {...props} />;
    case 'arrow-right':
    case 'stre-right':
      return <ArrowRight {...props} />;
    case 'arrow-small-down':
    case 'small-down':
      return <ArrowSmallDown {...props} />;
    case 'arrow-small-left':
    case 'small-left':
      return <ArrowSmallLeft {...props} />;
    case 'arrow-small-right':
    case 'small-right':
      return <ArrowSmallRight {...props} />;
    case 'arrow-small-up':
    case 'small-up':
      return <ArrowSmallUp {...props} />;
    case 'arrow-tail-down':
    case 'tail-down':
      return <ArrowTailDown {...props} />;
    case 'arrow-tail-left':
    case 'tail-left':
      return <ArrowTailLeft {...props} />;
    case 'arrow-tail-right':
    case 'tail-right':
      return <ArrowTailRight {...props} />;
    case 'arrow-tail-up':
    case 'tail-up':
      return <ArrowTailUp {...props} />;
    case 'arrow-triangle-down':
    case 'small-triangle-down':
      return <ArrowTriangleDown {...props} />;
    case 'arrow-triangle-left':
    case 'small-triangle-left':
      return <ArrowTriangleLeft {...props} />;
    case 'arrow-triangle-right':
    case 'small-triangle-right':
      return <ArrowTriangleRight {...props} />;
    case 'arrow-triangle-up':
    case 'small-triangle-up':
      return <ArrowTriangleUp {...props} />;
    case 'arrow-up':
    case 'stre-up':
      return <ArrowUp {...props} />;
    case 'attachment':
    case 'attach':
      return <Attachment {...props} />;
    case 'avatar-add':
      return <AvatarAdd {...props} />;
    case 'a-check':
    case 'avatar-check':
      return <AvatarCheck {...props} />;
    case 'avatar-circle':
      return <AvatarCircle {...props} />;
    case 'avatar':
      return <Avatar {...props} />;
    case 'bookmark-filled':
      return <BookmarkFilled {...props} />;
    case 'bookmark-unfilled':
      return <BookmarkUnfilled {...props} />;
    case 'bulletpoint':
    case 'bullet-list':
      return <Bulletpoint {...props} />;
    case 'calendar-add':
      return <CalendarAdd {...props} />;
    case 'calendar':
      return <Calendar {...props} />;
    case 'chart':
    case 'chart-bar':
      return <Chart {...props} />;
    case 'chat-empty':
    case 'chat':
      return <ChatEmpty {...props} />;
    case 'chat-filled':
    case 'chat-alt':
      return <ChatFilled {...props} />;
    case 'chat-group':
    case 'conversation':
      return <ChatGroup {...props} />;
    case 'check':
      return <Check {...props} />;
    case 'checkbox-fill':
      return <CheckboxFill {...props} />;
    case 'checkbox-unselected':
      return <CheckboxUnselected {...props} />;
    case 'close':
    case 'simple-remove':
      return <Close {...props} />;
    case 'desktop':
      return <Desktop {...props} />;
    case 'document':
      return <Document {...props} />;
    case 'download-cloud':
    case 'cloud-download':
      return <DownloadCloud {...props} />;
    case 'download':
    case 'block-down':
      return <Download {...props} />;
    case 'edit-note':
      return <EditNote {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'filter':
      return <Filter {...props} />;
    case 'flag':
    case 'flag-points':
      return <Flag {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'goal':
      return <Goal {...props} />;
    case 'group':
      return <Group {...props} />;
    case 'heart-empty':
    case 'heartbeat':
      return <HeartEmpty {...props} />;
    case 'heart-filled':
    case 'heart':
      return <HeartFilled {...props} />;
    case 'image':
      return <Image {...props} />;
    case 'inbox-check':
    case 'archive-check':
      return <InboxCheck {...props} />;
    case 'information-circle':
    case 'alert-circle-i':
      return <InformationCircle {...props} />;
    case 'invoice-spreadsheet':
      return <InvoiceSpreadsheet {...props} />;
    case 'loader':
      return <Loader {...props} />;
    case 'lock':
      return <Lock {...props} />;
    case 'mail':
    case 'email':
      return <Mail {...props} />;
    case 'menu-dots':
      return <MenuDots {...props} />;
    case 'menu-hamburger':
    case 'menu':
      return <MenuHamburger {...props} />;
    case 'notification':
    case 'bell':
      return <Notification {...props} />;
    case 'one-on-one':
      return <OneOnOne {...props} />;
    case 'pause':
      return <Pause {...props} />;
    case 'person':
      return <Person {...props} />;
    case 'play-screen':
      return <PlayScreen {...props} />;
    case 'play':
      return <Play {...props} />;
    case 'power':
      return <Power {...props} />;
    case 'print':
      return <Print {...props} />;
    case 'radio-select':
      return <RadioSelect {...props} />;
    case 'radio-unselect':
      return <RadioUnselect {...props} />;
    case 'refresh':
      return <Refresh {...props} />;
    case 'releases':
      return <Releases {...props} />;
    case 'road-map':
      return <RoadMap {...props} />;
    case 'search':
      return <Search {...props} />;
    default:
      return <div>Not Working :(</div>;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
