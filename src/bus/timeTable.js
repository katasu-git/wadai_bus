function returnTimeTable(nankaiFlag, fromUnivFlag) {
    const nowTime = new Date();
    const dayOfWeek = nowTime.getDay();//6が土曜 0が日曜

    if(nankaiFlag && fromUnivFlag) {
        const weekday = [ //平日ダイヤ
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [24, 52], //7時
            [30, 39, 55],
            [2, 32, 54],
            [8, 28, 38],
            [13, 52],
            [29, 52],//12
            [22, 52],
            [22, 48],
            [22, 52],
            [25, 35, 52],//16
            [22, 48],
            [9, 20, 50],
            [20, 51],
            [21, 51],
            [21, 45],
            [null],
            [null],
        ];
        const holiday = [ //休日ダイヤ
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [5, 53], //8
            [13, 46],
            [13, 38, 58],
            [18, 38, 58],
            [18, 46, 58],
            [18, 38, 58],
            [18, 38, 58],
            [18, 38, 58],
            [18, 38, 58],
            [19, 38, 58],
            [18, 38, 59],
            [18, 45],
            [16, 45],
            [15, 45],
            [null],
            [null],
        ];
        console.log("南海で帰る");
        if(dayOfWeek === 0 || dayOfWeek === 6) {
            return holiday;
        } else {
            return weekday;
        }
    } else if (nankaiFlag && !fromUnivFlag) {
        const weekday = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [45], //[7][0,1] 7時
            [5, 18, 32, 49, 56],
            [2, 17, 32, 46, 59],
            [9, 22, 29, 40, 42],
            [18, 48],
            [23, 48],//12
            [18, 48],//13
            [18, 48],//14
            [5, 48],//15
            [25, 48],//16
            [18, 48],//17
            [10, 15, 44],//18
            [14, 44],//19
            [14, 44],
            [14, 44],
            [10],
            [null],
        ];
        const holiday = [ //休日ダイヤ
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],//7
            [28],//8
            [13, 43],//9
            [11, 43],//10
            [0, 20, 43],//11
            [0, 20, 40],//12
            [0, 20, 40],//13
            [0, 20, 40],
            [0, 20, 40],
            [0, 20, 40],
            [0, 20, 40],//17
            [0, 20, 40],
            [0, 20, 49],
            [19, 49],
            [19, 49],
            [19],
            [null],
        ];
        console.log("南海からいく");
        if(dayOfWeek === 0 || dayOfWeek === 6) {
            return holiday;
        } else {
            return weekday;
        }
    } else if (!nankaiFlag && fromUnivFlag) {
        const weekday = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [50], //[7][0,1] 7時
            [37],
            [7, 22, 43],
            [4, 27, 47, 53],
            [23, 53],
            [28, 53],
            [23, 53],
            [23, 53],
            [10, 53],//15
            [30, 40, 53],//16
            [23, 53],//17
            [15, 20, 49],//18
            [19, 49],//19
            [19, 49],//20
            [19, 49],//21
            [15],
            [null],
        ];
        const holiday = [ //休日ダイヤ
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [33],
            [18, 48],
            [16, 48],
            [5, 25, 48],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 45],
            [5, 25, 54],
            [24, 54],
            [24, 54],
            [24],
            [null],
        ];
        console.log("JRで帰る");
        if(dayOfWeek === 0 || dayOfWeek === 6) {
            return holiday;
        } else {
            return weekday;
        }
    } else {
        const weekday = [
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [0, 28], //[7][0,1] 7時
            [6, 15, 24, 38, 43], //43は和大ライナー
            [8, 30, 44, 57],
            [14, 43, 49], //43は和大ライナー
            [28, 58],
            [28, 58],//12
            [28, 58],
            [17, 58],
            [28, 54],//15
            [11, 28, 58],//16
            [20, 34, 52],//17
            [22, 52],//18
            [28, 58],//19
            [28, 58],//20
            [22],//21
            [null],
            [null],
        ];
        const holiday = [ //休日ダイヤ
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [null],
            [42],//7
            [22, 50],
            [23, 50],
            [15, 35, 55],//10
            [15, 35, 55],
            [15, 35, 55],
            [15, 35, 55],//13
            [15, 35, 55],
            [15, 35, 55],
            [15, 35, 56],
            [15, 35, 55],
            [15, 35, 55],
            [22, 53],//19
            [22, 52],
            [22],
            [null],
            [null],
        ];
        console.log("JRから行く");
        if(dayOfWeek === 0 || dayOfWeek === 6) {
            return holiday;
        } else {
            return weekday;
        }
    }
}

export default { returnTimeTable }