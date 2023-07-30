export type Event<
    EventType extends string = string,
    EventData extends Record<string, unknown> = Record<string, unknown>
> = {
    position: number;
    type: EventType;
    data: EventData;
};

export type Command<
    CommandType extends string = string,
    CommandData extends Record<string, unknown> = Record<string, unknown>
> = {
    type: CommandType;
    data: CommandData;
};

export type Streams = Record<string, Stream>
export type Stream = {
    currentPosition: number,
    events: Event[]
}