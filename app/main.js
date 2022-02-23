import { MySpellsController } from "./Controllers/MySpellsController.js";
import { SpellsController } from "./Controllers/SpellsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  spellsController = new SpellsController()
  mySpellsController = new MySpellsController()
}

window["app"] = new App();
