import { path } from "https://deno.land/x/eta@v1.11.0/file-methods.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts"

const __dirname = new URL('.', import.meta.url).pathname;
const eta = new Eta({ views: path.join(__dirname, "views") });

let templateResult = eta.render("./template", { food: "cake" })

console.log(templateResult)
Deno.writeFileSync("test.md", new TextEncoder().encode(templateResult))
