const fs = require('fs')
const Benchmark = require('benchmark')
const { createHash } = require('crypto')
const { sha256 } = require('crypto-wasm')
const { SHA256 } = require('crypto-js')
const bindings = require('crypto-node')

const sha256Binding = bindings.sha256
const sha256Asm = bindings.sha256Asm
const suite = new Benchmark.Suite

const fixture = 'hello world!' // fs.readFileSync('./bench/fixture.json').toString()

suite.add('sha256#native', () => {
  const hasher = createHash('sha256')
  hasher.update(fixture)
  hasher.digest('hex')
})
  .add('sha256#wasm', () => {
    sha256(fixture)
  })
  .add('sha256#js', () => {
    SHA256(fixture).toString()
  })
  .add('sha256#binding', () => {
    sha256Binding(fixture)
  })
  .add('sha256Asm', () => {
    sha256Asm(fixture)
  })
  .on('cycle', function(event) {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  .run()
