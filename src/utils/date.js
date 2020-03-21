/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Date].
 *-------------------------------------------------------------------------------------------- */
const formats = ['YYYY-MM-DD', 'YYYY-MM-DD: hh:mm:ss']
const initDateStr = str => (str >= 0 && str <= 9) ? `0${str}` : str
/**
 * 解析时间戳
 * @param {*} date
 * @param {*} format
 */
export function dateFormat (dateNum, format = 'YYYY-MM-DD: hh:mm:ss', splitter = '.') {
  if (!formats.indexOf(format)) {
    format = formats[0]
  }
  if (!dateNum) {
    return ''
  }
  let date = new Date(dateNum * 1000)
  let seperator2 = ':'
  let month = initDateStr(date.getMonth() + 1)
  let strDate = initDateStr(date.getDate())
  let hours = initDateStr(date.getHours())
  let minutes = initDateStr(date.getMinutes())
  let seconds = initDateStr(date.getSeconds())
  let dateStr = ''
  if (format === formats[0]) {
    dateStr = date.getFullYear() + splitter + month + splitter + strDate
  } else {
    dateStr = date.getFullYear() + splitter + month + splitter + strDate + ' ' + hours + seperator2 + minutes + seperator2 + seconds
  }
  return dateStr
}
