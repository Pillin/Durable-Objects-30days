export type Day01HelloResponse = {
    keyHint: string;
    inMemoryCount: number;
    note: string;
};

export class Coordinator {
    private inMemoryCount = 0;

    constructor(private state: DurableObjectState) { }

    async fetch(_req: Request): Promise<Response> {
        this.inMemoryCount++;

        const body: Day01HelloResponse = {
            keyHint: this.state.id.toString(),
            inMemoryCount: this.inMemoryCount,
            note: "In-memory only (later days will cover durable storage).",
        };

        return Response.json(body);
    }
}