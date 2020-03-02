//To Do List V.3
//Make Category Box into an actual Cardboard Box
//Check Interesting5
const questionList = {
  electro1: {
    question: 'Handheld or Not?',
    "items":  ['Smartphone','Laptop','Desktop','Giant Speaker','Headphones'],
    "category": ['Handheld', 'Not Handheld'],
    "answer": {
      'Handheld': [0,1,4],
      'Not Handheld': [2,3]
    } 
  },
  electro2: {
    question: 'iOS or Andriod Operating Systems?',
    items: ['Iphone X', 'Samsung Galaxy S9', 'OnePlus 6', 'Google Pixel'],
    category: ['iOS', 'Android'],
    answer: {
      'iOS': [0],
      'Android': [1,2,3]
    }
  },
  electro3: {
    question: 'Common Parts or Uncommon for a Smartphone?',
    items: ['Camera', 'Headphone Jack', 'Shaver', 'Screen', 'Flashlight'],
    category: ['Common parts of a Phone', 'Uncommon parts of a Phone'],
    answer: {
      'Common parts of a Phone': [0,3,4],
      'Uncommon parts of a Phone': [1,2]
    }
  },
  electro4: {
    question: 'Wireless or Not?',
    items: ['Internet Router', 'Printer', 'Lamp', 'Mouse'],
    category: ['Can be Wireless', 'Can not be Wireless'],
    answer: {
      'Can be Wireless': [0,3],
      'Can not be Wireless':[1,2]
    }
  },
  electro5: {
    question: 'Has a semi-functional Self Driving Feature or None at all?',
    items: ['Google', 'Tesla', 'Delta Airlines', 'Honda', 'Lyft'],
    category: ['Working on Driverless Cars', 'Not working on Driverless Cars'],
    answer: {
      'Not working on Driverless Cars':[2],
      'Working on Driverless Cars':[0,1,3,4]
    }
  },
  food1: {
    question: 'Are these made with Flour or Other Ingredients?',
    items: ['Bread', 'Noodles', 'Fried Crispy Chicken', 'Normal Chicken', 'Cake'],
    category: ['Made with Flour', 'Not made with Flour'],
    answer: {
      "Made with Flour": [0,1,2,4],
      'Not made with Flour': [3]
    }
  },
  food2: {
    question: 'Safe to Eat or Not?',
      items: ['White Strawberry', 'Moldy Cheese', 'Pufferfish (Cooked)', 'Moldy Apple', 'Lionfish (Cooked)'],
      category: ['Safe to Eat', 'Not Safe to Eat'],
      answer: {
        'Safe to Eat': [1,2,4],
        'Not Safe to Eat': [0,3]
      }
  },
  food3: {
    question: 'Are they healthy or junk food?',
    items: ['Burger', 'Pizza', 'Ice Cream', 'Salad', 'Olive Oil'],
    category: ['Contains healthy nutrients', 'Contains no healthy nutrients'],
    answer: {
      'Contains healthy nutrients':[0,1,2],
      'Contains no healthy nutrients':[3,4]
    }
  },
  food4: {
    question: 'Is one of the Ingredients Soup?',
    items:['Tomato Soup', 'Ramen', 'Curry', 'Ramen Burger'],
    category:['Contain Soup', "Don't contain soup"],
    answer: {
      'Contain Soup':[0,1],
      "Don't contain soup":[2,3]
    }
  },
  food5: {
    question: 'Is this considered Milk?',
    items: ['Almond Milk', 'Dairy Milk', 'Cheese', 'Goat Cheese', 'Ice Cream'],
    category: ['Made from Milk', 'Not made from Milk'],
    answer: {
      'Not made from Milk':[0,3],
      'Made from Milk':[1,2,4]
    }
  },
  weather1: {
    question: 'Real Disaster or Fake?',
    items: ['Acid Rain','Sharknado', 'Earthquake', 'Volcanic Eruption','Godzilla'],
    category:['Natural Disaster', 'Fictional Natural Disaster'],
    answer: {
      'Natural Disaster': [0,2,3],
      'Fictional Natural Disaster': [1,4] 
    }
  },
  weather2: {
    question: 'Solid, Liquid, Gas, or Plasma?',
    items: ['Water', 'Ice', 'Butter', 'Lightning', 'Carbon Dioxide', 'The Sun'],
    category: ['Solid', 'Liquid', 'Gas', 'Plasma'],
    answer: {
      'Solid':[1,2],
      'Liquid':[0],
      'Gas':[4],
      'Plasma':[3,5]
    }
  },
  entertainment1: {
    question: 'What to do in a movie while being respectful?',
    items: ['Eating Loudly', 'Revealing Spoilers', 'Having phone on', 'Watching movie silently', 'Eating food with others in mind'],
    category: ['What to Do in a Movie', 'What Not to Do in a Movie'],
    answer: {
      'What to Do in a Movie': [3,4],
      'What Not to Do in a Movie': [0,1,2]
    }
  },
  entertainment2: {
    question: 'Significant Awards or Normal Awards?',
    items:['Oscars', 'Emmys', 'MTV Awards', "People's Choice", 'Golden Globes'],
    category:['Prestigous Awards', 'Normal Awards'],
    answer: {
      'Prestigous Awards': [0,1,4],
      'Normal Awards': [2,3]
    }
  },
  entertainment3: {
    question: 'What Famous Movie Messed up during the Ocsars?',
    items: ['Moonlight', 'La La Land', 'Straight Out of Compton', 'Shape of Water'],
    category: ['Messed Up During 2017 Oscars', "Didn't Mess Up"],
    answer: {
      'Messed Up During 2017 Oscars':[0],
      "Didn't Mess Up":[1,2,3]
    }
  },
  home1: {
    question: 'Does it Cool or Heat?',
    items: ['Air Conditioner', 'Fan', 'Heater', 'Humidifier', 'Heat Wave'],
    category: ['Cooling', 'Heating'],
    answer: {
      'Cooling': [0,1],
      'Heating': [2,3,4]
    }
  },
  home2: {
    question: 'Does it have to be plugged it or can it plug in?',
    items: ['Lamp', 'Television', 'Phone', 'Microwave', 'Recharable Batteries'],
    category: ['Always has to be Plugged in', "Doesn't have to be plugged in"],
    answer: {
      'Always has to be Plugged in':[0,1,3],
      "Doesn't have to be plugged in":[2,4]
    }
  },
  home3: {
    question: 'What items are used for cooking?',
    items: ['Oven', 'Knife', 'Smartphone', 'Cutting Board', 'Sponge'],
    category: ['Used for Cooking', 'Not used for Cooking'],
    answer: {
      'Used for Cooking':[0,1,3],
      'Not used for Cooking':[2,4]
    }
  },
  home4: {
    question: "Which house shares walls with neighbors and which don't?",
    items: ['Shack', 'Apartment', 'Townhouse', '1 Story House', '2 Story House'],
    category: ['Shares walls with Neighbor', "Doesn't share walls with Neightbor"],
    answer: {
      "Doesn't share walls with Neightbor":[0,3,4],
      'Shares walls with Neighbor':[1,2]
    }
  },
  home5: {
    question: 'Categorize these animals',
    items: ['Cat', 'Dog', 'Bunny', 'King Cobra', 'Giraffe', 'Lion'],
    category: ['Common House Pets', 'Found in Zoos', 'None of the Above'],
    answer: {
      'Common House Pets':[0,1,2],
      'Found in Zoos':[4,5],
      'None of the Above':[3]
    }
  }, 
  interesting1: {
    question: 'Animals that have Rabies',
    items: ['Rabbits', 'Bats', 'Panda', 'Dolphin', 'Dogs'],
    category: ['Rabies', "Doesn't have Rabies"],
    answer: {
      'Rabies':[0,1,4],
      "Doesn't have Rabies":[2,3]
    }
  }, 
  interesting2: {
    question: 'Are these diseases still around?',
    items: ['Black Death', 'Ebola', 'Smallpox', 'Polio', 'The Flu', 'ALS'],
    category: ['Diseases that have gone extinct', 'Modern Diseases', 'Old Diseases Still Around'],
    answer: {
        'Diseases that have gone extinct':[2,3],
        'Modern Diseases':[1,4,5],
        'Old Diseases Still Around':[0]
    }
  },
  interesting3: {
    question: 'Are these Organic or Non Organic?',
    items: ['USDA Certified Organic Watermelons', 'Organic Tomatoes', 'USDA Choice Steak', 'Bananas', 'Non - GMO Potatoes'],
    category: ['Organic', 'Not Organic'],
    answer: {
      'Organic':[0,2,4],
      'Not Organic':[1,3]
    }
  },
  interesting4: {
    question: 'Search Engines',
    items: ['Google', 'Yahoo', 'U Search AnyWhere', 'Bing', 'Gmail'],
    category: ['Real Search Engine', 'Fake Search Engine'],
    answer: {
      'Real Search Engine':[0,1,3],
      'Fake Search Engine':[2,4]
    }
  },
  interesting5: {
    question: 'Languages used by Computers or Not',
    items: ['English', 'Spanish', 'Binary', 'Hexadecimal', 'Octal Decimal'],
    category: ['Used by Computers', 'Not used by Computers'],
    answer: {
      'Used by Computers':[0,1,4],
      'Not used by Computers':[2,3]
    }
  },
  animal1: {
    question: 'Arms or not?',
    items: ['Shark', 'Human', 'Monkey', 'Horse', 'T-Rex'],
    category: ['Arms', 'No Arms'],
    answer: {
      'Arms':[1,2,4],
      'No Arms':[0,3]
    }
  },
  animal2: {
    question: 'Legs or not?',
    items: ['Birds', 'Penguins', 'Fish', 'Frogs', 'Caterpillar'],
    category: ['Legs', 'No Legs'],
    answer: {
      'Legs':[0,1,3,4],
      'No Legs':[2]
    }
  }
  ,
  animal3: {
    question: 'Capable of Swimming',
    items: ['Whales', 'Dolphins', 'Lions', 'Zebras'],
    category: ['Can Swim', 'Cannot Swim'],
    answer: {
      'Can Swim':[0,1],
      'Cannot Swim':[2,3]
    }
  }
  ,
  animal4: {
    question: 'Can survive on plants',
    items: ['Hippo', 'stegosaurus', 'Turtles', 'Cat', 'Cheetah'],
    category: ['Herbivore', 'Not Herbivore'],
    answer: {
      'Herbivore':[0,1,2],
      'Not Herbivore':[3,4]
    }
  }
  ,
  animal5: {
    question: 'Can survive on Meat or on Meat and Plants',
    items: ['Cat', 'Cheetah', 'Bear', 'Pig', 'Humans'],
    category: ['Carnivores', 'Omnivores'],
    answer: {
      'Carnivores':[0,1],
      'Omnivores':[2,3,4]
    }
  }
  
  // ,
  // setUp: {
  //   question: '',
  //   items: [],
  //   category: [],
  //   answer: {
  //   }
  //}
};
var isActive = false;
var canSubmit = false;
var gameStarted = false;
var question = "";
var selection = [];

