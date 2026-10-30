let fs = require("fs");

let IntellteJson5Parser = {
  /**
   * Parses a `.json5` or `.json` file from disk into a JavaScript value (Object or Array).
   *
   * @param {string} arg0_file_path - Path to the `.json5` file.
   * @return {*} Parsed JavaScript object or array (`{}` on error).
   */
  parseFile: function (arg0_file_path) {
    //Convert from parameters
    let file_path = arg0_file_path;

    //Guard clauses
    if (!file_path || !fs.existsSync(file_path)) {
      console.error(`[IntellteJson5Parser] JSON5 file not found: ${file_path}`);
      return {};
    }

    //Return statement
    return IntellteJson5Parser.parseText(fs.readFileSync(file_path, "utf8"));
  },


  /**
   * String-aware JSON5 parser supporting top-level objects or arrays, `//` and `/*` comments,
   * single-quoted strings, unquoted object keys and trailing commas without corrupting URLs or colons inside strings.
   *
   * @param {string} arg0_raw_text - Raw JSON5 document string.
   * @return {*} Parsed JavaScript value.
   */
  parseText: function (arg0_raw_text) {
    //Convert from parameters
    let raw_text = String(arg0_raw_text || "").replace(/^\uFEFF/, "");

    //Declare local instance variables
    let in_block_comment = false;
    let in_double = false;
    let in_line_comment = false;
    let in_single = false;
    let pass1_chars = [];
    let pass1_str = "";
    let pass2_chars = [];

    //Pass 1: Strip comments and normalise single-quoted strings to valid JSON double-quoted strings
    for (let i = 0; i < raw_text.length; i++) {
      let ch = raw_text[i];
      let next_ch = (i + 1 < raw_text.length) ? raw_text[i + 1] : "";

      if (in_line_comment) {
        if (ch === "\n") {
          in_line_comment = false;
          pass1_chars.push(ch);
        }
      } else if (in_block_comment) {
        if (ch === "*" && next_ch === "/") {
          in_block_comment = false;
          i++;
        } else if (ch === "\n") {
          pass1_chars.push("\n");
        }
      } else if (in_double) {
        pass1_chars.push(ch);
        if (ch === "\\" && next_ch !== "") {
          pass1_chars.push(next_ch);
          i++;
        } else if (ch === "\"") {
          in_double = false;
        }
      } else if (in_single) {
        if (ch === "\\" && next_ch !== "") {
          if (next_ch === "'") {
            pass1_chars.push("'");
          } else {
            pass1_chars.push(ch, next_ch);
          }
          i++;
        } else if (ch === "\"") {
          pass1_chars.push("\\\"");
        } else if (ch === "'") {
          pass1_chars.push("\"");
          in_single = false;
        } else {
          pass1_chars.push(ch);
        }
      } else {
        if (ch === "/" && next_ch === "/") {
          in_line_comment = true;
          i++;
        } else if (ch === "/" && next_ch === "*") {
          in_block_comment = true;
          i++;
        } else if (ch === "\"") {
          in_double = true;
          pass1_chars.push(ch);
        } else if (ch === "'") {
          in_single = true;
          pass1_chars.push("\"");
        } else {
          pass1_chars.push(ch);
        }
      }
    }

    pass1_str = pass1_chars.join("");
    in_double = false;

    //Pass 2: Quote unquoted object keys and remove trailing commas outside strings
    for (let i = 0; i < pass1_str.length; i++) {
      let ch = pass1_str[i];
      let next_ch = (i + 1 < pass1_str.length) ? pass1_str[i + 1] : "";

      if (in_double) {
        pass2_chars.push(ch);
        if (ch === "\\" && next_ch !== "") {
          pass2_chars.push(next_ch);
          i++;
        } else if (ch === "\"") {
          in_double = false;
        }
      } else if (ch === "\"") {
        in_double = true;
        pass2_chars.push(ch);
      } else if (ch === ",") {
        let is_trailing = false;
        for (let x = i + 1; x < pass1_str.length; x++) {
          let look_ch = pass1_str[x];
          if (!/\s/.test(look_ch)) {
            is_trailing = (look_ch === "}" || look_ch === "]");
            break;
          }
        }
        if (!is_trailing) {
          pass2_chars.push(ch);
        }
      } else if (/[A-Za-z_$]/.test(ch)) {
        let end_idx = i + 1;
        for (let x = i + 1; x < pass1_str.length; x++) {
          if (/[A-Za-z0-9_$-]/.test(pass1_str[x])) {
            end_idx = x + 1;
          } else {
            break;
          }
        }
        let ident_str = pass1_str.slice(i, end_idx);
        let is_key = false;
        for (let y = end_idx; y < pass1_str.length; y++) {
          let look_ch = pass1_str[y];
          if (!/\s/.test(look_ch)) {
            is_key = (look_ch === ":");
            break;
          }
        }
        if (is_key) {
          pass2_chars.push(`"${ident_str}"`);
        } else {
          pass2_chars.push(ident_str);
        }
        i = end_idx - 1;
      } else {
        pass2_chars.push(ch);
      }
    }

    //Return statement
    return JSON.parse(pass2_chars.join(""));
  }
};

module.exports = { IntellteJson5Parser };

