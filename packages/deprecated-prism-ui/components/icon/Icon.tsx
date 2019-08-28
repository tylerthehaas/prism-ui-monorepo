/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Add from './svg/add';
import Agenda from './svg/agenda';
import Align from './svg/align';
import Announcements from './svg/announcements';
import ArrowDown from './svg/arrow-down';
import ArrowLeft from './svg/arrow-left';
import ArrowRight from './svg/arrow-right';
import ArrowSmallDown from './svg/arrow-small-down';
import ArrowSmallLeft from './svg/arrow-small-left';
import ArrowSmallRight from './svg/arrow-small-right';
import ArrowSmallUp from './svg/arrow-small-up';
import ArrowTailDown from './svg/arrow-tail-down';
import ArrowTailLeft from './svg/arrow-tail-left';
import ArrowTailRight from './svg/arrow-tail-right';
import ArrowTailUp from './svg/arrow-tail-up';
import ArrowTriangleDown from './svg/arrow-triangle-down';
import ArrowTriangleLeft from './svg/arrow-triangle-left';
import ArrowTriangleRight from './svg/arrow-triangle-right';
import ArrowTriangleUp from './svg/arrow-triangle-up';
import ArrowUp from './svg/arrow-up';
import Attachment from './svg/attachment';
import AvatarAdd from './svg/avatar-add';
import AvatarCheck from './svg/avatar-check';
import AvatarCircle from './svg/avatar-circle';
import Avatar from './svg/avatar';
import BookmarkFilled from './svg/bookmark-filled';
import BookmarkUnfilled from './svg/bookmark-unfilled';
import Bulletpoint from './svg/bulletpoint';
import CalendarAdd from './svg/calendar-add';
import Calendar from './svg/calendar';
import Chart from './svg/chart';
import ChatEmpty from './svg/chat-empty';
import ChatFilled from './svg/chat-filled';
import ChatGroup from './svg/chat-group';
import Check from './svg/check';
import CheckboxFill from './svg/checkbox-fill';
import CheckboxUnselected from './svg/checkbox-unselected';
import Close from './svg/close';
import Desktop from './svg/desktop';
import Document from './svg/document';
import DownloadCloud from './svg/download-cloud';
import Download from './svg/download';
import EditNote from './svg/edit-note';
import Eye from './svg/eye';
import Filter from './svg/filter';
import Flag from './svg/flag';
import Globe from './svg/globe';
import Goal from './svg/goal';
import Group from './svg/group';
import HeartEmpty from './svg/heart-empty';
import HeartFilled from './svg/heart-filled';
import Image from './svg/image';
import InboxCheck from './svg/inbox-check';
import InformationCircle from './svg/information-circle';
import InvoiceSpreadsheet from './svg/invoice-spreadsheet';
import Loader from './svg/loader';
import Lock from './svg/lock';
import Mail from './svg/mail';
import MenuDots from './svg/menu-dots';
import MenuHamburger from './svg/menu-hamburger';
import Notification from './svg/notification';
import OneOnOne from './svg/one-on-one';
import Pause from './svg/pause';
import Person from './svg/person';
import PlayScreen from './svg/play-screen';
import Play from './svg/play';
import Power from './svg/power';
import Print from './svg/print';
import RadioSelect from './svg/radio-select';
import RadioUnselect from './svg/radio-unselect';
import Refresh from './svg/refresh';
import Releases from './svg/releases';
import RoadMap from './svg/road-map';
import Search from './svg/search';
import Select from './svg/select';
import Send from './svg/send';
import SettingsGear from './svg/settings-gear';
import Share from './svg/share';
import Share2 from './svg/share2';
import ShoppingCart from './svg/shopping-cart';
import StarFilled from './svg/star-filled';
import Tag from './svg/tag';
import Trash from './svg/trash';
import Trophy from './svg/trophy';
import Unlock from './svg/unlock';
import Wellness from './svg/wellness';
import Yearbook from './svg/yearbook';
import ZoomIn from './svg/zoom-in';

