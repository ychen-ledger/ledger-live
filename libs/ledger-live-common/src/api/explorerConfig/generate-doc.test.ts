// a test that run in jest and generate a markdown file!
// it passes if the file doesn't change (like a snapshot!)

import "../../__tests__/test-helpers/setup";
import fs from "fs";
import { isCurrencySupported, listCryptoCurrencies } from "../../currencies";
import { blockchainBaseURL } from "../../api/Ledger";
import { setEnv } from "../../env";

const outputFile = "explorers-config.md";
test("generate explorers.md", () => {
  const md = gen();
  const existing = fs.readFileSync(outputFile, "utf-8");
  fs.writeFileSync(outputFile, md);
  expect(existing).toBe(md);
});

function gen() {
  let md = `<!-- this file is generated by api/explorersConfig/generate-doc.test.js -->\n`;

  md += "# Current explorers configured per currency\n";

  const currencies = listCryptoCurrencies();

  md += "| name | ticker | PROD | EXPERIMENTAL |\n";
  md += "|--|--|--|--|\n";
  currencies
    .slice(0)
    .filter(isCurrencySupported)
    .forEach((c) => {
      try {
        setEnv("EXPERIMENTAL_EXPLORERS", false);
        const url1 = blockchainBaseURL(c);
        setEnv("EXPERIMENTAL_EXPLORERS", true);
        const url2 = blockchainBaseURL(c);
        md += `| ${c.name} | ${c.ticker} | ${url1 || "N/A"} | ${
          url1 === url2 ? "N/A" : url2
        } |\n`;
      } catch (e) {
        // no explorer defined
      }
    });
  md += "\n";

  return md;
}