function startGame() {
  document.getElementById("startBackground").style.display = "none";
  //question = questionList[Math.floor(Math.random() * questionList.length )];
  question = Object.values(questionList)[Math.floor(Math.random() * Object.values(questionList).length )];
  addItem(question);
  gameStarted = true;
}

function showCategoryList() {
  if (isActive == false) {
    isActive = true;
    var display = document.createElement("div");
    display.id = "categoryList";
    
    var closeButton = document.createElement('button');
    closeButton.className = 'button';
    closeButton.innerHTML = 'Close';
    closeButton.onclick = function () {document.body.removeChild(document.body.childNodes[9]);
      isActive = false;};
    display.appendChild(closeButton);
    
    document.body.insertBefore(display, document.body.childNodes[9]);
    question.category.map((val, index) => {
      var button = document.createElement("button");
      button.innerHTML = val;
      button.id = "categoryButton";
      button.addEventListener("click", event => moveItem(val));
      display.appendChild(button);
    });
    //Creates category List pulldown, and adding buttons depending on the categories
  }
}

function moveItem(item) {
  $( "#categoryList" ).empty();
  while (selection.length != 0) {
    selection.map((val, index)=> {
      var newItem = document.createElement("Div");
      newItem.innerHTML = selection[index];
      newItem.className = "categoryItem";
      newItem.id = selection[index];
      document.getElementById(item).appendChild(newItem);
      selection.splice(selection.indexOf(document.getElementById(val).id),1);
      document.getElementById("itemBox").removeChild(document.getElementById(val));
      //Creates new item inside categoryItem 
    });
  }
  document.body.removeChild(document.body.childNodes[9]);
  isActive = false;
}


