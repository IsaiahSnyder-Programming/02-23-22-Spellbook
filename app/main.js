import { SpellsController } from "./Controllers/SpellsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  spellsController = new SpellsController()
}

window["app"] = new App();
