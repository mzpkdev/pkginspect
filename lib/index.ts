import * as path from "node:path"
import * as fs from "node:fs"


export interface Metadata {
    name: string
    version: string
    description: string
}

export class Package {
    #_pointer: string = ""
    #_parent: Package | undefined = undefined

    constructor(dirname: string, parent?: Package) {
        this.#_pointer = dirname
        this.#_parent = parent
    }

    get pathname(): string {
        return this.#_pointer
    }

    get metadata(): Metadata {
        return require(path.join(this.#_pointer, "./package.json"))
    }

    get parent(): Package | undefined {
        return this.#_parent
    }

    get root(): Package {
        let current: Package = this
        while (current.parent) {
            current = current.parent
        }
        return current
    }
}

const lookup = (dirname: string): string | undefined => {
    if (fs.existsSync(path.join(dirname, "package.json"))) {
        return dirname
    }
    const parent = path.dirname(dirname)
    if (parent === dirname) {
        return undefined
    }
    return lookup(parent)
}

const callstack = function fn(): string[] {
    const error = new Error()
    Error.captureStackTrace(error, fn)
    const matches = [ ...error.stack?.matchAll(/\(([^)]+)\)/g) ?? [] ]
        .map(match => match[1])
    return Array.from(
        new Set(
            matches
                .filter(match => !match.startsWith("node:"))
                .map(match => lookup(match))
                .filter(match => match != null)
        )
    )
}

export default {
    inspect: (): Package => {
        const callers = callstack()
        const self = Array.from(callers)
            .reduceRight((parent, dirname) =>
                new Package(dirname, parent), undefined as Package | undefined)
        if (self == null) {
            throw new Error()
        }
        return self
    }
}
