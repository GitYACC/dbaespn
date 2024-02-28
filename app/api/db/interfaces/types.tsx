type int4 = number
type varchar = string
type date = string
type numeric = number
type bool = boolean

interface USER {
    id: int4,
    user: varchar,
    name: varchar,
    password: varchar,
    admin: bool
}

interface STATS {
    id: int4,
    height: varchar,
    weight: int4,
    vertical: numeric,
    wingspan: varchar,
    age: int4,
    overall: int4,
    defending: int4,
    finishing: int4,
    iq: int4,
    passing: int4,
    speed: int4,
    rebounding: int4,
    shooting: int4,
    handling: int4
}

interface SEASON {
    year: string,
    date: date,
    teams: varchar[],
    score: int4[]
}

interface GAMES {
    year: string,
    date: date,
    team: varchar,
    player: varchar,
    points: int4,
    rebounds: int4,
    assists: int4,
    blocks: int4,
    steals: int4,
    fga: int4,
    fgm: int4,
    fta: int4,
    ftm: int4,
    turnovers: int4,
    fouls: int4
}