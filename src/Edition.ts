export class Edition {
    public constructor(
        public readonly edition: number,
        public readonly version: string,
        public readonly vendorID: string,
        public readonly image: string,
        public readonly available: boolean = true,
    ) { }

    public get branch(): string {
        const n = ("00" + this.edition).slice(-2);
        return `edition-${n}`;
    }

    public get githubURL(): string {
        return `https://github.com/martin-helmich/praxiswissen-typo3/tree/${this.branch}`;
    }

    public get vendorURL(): string {
        return `https://www.oreilly.de/buecher/${this.vendorID}.html`;
    }
}