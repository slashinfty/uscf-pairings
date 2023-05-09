interface Options {
    round: number,
    startingBoardNumber?: number,
    higherRatedPlaysWhite?: boolean //28J
}

interface Player {
    id: number,
    rating: number | undefined,
    score: number,
    colors: Array<'w' | 'b' | 'x'>,
    opponents: Array<number>,
    receivedBye: boolean,
    assignedBye: boolean
}

interface Match {
    round: number,
    board: number,
    white: number,
    black: number | undefined
}

function lowestRatedPlayer(players: Array<Player>): Player {
    const index = players.findIndex(player => player.rating === Math.min(...players.filter(p => p.rating !== undefined).map(p => p.rating)));
    const [player] = players.splice(index, 1);
    return player;
}

function colorDue(player: Player): 'w' | 'b' | 'x' { //29E3a
    if (player.colors.length === 0) {
        return 'x';
    }
    const colorEquality = player.colors.reduce((sum, color) => sum + (color === 'w' ? 1 : color === 'b' ? -1 : 0), 0);
    let lastColor = 'x';
    let index = -1;
    do {
        [lastColor] = player.colors.slice(index);
        index--;
    } while (lastColor === 'x');
    if (colorEquality > 0) {
        return 'b';
    } else if (colorEquality < 0) {
        return 'w';
    } else if (lastColor === 'w') {
        return 'b';
    } else if (lastColor === 'b') {
        return 'w';
    }
}

function assignColors(players: [Player, Player]): [Player, Player] { //29E4
    const p1DueColor = colorDue(players[0]);
    const p1ColorEquality = players[0].colors.reduce((sum, color) => sum + (color === 'w' ? 1 : color === 'b' ? -1 : 0), 0);
    const p2DueColor = colorDue(players[1]);
    const p2ColorEquality = players[1].colors.reduce((sum, color) => sum + (color === 'w' ? 1 : color === 'b' ? -1 : 0), 0);
    if ((p1DueColor === 'w' && p2DueColor !== 'w') || (p1DueColor !== 'b' && p2DueColor === 'b')) {
        return players;
    } else if ((p1DueColor === 'b' && p2DueColor !== 'b') || (p1DueColor !== 'w' && p2DueColor === 'w')) {
        return [players[1], players[0]];
    } else if (p1ColorEquality !== 0 && p2ColorEquality === 0) {
        return p1DueColor === 'w' ? players : [players[1], players[0]];
    } else if (p1ColorEquality === 0 && p2ColorEquality !== 0) {
        return p2DueColor === 'b' ? players : [players[1], players[0]];
    } else if (p1ColorEquality !== p2ColorEquality) {
        if (Math.abs(p1ColorEquality) > Math.abs(p2ColorEquality)) {
            return p1DueColor === 'w' ? players : [players[1], players[0]];
        } else {
            return p2DueColor === 'b' ? players : [players[1], players[0]];
        }
    } else {
        for (let i = players[0].colors.length - 1; i > -1; i--) {
            const p1Color = players[0].colors[i];
            const p2Color = players[1].colors[i];
            if (p1Color !== p2Color) {
                if (p1Color === 'b' || p2Color === 'w') {
                    return players;
                } else if (p1Color === 'w' || p2Color === 'b') {
                    return [players[1], players[0]];
                }
            }
        }
        return players.sort((p1, p2) => p2.rating - p1.rating);
    }
}

function determineOddPlayers(players: Array<Player>): Array<Player> { //29D

    return;
}

export function Swiss(options: Options, players: Array<Player>): Array<Match> {
    const matches = [];
    let boardNumber = options.startingBoardNumber ?? 1;
    if (options.round === 1) { //28J
        const playersToPair = players.filter(player => player.assignedBye === false).sort((p1, p2) => (p2.rating ?? 0) - (p1.rating ?? 0));
        if (playersToPair.length % 2 !== 0) { //28L
            const byePlayer = lowestRatedPlayer(playersToPair);
            matches.push({
                round: 1,
                board: 0,
                white: byePlayer.id,
                black: undefined
            });
        }
        const top = playersToPair.slice(0, playersToPair.length / 2);
        const bottom = playersToPair.slice(-playersToPair.length / 2);
        let topWhite = options.higherRatedPlaysWhite ?? false;
        for (let i = 0; i < top.length; i++) {
            matches.push({
                round: 1,
                board: boardNumber + i,
                white: topWhite === true ? top[i].id : bottom[i].id,
                black: topWhite === true ? bottom[i].id : top[i].id
            });
            topWhite = !topWhite;
        }
    } else { //29
        const playersToPair = players.filter(player => player.assignedBye === false);
        const uniqueScores = [...new Set(playersToPair.map(player => player.score))].sort((x, y) => y - x);
        const scoreGroups = uniqueScores.map(score => playersToPair.filter(player => player.score === score)); //29A
        let oddPlayers = [];
        scoreGroups.forEach((scoreGroup, index) => {

        });
    }
    const playersAssignedByes = players.filter(player => player.assignedBye === true);
    playersAssignedByes.forEach(player => {
        matches.unshift({
            round: options.round,
            board: 0,
            white: player.id,
            black: undefined
        });
    });
    return matches;
}