function addItem(itemAdd) {
    const itemBox = document.getElementById("itemBox");
  $( "#itemBox" ).empty();
  $( "#categoryBox" ).empty();
  // //Clears itemBox upon loading page
  var items = [];
  document.getElementById('questionTheme').innerHTML = itemAdd.question;
  //Adds random numbers and checks to make sure none are duplicates
  while (items.length != itemAdd.items.length) {
    var num = Math.floor(Math.random() * itemAdd.items.length );
    items.includes(num)
      ? num = Math.floor(Math.random() * itemAdd.items.length )         
    : items.push(num);
  }
  //Animation Code 
   var rollOut = setInterval(function(){
                if (counter < 96) {
                    counter ++;
                    document.getElementById('itemBox').style.width = counter + '%';
                } else {
                    clearInterval(rollOut);
                }
            },75)
  
  var counter = 0;
  var percentage = 1;
  var add = setInterval(function(){
  
  if (counter == 96) {
    clearInterval(add);
  } else if (counter == Math.floor((percentage / items.length)*95)) {
    
    var newItem = document.createElement("DIV");
    newItem.className = "item";
    newItem.id = itemAdd.items[percentage-1];
    newItem.style.border = "2px solid black";
    // newItem.draggable = true;
    newItem.addEventListener('click', function(){selectItem(this)});
    //newItem.addEventListener("dragstart", function() {dragItemToCategory(event)}, {passive: false});
    
    var itemName = document.createElement("h1");
    itemName.className = "itemVal";
    itemName.innerHTML = itemAdd.items[percentage-1];
    newItem.appendChild(itemName);
    itemBox.appendChild(newItem);
    
    percentage ++;
    
}
},75)
  
  //Uses the item array to create items to add to the div Itembox
  itemAdd.category.map((val,index) => {
    
    var newItem = document.createElement("DIV");
    newItem.className = "category";
    newItem.id = val;
    newItem.innerHTML = val;
    //newItem.addEventListener("drop", function() {dropItemInCategory(event)}, {passive: false});
    //newItem.addEventListener('dragover', function() {dragItemToCategory(event)}, {passive: false});
    document.getElementById("categoryBox").appendChild(newItem);
  });
  //Does the same thing as item array but with categories
  var checkItemBox = setInterval(function () {
      if (gameStarted == true) {
        var itemCount = document.getElementById("itemBox").childElementCount;
          if (itemCount == 0) {
            canSubmit = true;
            alert("You are now ready to submit!");
            clearInterval(checkItemBox);
          }
      }
}, 2000);
}

