const assert = require('assert');

const ButtonSource = require('./button/Button');
const InputSource = require('./input/Input');
const RadioSource = require('./radio/Radio');
const AlertSource = require('./alert/Alert');
const PaginationSource = require('./pagination/Pagination');
const NavSource = require('./nav/Nav');
const ListSource = require('./list/List');
const ToggleSource = require('./toggle/Toggle');
const TableSource = require('./table/Table');
const CardSource = require('./card/Card');
const HrSource = require('./hr/Hr');
const RolloverSource = require('./rollover/Rollover');
const ChipSource = require('./chip/Chip');
const ModalSource = require('./modal/Modal');
const AvatarSource = require('./avatar/Avatar');
const IconSource = require('./icon/Icon');

export const Button = ButtonSource.default;
export const Input = InputSource.default;
export const Radio = RadioSource.default;
export const Alert = AlertSource.default;
export const Pagination = PaginationSource.default;
export const Nav = NavSource.default;
export const List = ListSource.default;
export const Toggle = ToggleSource.default;
export const Card = CardSource.default;
export const Hr = HrSource.default;
export const Rollover = RolloverSource.default;
export const Chip = ChipSource.default;
export const Modal = ModalSource.default;
export const Avatar = AvatarSource.default;
export const Table = TableSource.default;
export const Icon = IconSource.default;

const Prism = {
  Button,
  Input,
  Radio,
  Alert,
  Pagination,
  Nav,
  List,
  Toggle,
  Card,
  Hr,
  Rollover,
  Chip,
  Modal,
  Avatar,
  Table,
  Icon,
};

export default Prism;
