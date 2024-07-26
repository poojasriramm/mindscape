const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c7cf7832b4mshd2b161f87072912p1c0231jsn87574d049a7d",
    "X-RapidAPI-Host": "betterdoctor.p.rapidapi.com",
  },
};

fetch(
  "https://betterdoctor.p.rapidapi.com/api.betterdoctor.com/2016-03-01/practices?BetterDoctor%20API%20key=undefined&Location=new%20york",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
