import Settings from './settings.svg';
import Dashboard from './Dashboards.svg';
import Home from './Home.svg';
import Cash from './Cash.svg';
import Collection from './Collections.svg';
import Customers from './Customers.svg';
import Reports from './Reports.svg';
import Support from './Support.svg';
import Alert from './Alerts.svg';
import Aging from './Aging.svg';
import Notifications from './Notifications.svg';
import Logout from './logout.svg';
import ArrwoLeftWhite from './arrowLeftWhite2.svg';
import Ring from './ring.svg';
import CardIcon from '../Svgs/card.svg';
import AllConntracts from '../Svgs/allConntracts.svg';
import FAQ from '../Svgs/FAQ.svg';
import Help from '../Svgs/help.svg';
import Lock from '../Svgs/lock.svg';
import LogOut from '../Svgs/powerOff.svg';
import Setting2 from '../Svgs/setting-2.svg';
import Wallet2 from '../Svgs/wallet-2.svg';
import WorkShop from '../Svgs/workShop.svg';
import History from '../Svgs/history.svg';
import Account from './frame.svg';
import User from './noImage.svg';

export {
  Settings,
  Dashboard,
  Home,
  Cash,
  Collection,
  Customers,
  Reports,
  Support,
  Alert,
  Aging,
  Notifications,
  Logout,
  ArrwoLeftWhite,
  Ring,
  CardIcon,
  AllConntracts,
  FAQ,
  Help,
  Lock,
  LogOut,
  Setting2,
  Wallet2,
  WorkShop,
  History,
  Account,
  User,
};
export function findSvg(name) {
  console.log('Searching for:', name);
  console.log('Available keys:', Object.keys(SvgObject));
  const svg = SvgObject[name];
  console.log('Found:', svg);
  return svg;
}
