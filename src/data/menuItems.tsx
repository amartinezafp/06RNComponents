import { MenuItem } from '../intefaces/appInterfaces';

export const menuItems:MenuItem[] = [
  {
    name:'Animation 101',
    Icon: 'cube-outline',
    component:'Animation101Screen'
  },
  {
    name:'Animation 102',
    Icon: 'albums-outline',
    component:'Animation102Screen'
  },
  {
    name:'Switch Screen',
    Icon: 'toggle-outline',
    component:'SwitchScreen'
  },
  {
    name:'Alert Screen',
    Icon: 'alert-circle-outline',
    component:'AlertScreen'
  },
  {
    name:'Text Input Screen',
    Icon: 'document-text-outline',
    component:'TextInputScreen'
  },
  {
    name:'Pull to Refresh',
    Icon: 'refresh-outline',
    component:'PullToRefreshScreen'
  },
  {
    name:'Section List',
    Icon: 'list-outline',
    component:'CustomSectionList'
  },
  {
    name:'Modal Screen',
    Icon: 'copy-outline',
    component:'ModalScreen'
  }
]

