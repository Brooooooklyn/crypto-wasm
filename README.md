# crypto-wasm

## Dependencies
Make sure you have rust installed in your environment. follow this link: https://www.rust-lang.org/en-US/install.html to install rust toolchains.

如果你是中国用户, 执行
```bash
cat > $HOME/.cargo/config << EOF
[source.crates-io]
registry = "https://github.com/rust-lang/crates.io-index"
replace-with = 'ustc'
[source.ustc]
registry = "git://mirrors.ustc.edu.cn/crates.io-index"
EOF
```
然后
```bash
curl https://sh.rustup.rs -sSf | sed "s/https:\/\/static.rust-lang.org\/rustup\/dist/https:\/\/mirrors.ustc.edu.cn\/rust-static\/rustup\/dist/g" | sh
```

And then install the `wasm-pack`:

```bash
cargo install wasm-pack
```

And then use nightly rust

```bash
rustup default nightly
```

## Build
```bash
wasm-pack init -t nodejs
```

## Benchmark
- yarn
- copy index.node from https://github.com/Brooooooklyn/node-crypto to bench/binding.node
- node bench/{md5|sha256}
