import { toggleMenu, togglePopup, toggleUSerMenu } from './ui/ui.slice'

import * as userActions from './user/user.actions'

export const allActions = {
	...userActions,
	toggleMenu,
	toggleUSerMenu,
	togglePopup,
}
