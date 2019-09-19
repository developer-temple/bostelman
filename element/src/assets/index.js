import imgBlonde1 from './blonde1.jpeg'
import imgBlonde2 from './blonde2.jpg'
import imgBlonde3 from './blonde3.jpeg'
import imgBlonde4 from './blonde4.jpeg'
import imgBlonde5 from './blonde5.jpeg'
import imgBrunette1 from './brunette1.jpeg'
import imgBrunette2 from './brunette2.jpeg'
import imgBrunette3 from './brunette3.jpeg'
import imgBrunette4 from './brunette4.jpg'
import imgBrunette5 from './brunette5.jpeg'
import imgKid1 from './kid1.jpeg'
import imgMan1 from './man1.jpeg'
import imgMan2 from './man2.jpeg'
import imgMan3 from './man3.jpeg'
import imgMan4 from './man4.jpeg'
import imgMan5 from './man5.jpeg'
import imgRedhead1 from './redhead1.jpeg'
import imgRedhead2 from './redhead2.jpeg'
import imgRedhead3 from './redhead3.jpeg'
import imgRedhead4 from './redhead4.jpeg'
import imgRedhead5 from './redhead5.jpeg'

export const IMAGES = {
  blonde1: {
    src: imgBlonde1,
    alt: ''
  },
  blonde2: {
    src: imgBlonde2,
    alt: ''
  },
  blonde3: {
    src: imgBlonde3,
    alt: ''
  },
  blonde4: {
    src: imgBlonde4,
    alt: ''
  },
  blonde5: {
    src: imgBlonde5,
    alt: ''
  },
  brunette1: {
    src: imgBrunette1,
    alt: ''
  },
  brunette2: {
    src: imgBrunette2,
    alt: ''
  },
  brunette3: {
    src: imgBrunette3,
    alt: ''
  },
  brunette4: {
    src: imgBrunette4,
    alt: ''
  },
  brunette5: {
    src: imgBrunette5,
    alt: ''
  },
  kid1: {
    src: imgKid1,
    alt: ''
  },
  man1: {
    src: imgMan1,
    alt: ''
  },
  man2: {
    src: imgMan2,
    alt: ''
  },
  man3: {
    src: imgMan3,
    alt: ''
  },
  man4: {
    src: imgMan4,
    alt: ''
  },
  man5: {
    src: imgMan5,
    alt: ''
  },
  redhead1: {
    src: imgRedhead1,
    alt: ''
  },
  redhead2: {
    src: imgRedhead2,
    alt: ''
  },
  redhead3: {
    src: imgRedhead3,
    alt: ''
  },
  redhead4: {
    src: imgRedhead4,
    alt: ''
  },
  redhead5: {
    src: imgRedhead5,
    alt: ''
  }
}

export const imagesArray = () => {
  let results = []
  Object.keys(IMAGES).forEach(x => {
    results.push({ ...IMAGES[x]})
  })
  return results
}