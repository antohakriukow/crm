import React from 'react'

import Auth from '../components/screens/Auth/Auth'
import Calendar from '../components/screens/Calendar/Calendar'
import Contacts from '../components/screens/Contacts/Contacts'
import Crm from '../components/screens/Crm/Crm'
import Email from '../components/screens/Email/Email'

export interface IRoute {
	path: string
	component: React.ComponentType
	exact?: boolean
}

export enum RouteNames {
	AUTH = '/auth',
	HOME = '/',
	CALENDAR = '/calendar',
	CONTACTS = '/contacts',
	EMAIL = '/email',
}

export const publicRoutes: IRoute[] = [
	{ path: RouteNames.AUTH, exact: true, component: Auth },
]

export const privateRoutes: IRoute[] = [
	{ path: RouteNames.HOME, exact: true, component: Crm },
	{ path: RouteNames.CALENDAR, exact: true, component: Calendar },
	{ path: RouteNames.CONTACTS, exact: true, component: Contacts },
	{ path: RouteNames.EMAIL, exact: true, component: Email },
]
