// Generics!
// https://nomadcoders.co/typescript-for-beginners/lectures/3675
// 오늘의 강의: Typescript로 블록체인 만들기: From #3.2 to #3.4
// 오늘의 과제: 위의 강의를 시청하신 후, 아래 코드 챌린지를 제출하면 됩니다.
// 제출기간: 익일 오전 6시까지

// Challenge goals:
// Using what you have learned so far, write the call signatures for two functions:
// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.

// 제출방법
// 오늘의 템플릿: 위의 Today's Blueprint 버튼을 클릭하세요!
// 코딩을 마치면 'Share' 를 클릭하세요.
// https://huchu.link/ 이동하여 URL 을 단축하세요.
// 단축된 URL 을 제출하면 됩니다.
// 제출기간: 익일 오전 6시까지


type item = number;
type array = item[];

type Last = (arr : array) => item;
type Prepend = (arr : array, item : item) => array;


// last(arr): 이 함수는 array의 마지막 아이템을 리턴해야 합니다.
const last : Last = (arr) => {
    console.log(`[last] arr : ${arr}`)
    console.log(`[last] arr : ${arr[arr.length-1]}`)
    return arr[arr.length-1]
}

// prepend(arr, item): 이 함수는 array의 시작에 아이템을 넣고, 리턴해야 합니다.
const prepend : Prepend = (arr, item) => {
    console.log(`[prepend] arr : ${arr}, item : ${item}`)
    arr[0] = item;
    console.log(`[prepend] arr : ${arr}, item : ${item}`)
    return arr;
}


// mockdata for test
last([1, 2, 3, 4, 5])
prepend([5, 4, 3, 2, 1], 8)
console.log(`[result] last : ${last([32, 12, 51, 43, 21])}`)
console.log(`[result] last : ${prepend([3, 4, 5, 6, 7], 42)}`)