function submit() {
  if (canSubmit == true){
    var array = [];
    var Wrongnum = 0;
    question.category.map((val, categoryIndex) =>{
      var newItems = Object.entries(document.getElementById("categoryBox").childNodes[categoryIndex].children);
      //Takes one of the categories
      newItems.map((val,itemIndex)=> {
        //Getting val[1] returns the second child of Category Box, since the first child is the div's innerHTML
        var thisItem = question.items.indexOf(val[1].id);
        var answerOutput = question.answer[question.category[categoryIndex]].includes(thisItem);
        
        answerOutput == true 
          ? document.getElementById(val[1].id).style.backgroundColor = "#2E7D32"
          : document.getElementById(val[1].id).style.backgroundColor = "#ce201f";
        array.push(answerOutput);
      });
      //Maps through categories' children and uses its index to check if its correct
    });
    
    array.map((val) => {
      if (val == false) {
        Wrongnum ++;
      }
    });
    
    if (Wrongnum == 0) {
      alert("You got all of them right!")
      document.getElementById('progress').style.width = ((30-Object.values(questionList).length)/30)*100 + "%"; 
    } 
    else if ((((array.length-Wrongnum)/array.length)*100) >= 40 && (((array.length-Wrongnum)/array.length)*100) <100) {
      alert("Decent Enough. You got " + (((array.length-Wrongnum)/array.length)*100) + "% Right!");
      delete questionList[Object.keys(questionList)[Object.values(questionList).indexOf(question)]];
      document.getElementById('progress').style.width = ((30-Object.values(questionList).length)/30)*100 + "%"; 
    }
    else {
      alert("Bad Score! You got " + (((array.length-Wrongnum)/array.length)*100) + "% Right!");
    }
    canSubmit = false;
    gameStarted = false;
    questionList.length == 0 
      ? alert('Game Over!!!!')
      : setTimeout(function () {startGame();}, 3000);
  }
}

function selectItem(item) {
  var id = item.id;
  document.getElementById(id).style.border == "3px solid yellow"
    ? (document.getElementById(id).style.border = "2px solid black",
      selection.splice(selection.indexOf(id),1)  
      )

  :(document.getElementById(id).style.border = "3px solid yellow",
    selection.push(id)
  );
  //Gets the Id of an item clicked, then checks if said item has a border and changes border based on result
}

//Loading Code
window.addEventListener("load", function(event) {
  document.getElementById("startButton").removeChild(document.getElementById("startButton").childNodes[1]);
});

