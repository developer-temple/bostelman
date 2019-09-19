//Components
import HomePage from '../../../components/pages/home'

//Lib
import { objToArray } from '../../functions/objToArray'

export const pages = {
  home: {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage
  }
}

export const pagesArray = objToArray(pages)