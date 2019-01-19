var enzyme = require('enzyme');
var Adapter = require('enzyme-adapter-react-16');
require('jsdom-global/register');
const requireHacker = require('require-hacker')

requireHacker.hook('jpg', () => 'module.exports = ""')
requireHacker.hook('css', () => 'module.exports = ""')
enzyme.configure({ adapter: new Adapter() });
