import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from './config/firebaseConfig'

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
