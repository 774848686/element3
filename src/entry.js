// 用于构建时的入口
import ElRow from '../packages/row'
import ElCol from '../packages/col'
import ElContainer from '../packages/container'
import ElHeader from '../packages/header'
import ElFooter from '../packages/footer'
import ElAside from '../packages/aside'
import ElMain from '../packages/main'
import ElAlert from '../packages/alert'
import ElButton from '../packages/button'
import ElSwitch from '../packages/switch'
import ElProgress from '../packages/progress'
import ElLink from '../packages/link'
import ElIcon from '../packages/icon'
import ElBreadcrumb from '../packages/breadcrumb'
import ElBreadcrumbItem from '../packages/breadcrumb-item'
import ElBacktop from '../packages/backtop'
import ElTree from '../packages/tree'
import ElMenu from '../packages/menu'
import ElMenuItem from '../packages/menu-item'
import ElSubmenu from '../packages/submenu'
import ElMenuItemGroup from '../packages/menu-item-group'
import ElPagination from '../packages/pagination'
import ElTag from '../packages/tag'
import ElBadge from '../packages/badge'
import ElAvatar from '../packages/avatar'
import ElTabs from '../packages/tabs'
import ElTabPane from '../packages/tab-pane'
import ElPageHeader from '../packages/page-header'
import ElDropdown from '../packages/dropdown'
import ElDropdownItem from '../packages/dropdown-item'
import ElDropdownMenu from '../packages/dropdown-menu'
import ElSteps from '../packages/steps'
import ElStep from '../packages/step'
import ElLoading, { useLoading } from '../packages/loading'
import { useMessage } from '../packages/message'
import {
  useMsgbox,
  useAlert,
  usePrompt,
  useConfirm
} from '../packages/message-box'
import { useNotify } from '../packages/notification'

import ElDialog from '../packages/dialog'
import ElTooltip from '../packages/tooltip'
import ElPopover from '../packages/popover'
import ElPopconfirm from '../packages/popconfirm'
import ElCard from '../packages/card'
import ElCarousel from '../packages/carousel'
import ElCollapse from '../packages/collapse'
import ElCollapseItem from '../packages/collapse-item'
import ElTimeline from '../packages/timeline'
import ElTimelineItem from '../packages/timeline-item'
import ElDivider from '../packages/divider'
import ElCalendar from '../packages/calendar'
import ElImage from '../packages/image'
import ElInfiniteScroll from '../packages/infinite-scroll'
import ElDrawer from '../packages/drawer'

import { version } from '../package.json'

const components = [
  ElRow,
  ElCol,
  ElHeader,
  ElFooter,
  ElAside,
  ElMain,
  ElAlert,
  ElContainer,
  ElButton,
  ElSwitch,
  ElProgress,
  ElLink,
  ElIcon,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElBacktop,
  ElTree,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElPagination,
  ElTag,
  ElBadge,
  ElAvatar,
  ElTabs,
  ElTabPane,
  ElPageHeader,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSteps,
  ElStep,
  ElLoading,
  ElDialog,
  ElTooltip,
  ElPopover,
  ElPopconfirm,
  ElCard,
  ElCarousel,
  ElCollapse,
  ElCollapseItem,
  ElTimeline,
  ElTimelineItem,
  ElDivider,
  ElCalendar,
  ElImage,
  ElInfiniteScroll,
  ElDrawer
]

const install = (app) => {
  components.forEach((component) => {
    app.use(component)
  })
}

const elementUI = {
  version,
  install
}

export {
  ElRow,
  ElCol,
  ElContainer,
  ElHeader,
  ElFooter,
  ElAside,
  ElMain,
  ElAlert,
  ElButton,
  ElSwitch,
  ElProgress,
  ElLink,
  ElIcon,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElBacktop,
  ElTree,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElPagination,
  ElTag,
  ElBadge,
  ElAvatar,
  ElTabs,
  ElTabPane,
  ElPageHeader,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElSteps,
  ElStep,
  ElLoading,
  ElDialog,
  ElTooltip,
  ElPopover,
  ElPopconfirm,
  ElCard,
  ElCarousel,
  ElCollapse,
  ElCollapseItem,
  ElTimeline,
  ElTimelineItem,
  ElDivider,
  ElCalendar,
  ElImage,
  ElInfiniteScroll,
  ElDrawer,
  useMessage,
  useLoading,
  useMsgbox,
  useAlert,
  usePrompt,
  useConfirm,
  useNotify
}

export default elementUI
