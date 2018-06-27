#![feature(proc_macro, wasm_import_module, wasm_custom_section)]

extern crate wasm_bindgen;
extern crate crypto;

use wasm_bindgen::prelude::*;
use crypto::digest::Digest;
use crypto::sha2::Sha256;
use crypto::md5::Md5;

#[wasm_bindgen]
pub fn sha256(input: &str) -> String {
  let mut hasher = Sha256::new();
  hasher.input_str(input);
  hasher.result_str()
}

#[wasm_bindgen]
pub fn md5(input: &str) -> String {
  let mut hasher = Md5::new();
  hasher.input_str(input);
  hasher.result_str()
}
