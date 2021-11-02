import * as React from "react";
import {
  divOuter,
  mainStyle,
  pHeader,
  divAbout,
  imgBulletAbout,
  pAbout,
  imgFood,
  pSource,
  footerStyle,
  pFooter,
  divRecipeOuter,
  divRecipeStats,
  divRecipeStatsInner,
  divRecipe,
  divRecipeStat,
  divRecipeStatHighlighted,
  pRecipeIcon,
  divRecipeStatValues,
  pRecipeStatProperty,
  pRecipeStatValue,
  pRecipeSectionHeading,
  pRecipeInstructionHeading,
  divRecipeInstruction,
  pRecipeInstructionCheckbox,
  pRecipeInstruction,
  divInstruction,
  divInstructionNumber,
  pInstructionNumber,
  pInstruction,
} from "./index.module.css";
import dotsImage from "../images/6dots.svg";
import foodImage from "../images/photo1.png";

const IndexPage = () => {
  const ingredients = [
    {
      title: "Graham Cracker Crust",
      list: [
        [
          {
            type: "normal",
            text: "1 and 1/2 cups (150g) "
          },
          {
            type: "bold",
            text: "graham cracker crumbs "
          },
          {
            type: "normal",
            text: "(about 10 full sheet graham crackers)"
          },
        ],
        [
          {
            type: "normal",
            text: "5 Tablespoons (70g) "
          },
          {
            type: "bold",
            text: "unsalted butter"
          },
          {
            type: "normal",
            text: ", melted"
          },
        ],
        [
          {
            type: "normal",
            text: "1/4 cup (50g) "
          },
          {
            type: "bold",
            text: "granulated sugar"
          },
        ],
      ]
    },
    {
      title: "Cheesecake",
      list: [
        [
          {
            type: "normal",
            text: "four 8-ounce blocks (904g) full-fat "
          },
          {
            type: "bold",
            text: "cream cheese"
          },
          {
            type: "normal",
            text: ", softened to room temperature"
          },
        ],
        [
          {
            type: "normal",
            text: "1 cup (200g) "
          },
          {
            type: "bold",
            text: "granulated sugar"
          },
        ],
        [
          {
            type: "normal",
            text: "1 cup (240g) full-fat "
          },
          {
            type: "bold",
            text: "sour cream"
          },
          {
            type: "normal",
            text: ", at room temperature"
          },
        ],
        [
          {
            type: "normal",
            text: "1 teaspoon "
          },
          {
            type: "bold",
            text: "pure vanilla extract"
          },
        ],
        [
          {
            type: "normal",
            text: "2 teaspoons "
          },
          {
            type: "bold",
            text: "fresh lemon juice"
          },
          {
            type: "normal",
            text: " (optional, but recommended)"
          },
        ],
        [
          {
            type: "normal",
            text: "3 large "
          },
          {
            type: "bold",
            text: "eggs"
          },
          {
            type: "normal",
            text: ", at room temperature"
          },
        ],
        [
          {
            type: "normal",
            text: "topping suggestions: "
          },
          {
            type: "italics",
            text: "salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce"
          },
          {
            type: "normal",
            text: " (recipe in notes)"
          },
        ],
      ]
    }
  ];

  const instructions = [
    {
      bold: "",
      text: "Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C)."
    },
    {
      bold: "Make the crust:",
      text: " Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling."
    },
    {
      bold: "Make the filling:",
      text: " Using a handheld or stand mixer fitted with a paddle attachment, beat the cream cheese and granulated sugar together on medium-high speed in a large bowl until the mixture is smooth and creamy, about 2 minutes. Add the sour cream, vanilla extract, and lemon juice then beat until fully combined. On medium speed, add the eggs one at a time, beating after each addition until just blended. After the final egg is incorporated into the batter, stop mixing. To help prevent the cheesecake from deflating and cracking as it cools, avoid over-mixing the batter as best you can."
    },
    {
      bold: "Prepare the simple water bath (see note)",
      text: " Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)"
    },
    {
      bold: "",
      text: "Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight."
    },
    {
      bold: "",
      text: "Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice."
    },
    {
      bold: "",
      text: "Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days."
    },
  ];

  return (
    <div className={divOuter}>
      <main className={mainStyle}>
        <p className={pHeader}>Classic Cheesecake Recipe</p>
        <div className={divAbout}>
          <img className={imgBulletAbout} src={dotsImage} alt={"Bullet Point"}/>
          <p className={pAbout}>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a
            buttery graham
            cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
        </div>
        <img className={imgFood} src={foodImage} alt={"Pastry"}/>
        <div className={divRecipeOuter}>
          <div className={divRecipeStats}>
            <div className={`${divRecipeStat} ${divRecipeStatHighlighted}`}>
              <p className={`material-icons ${pRecipeIcon}`}>restaurant_menu</p>
              <div className={divRecipeStatValues}>
                <p className={pRecipeStatProperty}>Yields</p>
                <p className={pRecipeStatValue}>12 servings</p>
              </div>
            </div>
            <div className={divRecipeStatsInner}>
              <div className={divRecipeStat}>
                <p className={`material-icons ${pRecipeIcon}`}>schedule</p>
                <div className={divRecipeStatValues}>
                  <p className={pRecipeStatProperty}>Prep TIme</p>
                  <p className={pRecipeStatValue}>45 minutes</p>
                </div>
              </div>
              <div className={divRecipeStat}>
                <p className={`material-icons ${pRecipeIcon}`}>schedule</p>
                <div className={divRecipeStatValues}>
                  <p className={pRecipeStatProperty}>Cook Time</p>
                  <p className={pRecipeStatValue}>1 hour</p>
                </div>
              </div>
              <div className={divRecipeStat}>
                <p className={`material-icons ${pRecipeIcon}`}>schedule</p>
                <div className={divRecipeStatValues}>
                  <p className={pRecipeStatProperty}>Total Time</p>
                  <p className={pRecipeStatValue}>7.75 hours</p>
                </div>
              </div>
            </div>
          </div>
          <div className={divRecipe}>
            <p className={pRecipeSectionHeading}>Ingredients</p>
            {ingredients.map(ingredient => (
              <div>
                <p className={pRecipeInstructionHeading}>{ingredient.title}</p>
                {ingredient.list.map(listItem => (
                  <div className={divRecipeInstruction}>
                    <input type="checkbox" id="scales" name="scales" className={pRecipeInstructionCheckbox}/>
                    <p className={pRecipeInstruction}>
                      {listItem.map(item => {
                        switch (item.type) {
                          case "normal" : {
                            return item.text;
                          }
                          case "bold": {
                            return <span style={{
                              fontWeight: "bold"
                            }}>{item.text}</span>
                          }
                          case "italics": {
                            return <i>{item.text}</i>
                          }
                          default: {
                            return item.text;
                          }
                        }
                      })}
                    </p>
                  </div>
                ))}
              </div>
            ))}

            <p className={pRecipeSectionHeading}>Instructions</p>
            {instructions.map((instruction, index) => (
              <div className={divInstruction}>
                <div className={divInstructionNumber}>
                  <p className={pInstructionNumber}>{index + 1}</p>
                </div>
                <p className={pInstruction}>
                  <span style={{
                    fontWeight: "bold"
                  }}>{instruction.bold}</span>
                  {instruction.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <p className={pSource}>Source: https://sallysbakingaddiction.com/classic-cheesecake/ </p>
      </main>
      <footer className={footerStyle}>
        <p className={pFooter}>created by pranav0281999 - devChallenges.io</p>
      </footer>
    </div>
  )
}

export default IndexPage;
