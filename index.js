const HEX_BASE = 16;
const HEX_PREFIX_LENGTH = 6;
const HEX_PREFIX_CHAR = '0'
const numberToHexColor = (num) => {
  let hexString = num.toString(HEX_BASE);
  return `#${hexString.padStart(HEX_PREFIX_LENGTH,HEX_PREFIX_CHAR)}`;
}

export { numberToHexColor };