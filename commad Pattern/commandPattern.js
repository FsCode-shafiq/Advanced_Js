// *** The Command Pattern ***

// The Command pattern aims to encapsulate method invocation, requests, or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion. 
// In addition, it enables us to decouple objects invoking the action from the objects that implement them, 
// giving us a greater degree of overall flexibility in swapping out concrete classes (objects).

function createFrog(options) {
    const _opts = {
      name: options.name,
      sex: options.sex,
      age: options.age,
    }
  
    const foodsEaten = []
    const wordsSpoken = []
  
    return {
      getOption(key) {
        return _opts[key]
      },
      getFoodsConsumed() {
        return foodsEaten
      },
      getWordsSpoken() {
        return wordsSpoken
      },
      eat(food) {
        console.log(`Frog "${_opts.name}" is eating: ${food.name} (${food.type})`)
        foodsEaten.push(food)
      },
      talk(words) {
        console.log(words)
        wordsSpoken.push(...words)
      },
    }
  }

  const mikeTheFrog = createFrog({ name: 'mike', sex: 'male', age: 1 })
const sallyTheOtherFrog = createFrog({ name: 'sally', sex: 'female', age: 4 })
const michelleTheLastFrog = createFrog({
  name: 'michelle',
  sex: 'female',
  age: 10,
})

const api = {
    fetchFrogs: function() {
      return Promise.resolve([
        { id: 1, name: 'mike', sex: 'male', age: 1 },
        { id: 2, name: 'sally', sex: 'female', age: 2 },
        { id: 3, name: 'michelle', sex: 'female', age: 9 },
      ])
    },
    saveToDb: function(frogs) {
      // Just pretend this is actually saving to a real database
      console.log(`Saving ${frogs.length} frogs to our database...`)
      return Promise.resolve()
    },
  }
  
  async function init() {
    try {
      const frogs = await api.fetchFrogs()
      return frogs.map((data) => createFrog(data))
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  function createFrogsManager() {
    const frogs = []
  
    return {
      addFrog(frog) {
        frogs.push(frog)
        return this
      },
      getFrogs() {
        return frogs
      },
      getMaleFrogs() {
        return frogs.filter((frog) => {
          return frog.getOption('sex') === 'male'
        })
      },
      getFemaleFrogs() {
        return frogs.filter((frog) => {
          return frog.getOption('sex') === 'female'
        })
      },
      feedFrogs(food) {
        frogs.forEach((frog) => {
          frog.eat(food)
        })
        return this
      },
      save: function() {
        return Promise.resolve(api.saveToDb(frogs))
      },
    }
  }
  
  function Food(name, type, calories) {
    this.name = name
    this.type = type
    this.calories = calories
  }
  
  const fly = new Food('fly', 'insect', 1.5)
  const dragonfly = new Food('dragonfly', 'insect', 4)
  const mosquito = new Food('mosquito', 'insect', 1.8)
  const apple = new Food('apple', 'fruit', 95)
  
  init()
    .then((frogs) => {
      const frogsManager = createFrogsManager()
      // Add each fetched frog to our managing list so we can manage them
      frogs.forEach((frog) => {
        frogsManager.addFrog(frog)
      })
  
      const genders = {
        males: frogsManager.getMaleFrogs(),
        females: frogsManager.getFemaleFrogs(),
      }
      // Lets feed the frogs and then save this new data to the database
      frogsManager
        .feedFrogs(fly)
        .feedFrogs(mosquito)
        .save()
      console.log(
        'We reached the end and our database is now updated with new data!',
      )
      console.log(
        `Fed: ${genders.males.length} male frogs and ${genders.females.length} female frogs`,
      )
      frogsManager.getFrogs().forEach((frog) => {
        console.log(
          `Frog ${frog.getOption('name')} consumed: ${frog
            .getFoodsConsumed()
            .map((food) => food.name)
            .join(', ')}`,
        )
      })
    })
    .catch((error) => {
      console.error(error)
    })