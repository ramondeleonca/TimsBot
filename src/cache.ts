import fs from "node:fs";
import path from "node:path";

export default class Cache<TCache extends object> {
    filename: string = "";
    cache: {[key: string]: any} = {};

    constructor(filename: string = path.join(__dirname, "../cache.json")) {
        this.filename = filename;

        if (!fs.existsSync(this.filename)) {
            fs.writeFileSync(this.filename, "{}");
            this.cache = {};
        } else this.update();
    }

    update() {
        this.cache = JSON.parse(fs.readFileSync(this.filename, "utf-8"));
    }

    write() {
        fs.writeFileSync(this.filename, JSON.stringify(this.cache));
    }

    get<TKey extends keyof TCache>(key: TKey): TCache[TKey] | undefined {
        this.update();
        if (key in this.cache) return this.cache[key as string];
    }

    set(key: string, value: any) {
        this.cache[key] = value;
        this.write();
    }
}