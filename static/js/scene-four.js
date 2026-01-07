import { DOM } from './elements.js'

/* main timeline */
export function createSceneFour() {
  return gsap.timeline({ defaults: {duration: 1 }, paused: true })
    .pause()
    .add(tlMeteoriet(), .25)
}

/* child timelines */
function tl() {
  return gsap.timeline({})
    .to(document.body, .5, { rotation: 10, x: 100, scale:.5}, '+=.8')
    .to(document.body, .5, { rotation: 0, x: 0, scale:1, skewX:0, ease: 'elastic.out(1, 0.3)' }, '+=0.25')
}


function tlMeteoriet() {
  return gsap.timeline({})
    .set(DOM.meteoriet, {xPercent:100, x:'120%', scale: 0.15, opacity:1, transformOrigin:'50% 0'}) //voor scene 4. svg heeft een andere assenstelsel dan HTML. transformOrgin geeft aan vanaf welk punt je animatie begint. Roteren vanuit het middelpunt is 50% 50%. Maar je ook linksboven roteren. TransformOrgin bepaalt het punt waar je om heen transformeert.
    .to(DOM.meteoriet, 1,  {opacity:1}, '+=.25')
}