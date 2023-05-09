import { expect } from 'chai';
import { Swiss } from '../src/Swiss';

const players = [
    {
        id: 1,
        rating: 1000,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 2,
        rating: 1100,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 3,
        rating: 1200,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 4,
        rating: 1300,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 5,
        rating: 1400,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 6,
        rating: 1500,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 7,
        rating: 1600,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    },
    {
        id: 8,
        rating: 1700,
        score: 0,
        colors: [],
        opponents: [],
        receivedBye: false,
        assignedBye: false
    }
];

describe('Swiss - Round 1 Pairings', () => {
    it('8 Rated Players', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, players)).to.eql([
            { board: 1, white: 8, black: 4 },
            { board: 2, white: 3, black: 7 },
            { board: 3, white: 6, black: 2 },
            { board: 4, white: 1, black: 5 }
        ]);
    });

    it('8 Rated Players with Lower Seed Getting White', () => {
        expect(Swiss({
            round: 1
        }, players)).to.eql([
            { board: 1, white: 4, black: 8 },
            { board: 2, white: 7, black: 3 },
            { board: 3, white: 2, black: 6 },
            { board: 4, white: 5, black: 1 }
        ]);
    });

    it('9 Rated Players', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, [...players, {
            id: 9,
            rating: 1800,
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: false
        }])).to.eql([
            { board: 0, white: 1, black: undefined },
            { board: 1, white: 9, black: 5 },
            { board: 2, white: 4, black: 8 },
            { board: 3, white: 7, black: 3 },
            { board: 4, white: 2, black: 6 }
        ]);
    });

    it('8 Rated Players & 1 Unrated Player', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, [...players, {
            id: 9,
            rating: undefined,
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: false
        }])).to.eql([
            { board: 0, white: 1, black: undefined },
            { board: 1, white: 8, black: 4 },
            { board: 2, white: 3, black: 7 },
            { board: 3, white: 6, black: 2 },
            { board: 4, white: 9, black: 5 }
        ]);
    });

    it('9 Rated Players with 1 Assigned Bye', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, [...players, {
            id: 9,
            rating: 1800,
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: true
        }])).to.eql([
            { board: 0, white: 9, black: undefined },
            { board: 1, white: 8, black: 4 },
            { board: 2, white: 3, black: 7 },
            { board: 3, white: 6, black: 2 },
            { board: 4, white: 1, black: 5 }
        ]);
    });

    it('10 Rated Players with 1 Assigned Bye', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, [...players, {
            id: 9,
            rating: 1800,
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: true
        },
        {
            id: 10,
            rating: 1900,
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: false
        }])).to.eql([
            { board: 0, white: 9, black: undefined },
            { board: 0, white: 1, black: undefined },
            { board: 1, white: 10, black: 5 },
            { board: 2, white: 4, black: 8 },
            { board: 3, white: 7, black: 3 },
            { board: 4, white: 2, black: 6 }
        ]);
    });

    it('500 Rated Players', () => {
        expect(Swiss({
            round: 1,
            higherRatedPlaysWhite: true
        }, new Array(500).fill(null).map((el, i) => ({
            id: i + 1,
            rating: 400 + (10 * i),
            score: 0,
            colors: [],
            opponents: [],
            receivedBye: false,
            assignedBye: false
        })))).to.eql([
            { board: 1, white: 500, black: 250 },
            { board: 2, white: 249, black: 499 },
            { board: 3, white: 498, black: 248 },
            { board: 4, white: 247, black: 497 },
            { board: 5, white: 496, black: 246 },
            { board: 6, white: 245, black: 495 },
            { board: 7, white: 494, black: 244 },
            { board: 8, white: 243, black: 493 },
            { board: 9, white: 492, black: 242 },
            { board: 10, white: 241, black: 491 },
            { board: 11, white: 490, black: 240 },
            { board: 12, white: 239, black: 489 },
            { board: 13, white: 488, black: 238 },
            { board: 14, white: 237, black: 487 },
            { board: 15, white: 486, black: 236 },
            { board: 16, white: 235, black: 485 },
            { board: 17, white: 484, black: 234 },
            { board: 18, white: 233, black: 483 },
            { board: 19, white: 482, black: 232 },
            { board: 20, white: 231, black: 481 },
            { board: 21, white: 480, black: 230 },
            { board: 22, white: 229, black: 479 },
            { board: 23, white: 478, black: 228 },
            { board: 24, white: 227, black: 477 },
            { board: 25, white: 476, black: 226 },
            { board: 26, white: 225, black: 475 },
            { board: 27, white: 474, black: 224 },
            { board: 28, white: 223, black: 473 },
            { board: 29, white: 472, black: 222 },
            { board: 30, white: 221, black: 471 },
            { board: 31, white: 470, black: 220 },
            { board: 32, white: 219, black: 469 },
            { board: 33, white: 468, black: 218 },
            { board: 34, white: 217, black: 467 },
            { board: 35, white: 466, black: 216 },
            { board: 36, white: 215, black: 465 },
            { board: 37, white: 464, black: 214 },
            { board: 38, white: 213, black: 463 },
            { board: 39, white: 462, black: 212 },
            { board: 40, white: 211, black: 461 },
            { board: 41, white: 460, black: 210 },
            { board: 42, white: 209, black: 459 },
            { board: 43, white: 458, black: 208 },
            { board: 44, white: 207, black: 457 },
            { board: 45, white: 456, black: 206 },
            { board: 46, white: 205, black: 455 },
            { board: 47, white: 454, black: 204 },
            { board: 48, white: 203, black: 453 },
            { board: 49, white: 452, black: 202 },
            { board: 50, white: 201, black: 451 },
            { board: 51, white: 450, black: 200 },
            { board: 52, white: 199, black: 449 },
            { board: 53, white: 448, black: 198 },
            { board: 54, white: 197, black: 447 },
            { board: 55, white: 446, black: 196 },
            { board: 56, white: 195, black: 445 },
            { board: 57, white: 444, black: 194 },
            { board: 58, white: 193, black: 443 },
            { board: 59, white: 442, black: 192 },
            { board: 60, white: 191, black: 441 },
            { board: 61, white: 440, black: 190 },
            { board: 62, white: 189, black: 439 },
            { board: 63, white: 438, black: 188 },
            { board: 64, white: 187, black: 437 },
            { board: 65, white: 436, black: 186 },
            { board: 66, white: 185, black: 435 },
            { board: 67, white: 434, black: 184 },
            { board: 68, white: 183, black: 433 },
            { board: 69, white: 432, black: 182 },
            { board: 70, white: 181, black: 431 },
            { board: 71, white: 430, black: 180 },
            { board: 72, white: 179, black: 429 },
            { board: 73, white: 428, black: 178 },
            { board: 74, white: 177, black: 427 },
            { board: 75, white: 426, black: 176 },
            { board: 76, white: 175, black: 425 },
            { board: 77, white: 424, black: 174 },
            { board: 78, white: 173, black: 423 },
            { board: 79, white: 422, black: 172 },
            { board: 80, white: 171, black: 421 },
            { board: 81, white: 420, black: 170 },
            { board: 82, white: 169, black: 419 },
            { board: 83, white: 418, black: 168 },
            { board: 84, white: 167, black: 417 },
            { board: 85, white: 416, black: 166 },
            { board: 86, white: 165, black: 415 },
            { board: 87, white: 414, black: 164 },
            { board: 88, white: 163, black: 413 },
            { board: 89, white: 412, black: 162 },
            { board: 90, white: 161, black: 411 },
            { board: 91, white: 410, black: 160 },
            { board: 92, white: 159, black: 409 },
            { board: 93, white: 408, black: 158 },
            { board: 94, white: 157, black: 407 },
            { board: 95, white: 406, black: 156 },
            { board: 96, white: 155, black: 405 },
            { board: 97, white: 404, black: 154 },
            { board: 98, white: 153, black: 403 },
            { board: 99, white: 402, black: 152 },
            { board: 100, white: 151, black: 401 },
            { board: 101, white: 400, black: 150 },
            { board: 102, white: 149, black: 399 },
            { board: 103, white: 398, black: 148 },
            { board: 104, white: 147, black: 397 },
            { board: 105, white: 396, black: 146 },
            { board: 106, white: 145, black: 395 },
            { board: 107, white: 394, black: 144 },
            { board: 108, white: 143, black: 393 },
            { board: 109, white: 392, black: 142 },
            { board: 110, white: 141, black: 391 },
            { board: 111, white: 390, black: 140 },
            { board: 112, white: 139, black: 389 },
            { board: 113, white: 388, black: 138 },
            { board: 114, white: 137, black: 387 },
            { board: 115, white: 386, black: 136 },
            { board: 116, white: 135, black: 385 },
            { board: 117, white: 384, black: 134 },
            { board: 118, white: 133, black: 383 },
            { board: 119, white: 382, black: 132 },
            { board: 120, white: 131, black: 381 },
            { board: 121, white: 380, black: 130 },
            { board: 122, white: 129, black: 379 },
            { board: 123, white: 378, black: 128 },
            { board: 124, white: 127, black: 377 },
            { board: 125, white: 376, black: 126 },
            { board: 126, white: 125, black: 375 },
            { board: 127, white: 374, black: 124 },
            { board: 128, white: 123, black: 373 },
            { board: 129, white: 372, black: 122 },
            { board: 130, white: 121, black: 371 },
            { board: 131, white: 370, black: 120 },
            { board: 132, white: 119, black: 369 },
            { board: 133, white: 368, black: 118 },
            { board: 134, white: 117, black: 367 },
            { board: 135, white: 366, black: 116 },
            { board: 136, white: 115, black: 365 },
            { board: 137, white: 364, black: 114 },
            { board: 138, white: 113, black: 363 },
            { board: 139, white: 362, black: 112 },
            { board: 140, white: 111, black: 361 },
            { board: 141, white: 360, black: 110 },
            { board: 142, white: 109, black: 359 },
            { board: 143, white: 358, black: 108 },
            { board: 144, white: 107, black: 357 },
            { board: 145, white: 356, black: 106 },
            { board: 146, white: 105, black: 355 },
            { board: 147, white: 354, black: 104 },
            { board: 148, white: 103, black: 353 },
            { board: 149, white: 352, black: 102 },
            { board: 150, white: 101, black: 351 },
            { board: 151, white: 350, black: 100 },
            { board: 152, white: 99, black: 349 },
            { board: 153, white: 348, black: 98 },
            { board: 154, white: 97, black: 347 },
            { board: 155, white: 346, black: 96 },
            { board: 156, white: 95, black: 345 },
            { board: 157, white: 344, black: 94 },
            { board: 158, white: 93, black: 343 },
            { board: 159, white: 342, black: 92 },
            { board: 160, white: 91, black: 341 },
            { board: 161, white: 340, black: 90 },
            { board: 162, white: 89, black: 339 },
            { board: 163, white: 338, black: 88 },
            { board: 164, white: 87, black: 337 },
            { board: 165, white: 336, black: 86 },
            { board: 166, white: 85, black: 335 },
            { board: 167, white: 334, black: 84 },
            { board: 168, white: 83, black: 333 },
            { board: 169, white: 332, black: 82 },
            { board: 170, white: 81, black: 331 },
            { board: 171, white: 330, black: 80 },
            { board: 172, white: 79, black: 329 },
            { board: 173, white: 328, black: 78 },
            { board: 174, white: 77, black: 327 },
            { board: 175, white: 326, black: 76 },
            { board: 176, white: 75, black: 325 },
            { board: 177, white: 324, black: 74 },
            { board: 178, white: 73, black: 323 },
            { board: 179, white: 322, black: 72 },
            { board: 180, white: 71, black: 321 },
            { board: 181, white: 320, black: 70 },
            { board: 182, white: 69, black: 319 },
            { board: 183, white: 318, black: 68 },
            { board: 184, white: 67, black: 317 },
            { board: 185, white: 316, black: 66 },
            { board: 186, white: 65, black: 315 },
            { board: 187, white: 314, black: 64 },
            { board: 188, white: 63, black: 313 },
            { board: 189, white: 312, black: 62 },
            { board: 190, white: 61, black: 311 },
            { board: 191, white: 310, black: 60 },
            { board: 192, white: 59, black: 309 },
            { board: 193, white: 308, black: 58 },
            { board: 194, white: 57, black: 307 },
            { board: 195, white: 306, black: 56 },
            { board: 196, white: 55, black: 305 },
            { board: 197, white: 304, black: 54 },
            { board: 198, white: 53, black: 303 },
            { board: 199, white: 302, black: 52 },
            { board: 200, white: 51, black: 301 },
            { board: 201, white: 300, black: 50 },
            { board: 202, white: 49, black: 299 },
            { board: 203, white: 298, black: 48 },
            { board: 204, white: 47, black: 297 },
            { board: 205, white: 296, black: 46 },
            { board: 206, white: 45, black: 295 },
            { board: 207, white: 294, black: 44 },
            { board: 208, white: 43, black: 293 },
            { board: 209, white: 292, black: 42 },
            { board: 210, white: 41, black: 291 },
            { board: 211, white: 290, black: 40 },
            { board: 212, white: 39, black: 289 },
            { board: 213, white: 288, black: 38 },
            { board: 214, white: 37, black: 287 },
            { board: 215, white: 286, black: 36 },
            { board: 216, white: 35, black: 285 },
            { board: 217, white: 284, black: 34 },
            { board: 218, white: 33, black: 283 },
            { board: 219, white: 282, black: 32 },
            { board: 220, white: 31, black: 281 },
            { board: 221, white: 280, black: 30 },
            { board: 222, white: 29, black: 279 },
            { board: 223, white: 278, black: 28 },
            { board: 224, white: 27, black: 277 },
            { board: 225, white: 276, black: 26 },
            { board: 226, white: 25, black: 275 },
            { board: 227, white: 274, black: 24 },
            { board: 228, white: 23, black: 273 },
            { board: 229, white: 272, black: 22 },
            { board: 230, white: 21, black: 271 },
            { board: 231, white: 270, black: 20 },
            { board: 232, white: 19, black: 269 },
            { board: 233, white: 268, black: 18 },
            { board: 234, white: 17, black: 267 },
            { board: 235, white: 266, black: 16 },
            { board: 236, white: 15, black: 265 },
            { board: 237, white: 264, black: 14 },
            { board: 238, white: 13, black: 263 },
            { board: 239, white: 262, black: 12 },
            { board: 240, white: 11, black: 261 },
            { board: 241, white: 260, black: 10 },
            { board: 242, white: 9, black: 259 },
            { board: 243, white: 258, black: 8 },
            { board: 244, white: 7, black: 257 },
            { board: 245, white: 256, black: 6 },
            { board: 246, white: 5, black: 255 },
            { board: 247, white: 254, black: 4 },
            { board: 248, white: 3, black: 253 },
            { board: 249, white: 252, black: 2 },
            { board: 250, white: 1, black: 251 }
        ])
    })
});