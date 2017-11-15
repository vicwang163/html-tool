var parser = require('htmlparser2')

function parse (str, opts) {
  var tree = parser.parseDOM(str, opts)
  return tree
}

function traverse (tree, fn) {
  if (!tree.length) return;
  var node
  var children
  for (node of tree) {
    if (node.name) {
      fn(node);
      if (node.children) {
        traverse(node.children, fn)
      }
    }
  }
}

function getAttrs (attrs) {
  if (!attrs) return ''
  var key
  var str = []
  for (key in attrs) {
    str.push(key + '="' + attrs[key] + '"')
  }
  return ' ' + str.join(' ') + ' '
}

function generate (tree) {
  debugger
  if (!tree.length || !tree) return '';
  var node
  var html = ''
  for (node of tree) {
    if (node.name) {
      html += '<' + node.name + getAttrs(node.attribs) + '>' + generate(node.children) + '</'+node.name+'>'
    } else if (node.type === 'comment') {
      html += '<!--' + node.data + '-->'
    } else if (node.type === 'text') {
      html += node.data
    }
  }
  return html
}

exports.parse = parse
exports.traverse = traverse
exports.generate = generate