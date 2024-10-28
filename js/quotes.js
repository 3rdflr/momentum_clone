const quotes = [
  {
    quote:
      "Youth is something I never wanna take for granted. I just want to smile and live life.",
  },
  { quote: "I think I'm cool. That's all that matters." },
  {
    quote:
      "I'm an optimistic guy. I'm one of those big dreamers. I'm one of those kids with that annoying imagination.",
  },
  {
    quote:
      "I don't want nobody to ever say, 'I coulda done that beat' or 'I know where you got that from.'",
  },
  { quote: "It's family first, and then everything else." },
  {
    quote:
      "t's not possible to experience constant euphoria, but if you're grateful, you can find happiness in everything.",
  },
  {
    quote:
      "Everything that we experience every day leaves a long-lasting impression.",
  },
  { quote: "I am overly ambitious, because I realize it can be done." },
];

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
