"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var scripts_exports = {};
__export(scripts_exports, {
  Scripts: () => Scripts
});
module.exports = __toCommonJS(scripts_exports);
const Scripts = {
  inherit: "gen2",
  gen: 2,
  init() {
    const specialTypes = ["Fire", "Water", "Grass", "Ice", "Electric", "Dark", "Psychic", "Dragon"];
    for (const i in this.data.Moves) {
      if (this.data.Moves[i].num >= 252)
        this.modData("Moves", i).gen = 2;
      const illegalities = ["Past", "LGPE", "Unobtainable"];
      if (this.data.Moves[i].isNonstandard && illegalities.includes(this.data.Moves[i].isNonstandard)) {
        this.modData("Moves", i).isNonstandard = null;
      }
      if (this.data.Moves[i].category === "Status")
        continue;
      const newCategory = specialTypes.includes(this.data.Moves[i].type) ? "Special" : "Physical";
      if (newCategory !== this.data.Moves[i].category) {
        this.modData("Moves", i).category = newCategory;
      }
    }
    for (const i in this.data.Items) {
      if (this.data.Items[i].gen > 2)
        this.modData("Items", i).gen = 2;
      if (this.data.Items[i].isNonstandard === "Past")
        this.modData("Items", i).isNonstandard = null;
    }
    for (const i in this.data.Pokedex) {
      if (this.species.get(i).gen > 2)
        this.modData("Pokedex", i).gen = 2;
    }
    for (const i in this.data.FormatsData) {
      if (this.forGen(9).species.get(i).isNonstandard === "Past") {
        this.modData("FormatsData", i).isNonstandard = null;
      }
    }
  }
};
//# sourceMappingURL=scripts.js.map
