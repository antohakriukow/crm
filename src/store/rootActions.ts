import {
	setEditColumnId,
	toggleColumnRedactorOpened,
	toggleMenu,
	togglePaletteOpened,
	togglePopup,
	toggleUSerMenu,
} from './ui/ui.slice'

import {
	addToDragItems,
	clearCanbanState,
	clearDragItems,
	clearTargetColumn,
	clearTargetItem,
	removeFromDragItems,
	setTargetColumn,
	setTargetItem,
} from './canban/canban.slice'
import * as userActions from './user/user.actions'

export const allActions = {
	...userActions,
	toggleMenu,
	toggleUSerMenu,
	togglePopup,
	toggleColumnRedactorOpened,
	togglePaletteOpened,
	setEditColumnId,
	addToDragItems,
	removeFromDragItems,
	clearDragItems,
	setTargetColumn,
	clearTargetColumn,
	setTargetItem,
	clearTargetItem,
	clearCanbanState,
}
