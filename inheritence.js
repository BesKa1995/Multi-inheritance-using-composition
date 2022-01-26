function creatProgrammer(name) {
  const programmer = { name }
  return {
    ...programmer,
    ...canCode(programmer)
  }
}

function createFrontend(name) {
  const frontend = creatProgrammer(name)
  return {
    ...frontend,
    ...canReact(frontend),
  }
}

function canCode({ name }) {
  return {
    code: () => {
      console.log(`${name} is coding...`)
    }
  }
}

function canReact({ name }) {
  return {
    react: () => {
      console.log(`${name} is creating react app...`)
    }
  }

}

function createBackend(name) {
  const backend = creatProgrammer(name)
  return {
    ...backend,
    ...canBackend(backend)
  }

}

function canBackend({ name }) {
  return {
    nodejs: () => console.log(`${name} is programing on nodejs...`)
  }
}

function createFullStack(name) {
  const fullstack = creatProgrammer(name)
  return {
    ...fullstack,
    ...canFullStack(fullstack),
    ...canReact(fullstack),
    ...canBackend(fullstack)
  }
}

function canFullStack({ name }) {
  return {
    fullStack: () => console.log(`${name} is programing with fullstack...`)
  }
}

const fullstack = createFullStack('Beso')

fullstack.fullStack()
fullstack.react()
fullstack.nodejs()
