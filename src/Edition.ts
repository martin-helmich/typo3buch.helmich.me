export class Edition {
    public constructor(
        public readonly edition: number,
        public readonly version: string,
        public readonly vendorURL: string,
        public readonly image: string,
        public readonly available: boolean = true,
        public readonly release?: Date
    ) { }

    public get branch(): string {
        const n = ("00" + this.edition).slice(-2);
        return `edition-${n}`;
    }

    public get githubURL(): string {
        return `https://github.com/martin-helmich/praxiswissen-typo3/tree/${this.branch}`;
    }

}