//Reset Button code
function resetItems() {
  addItem(question);
}
//Drag and Drop
// function dragItemToCategory(event) {
//   event.dataTransfer.setData("text",event.target.id);
// }

// function whileItemDragged(event) {
//   event.preventDefault();
// }

// function dropItemInCategory(event) {
//   event.preventDefault();
//   if (event.target.id == "itemBox") {
//     var item = document.getElementById(event.dataTransfer.getData('text'));
//     //Adjusts element to match container that its in
//     item.innerHTML = ' ';
//     item.className = 'item';
//     var itemName = document.createElement("h1");
//     itemName.className = "itemVal";
//     itemName.innerHTML = item.id;
//     item.appendChild(itemName);
//     event.target.appendChild(item); 
//   }
//   else if (event.target.className == 'category') {
//     var newItem1 = document.getElementById(event.dataTransfer.getData('text'));
//     //Adjusts element to match container that its in
//     newItem1.removeChild(newItem1.childNodes[0]);
//     newItem1.className = 'categoryItem'; 
//     newItem1.innerHTML = newItem1.id;
//     event.target.appendChild(newItem1);
//   }
// }

//Tutorial code
var counter = 1;
function startInfo() {
  document.getElementById("startBackground").style.display = "none";
  showInfo(counter);
}

function next() {
  counter < 7 
    ? counter ++ 
    : counter = 7;
  showInfo(counter);
}

function previous() {
  counter > 1 
    ? counter -- 
    : counter = 1;
  showInfo(counter);
}
function showInfo(val) {
  
  const showItems = {
    start: {
      id:'Start',
      message: 'Welcome to Sort It! , a trivia game. To learn how to play and win, follow this tutorial.'
    },
    item: {
      id:'itemBox',
      message:"Items will appear here when the game begins. You'll need to click them and move these items into their correct category. To so do, simply click on the item itself and then click the Move Items Button."
    },
    moveItems: {
      id:'moveItems',
      message:"This is where a menu appears to move your items into the category."
    },
    reset: {
      id:'resetButton',
      message:"Here, this will reset your selection of items that were dragged into the categories. Of course you could do this manually by dragging items back to their starting place, but it's easier with this."
    },
    category: {
      id:'categoryBox',
      message:'This is where items are dropped to their select categories and are then checked to move on to the next question. The categories will also appear when the game start and are unique to every question.'
    },
    submit: {
      id:'submit',
      message:"Once you're done putting the items in the categories, click here to submit and check your answers. Items that are correct are shown in green, while items incorrect are shown in red. It will automatically move on to the next question after a short period of time."
    },
    end: {
      id:'end',
      message:'Thats all you need to know. Lets get sorting!'
    }
  }
  //Clears any and all existing values
  Object.values(showItems).map((val, index) => {
    var itemId = document.getElementById(val.id);
    while (itemId.firstChild) {
    itemId.removeChild(itemId.firstChild);
}
  });
  //Adds buttons text and disables them
    document.getElementById('resetButton').innerHTML = 'Reset Items';
    document.getElementById('resetButton').onclick = ' ';
    document.getElementById('submit').innerHTML = 'Submit';
    document.getElementById('submit').onclick = ' ';
    document.getElementById('moveItems').innerHTML = 'Move Items';
    document.getElementById('moveItems').onclick = ' ';
    //Creates information based on counter
    var itemShown = Object.values(showItems)[val-1];
    var infoBoard = document.createElement("p");
    infoBoard.id = "infoBoard";
    infoBoard.innerHTML = itemShown.message;
    
    //Continue Button
    var nextButton = document.createElement('button');
    nextButton.className = 'button';
    nextButton.innerHTML = "Continue";
    nextButton.onclick = function () {next()};
    
    //Previous Button
    var previousButton = document.createElement('button');
    previousButton.className = 'button';
    previousButton.innerHTML = "Previous";
    previousButton.onclick = function () {previous()};
    
    document.getElementById(itemShown.id).appendChild(infoBoard);
    document.getElementById(itemShown.id).appendChild(previousButton);
    document.getElementById(itemShown.id).appendChild(nextButton);
    
    //Back to menu button at end of Tutorial
    if (val == 7) {
      var mainMenu = document.createElement('button');
      mainMenu.onclick = function () {window.location.reload(true)};
      mainMenu.innerHTML = 'Go Back to Start';
      mainMenu.className = 'button';
      document.getElementById(itemShown.id).appendChild(mainMenu);
    }
}