export type IconNames =
  | 'add'
  | 'agenda'
  | 'alert-circle-i'
  | 'align'
  | 'announcements'
  | 'archive-check'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-small-down'
  | 'arrow-small-left'
  | 'arrow-small-right'
  | 'arrow-small-up'
  | 'arrow-tail-down'
  | 'arrow-tail-left'
  | 'arrow-tail-right'
  | 'arrow-tail-up'
  | 'arrow-triangle-down'
  | 'arrow-triangle-left'
  | 'arrow-triangle-right'
  | 'arrow-triangle-up'
  | 'arrow-up'
  | 'attach'
  | 'attachment'
  | 'avatar'
  | 'avatar-add'
  | 'avatar-check'
  | 'avatar-circle'
  | 'a-check'
  | 'bell'
  | 'block-down'
  | 'bookmark-filled'
  | 'bookmark-unfilled'
  | 'bulletpoint'
  | 'bullet-list'
  | 'calendar'
  | 'calendar-add'
  | 'chart'
  | 'chart-bar'
  | 'chat'
  | 'chat-alt'
  | 'chat-empty'
  | 'chat-filled'
  | 'chat-group'
  | 'check'
  | 'checkbox-fill'
  | 'checkbox-unselected'
  | 'cloud-download'
  | 'close'
  | 'conversation'
  | 'desktop'
  | 'document'
  | 'download'
  | 'download-cloud'
  | 'edit-note'
  | 'email'
  | 'eye'
  | 'favorite'
  | 'flag'
  | 'filter'
  | 'flag-points'
  | 'globe'
  | 'goal'
  | 'group'
  | 'heart-empty'
  | 'heart-filled'
  | 'image'
  | 'inbox-check'
  | 'information-circle'
  | 'invoice-spreadsheet'
  | 'loader'
  | 'lock'
  | 'mail'
  | 'menu'
  | 'menu-dots'
  | 'menu-hamburger'
  | 'notification'
  | 'one-on-one'
  | 'pause'
  | 'person'
  | 'play'
  | 'play-screen'
  | 'power'
  | 'print'
  | 'radio-select'
  | 'radio-unselect'
  | 'refresh'
  | 'releases'
  | 'road-map'
  | 'search'
  | 'select'
  | 'send'
  | 'settings-gear'
  | 'share'
  | 'share2'
  | 'shopping-cart'
  | 'simple-remove'
  | 'small-down'
  | 'small-left'
  | 'small-right'
  | 'small-triangle-down'
  | 'small-triangle-left'
  | 'small-triangle-right'
  | 'small-triangle-up'
  | 'small-up'
  | 'star-filled'
  | 'stre-down'
  | 'stre-left'
  | 'stre-right'
  | 'stre-up'
  | 'tag'
  | 'tail-down'
  | 'tail-left'
  | 'tail-right'
  | 'tail-up'
  | 'trash'
  | 'trophy'
  | 'unlock'
  | 'wellness'
  | 'yearbook'
  | 'zoom'
  | 'zoom-in';

export type IconProps = {
  iconName: IconNames;
  height?: string;
  width?: string;
  fill?: string;
  className?: string;
};

const IconSelect = (props: IconProps) => {
  switch (props.iconName) {
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
      return <HeartEmpty {...props} />;
    case 'heart-filled':
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
    case 'select':
      return <Select {...props} />;
    case 'send':
      return <Send {...props} />;
    case 'settings-gear':
      return <SettingsGear {...props} />;
    case 'share':
      return <Share {...props} />;
    case 'share2':
      return <Share2 {...props} />;
    case 'shopping-cart':
      return <ShoppingCart {...props} />;
    case 'star-filled':
    case 'favorite':
      return <StarFilled {...props} />;
    case 'tag':
      return <Tag {...props} />;
    case 'trash':
      return <Trash {...props} />;
    case 'trophy':
      return <Trophy {...props} />;
    case 'unlock':
      return <Unlock {...props} />;
    case 'wellness':
      return <Wellness {...props} />;
    case 'yearbook':
      return <Yearbook {...props} />;
    case 'zoom':
    case 'zoom-in':
      return <ZoomIn {...props} />;
    default:
      return <div>Not Working :(</div>;
  }
};

export default IconSelect;
