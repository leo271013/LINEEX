import flex from '../template/flex.js'

export default async (event) => {
  flex.contents.contents[0].body.contents[0].text = '大饅頭'
  event.reply(flex)
}
