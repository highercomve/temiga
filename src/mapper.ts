function argsToContext (context: any, args: Array<String>) {
  const values = Object.keys(context).reduce((acc, key) => {
    const value = context[key]
    acc[value] = key
    return acc
  }, {})
  return values
}

export default class Mapper {
  contextMap: Object
  context: Object
  
  constructor (parentNode: Node, context: Object) {
    this.contextMap = {}
    this.context
  }

  map (strings: TemplateStringsArray, ...args: Array<any>): any {
   this.contextMap = argsToContext(this.context, args)
    return args.reduce((acc, arg, index) => {
      const attribute = strings[index]
        .trim()
        .match(/ .*=\"/)
      switch (true) {
        case !!attribute:
          const attr = attribute[0].replace(/[ ="]/g, '')
          if (!acc[this.contextMap[arg]]) {
            acc[this.contextMap[arg]] = []
          }
          acc[this.contextMap[arg]].push({
              comand: 'setAttribute', params: [attr, arg]
          })
      }

      return acc
    }, {})
  }
}
