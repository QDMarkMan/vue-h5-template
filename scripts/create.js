/** ---------------------------------------------------------------------------------------------
 *  @Author [ETongfu].
 *  @Des [Module helper].
 *-------------------------------------------------------------------------------------------- */
const inquirer = require('inquirer')
const path = require('path')
const { getTemplates, buildVueFile, injectRoute } = require('./template/index')
const { Log, FileUtil, LOCAL , ROOTPATH} = require('./utils')
Log.logger('I will help you quickly create views!')
// file options
const questions = [
  {
    type: 'input',
    name: 'folder',
    message: "Please enter a directory name (if not, it will be created):"
  },
  {
    type: 'input',
    name: 'module',
    message: "Please enter the file name",
    validate: str => ( str !== '' && /^[A-Za-z0-9_-]+$/.test(str))
  },
  {
    type: 'list',
    name: 'template',
    message: "Please select a template",
    choices: getTemplates()
  },
  {
    type: 'input',
    name: 'comment',
    message: "Please enter a module description (comment): "
  },
]
// Reply
inquirer.prompt(questions).then(answers => {
  Log.logger(`Coming soon to create ${answers.module}.vue file for you` + (answers.folder == '' ? '.' : ` under the ${answers.folder} folder`))
  if (answers.folder == '' && FileUtil.isPathInDir(answers.module, ROOTPATH.viewsPath) && !answers.cover) return process.exit(0)
  if (!LOCAL.hasEnvFile()) {
    LOCAL.buildEnvFile({
      AUTHOR: answers.AUTHOR,
      Email: answers.Email
    })
  }
  const {
    folder,
    module,
    template,
    comment,
  } = answers
  buildDirAndFiles(folder, module, template, comment)
})
/**
 * Build view system
 * @param {*} folder
 * @param {*} module
 * @param {*} template
 * @param {*} comment
 */
function buildDirAndFiles (folder = '', module, template, comment) {
  const folderPath = folder ? path.join(ROOTPATH.viewsPath, folder) : ROOTPATH.viewsPath
  const vuePath = path.join(folderPath, `/${module}.vue`)
  if (folder && !FileUtil.isPathInDir(folder, ROOTPATH.viewsPath)) {
    // create dir for path
    FileUtil.createDir(folderPath)
    Log.success(`${folder} directory created`)
  }
  FileUtil.createDirAndFile(vuePath, buildVueFile(module, comment, template), folderPath)
  if (folder) {
    injectRoute(folder, module)
  }
}
