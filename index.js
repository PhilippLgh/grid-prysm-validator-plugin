const platform = process.platform === 'win32' ? 'windows' : process.platform

module.exports = {
  type: 'client',
  displayName: 'Prysm Validator',
  name: 'prysm_validator',
  repository: 'https://github.com/PhilippLgh/prysm-mirror',
  binaryName: process.platform === 'win32' ? 'validator.exe' : 'validator'
}
