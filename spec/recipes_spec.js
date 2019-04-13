describe('addIngredient', function() {
  var recipe;

  beforeEach(function() {
    recipe = {}
  });

  it('adds an ingredient to the recipe and returns the updated recipe', function() {
    var chocolateRecipe = {chocolate: "16 oz"}
    expect(addIngredient(recipe, "chocolate", "16 oz")).toEqual(chocolateRecipe);
  });

});

describe('removeIngredient', function() {
  var recipe;

  beforeEach(function() {
    recipe = {}
  });

  it('removes a key-value pair from the recipe and returns the updated recipe', function() {
    addIngredient(recipe, "butter", "2 sticks")
    addIngredient(recipe, "vanilla", "one teaspoon")
    addIngredient(recipe, "sugar", "2 cups")

    var cake = {butter: "2 sticks", sugar: "2 cups" }
    expect(removeIngredient(recipe, "vanilla")).toEqual(cake);
  });

});

describe('updateIngredient', function() {
  var recipe;

  beforeEach(function() {
    recipe = {}
  });

  it('removes a key-value pair from the recipe and returns the updated recipe', function() {
    addIngredient(recipe, "butter", "2 sticks")
    addIngredient(recipe, "vanilla", "one teaspoon")
    addIngredient(recipe, "sugar", "2 cups")

    var cake = {butter: "2 sticks", vanilla: "one teaspoon", sugar: "3 cups" }
    expect(updateIngredient(recipe, "sugar", "3 cups")).toEqual(cake);
  });

});


describe('readRecipe', function() {
  var recipe;

  beforeEach(function() {
    recipe = {}
  });

  it('reads the recipe', function() {
    spyOn(console, 'log');
    addIngredient(recipe, "cheese", "one cup")
    addIngredient(recipe, "coriander", "one teaspoon")
    readRecipe(recipe);
    expect(console.log.calls.argsFor(0)).toEqual(["this recipe calls for one cup of cheese"])
    expect(console.log.calls.argsFor(1)).toEqual(["this recipe calls for one teaspoon of coriander"])
  });

});
