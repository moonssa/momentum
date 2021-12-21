const quotes = [
    {
        quote: "창조적인 삶을 살려면 내가 틀릴지도 모른다는 공포를 버려야 한다.",
        author: "미상",
    },
    {
        quote:"일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다.",
        author:"짐 론",
    },
    {
        quote: "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다.",
        author: "윈스턴 처칠",
    },
    {
        quote: "인생이란 자신을 찾는 것이 아니라 자신을 만드는 것이다. ",
        author: "Walt Disney",
    },
    {
        quote: "나는 내가 더 노력할수록 운이 더 좋아진다는 걸 발견했다.",
        author: "토마스 제퍼슨"
    },
    {

        quote: "사람들은 동기 부여는 오래가지 않는다고 말한다. 목욕도 마찬가지다. 그래서 매일 하라고하는 것이다. ",
        author: "지그 지글러",
    },
    {
        quote: "당신이 살면서 어떤 부침을 겪든 간에 생각이 당신의 기본 자산이 되어야 한다.",
        author: "APJ 칼람",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() *quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
