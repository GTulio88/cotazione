const urlBase = "http://economia.awesomeapi.com.br/json/last";

const btn = document.querySelector("#btnSum");
let inp = document.querySelector("#input1");
const inp2 = document.querySelector("#input2");
const p = document.querySelector(".pEuro");
const pDo = document.querySelector(".pDolar");
const sel = document.querySelector(".select1");
const sel2 = document.querySelector(".select2");
const h2final = document.querySelector("#h2final");
const number = 13459;

const oreIt = document.querySelector(".time-it");
const oreBr = document.querySelector(".time-br");

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const formatterUSD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatterEUR = new Intl.NumberFormat("it-IT", {
  style: "currency",
  currency: "EUR",
});

const time1 = document.querySelector(".time-br");
const time2 = document.querySelector(".time-it");

// const formatted = formatter.format(number);

const getEuro = () => {
  axios
    .get(`${urlBase}/EUR-BRL`)
    .then((res) => {
      const data = `${Number(res.data.EURBRL.bid).toFixed(2)}`;
      p.textContent = `EUR | € ${data.replace(".", ",")}`;
      // const opt = p
      btn.addEventListener("click", (e) => {
        e.preventDefault();

        if (sel.value === "brl" && sel2.value === "eur") {
          const hh = inp.value / data;
          h2final.innerText = formatterEUR.format(hh);
          // h2final.innerHTML = ''
        }
        if (sel.value === "eur" && sel2.value === "brl") {
          const hh = inp.value * data;
          h2final.innerText = formatter.format(hh);
          // h2final.innerHTML = ''
        }
      });
    })
    .catch((err) => console.log(err));
};

const getDolar = () => {
  axios
    .get(`${urlBase}/USD-BRL`)
    .then((res) => {
      const data = `${Number(res.data.USDBRL.bid).toFixed(2)}`;
      pDo.textContent = `USD | $ ${data.replace(".", ",")}`;
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(formatter.format(inp.value));

        if (sel.value === "brl" && sel2.value === "usd") {
          const hh = inp.value / data;
          h2final.innerText = formatterUSD.format(hh);
          // h2final.innerHTML = ''
        }
        if (sel.value === "usd" && sel2.value === "brl") {
          const hh = inp.value * data;
          h2final.innerText = formatter.format(hh);
          // h2final.innerHTML = ''
        }
      });
    })
    .catch((err) => console.log(err));
};

let oggi = "";

const getOra = () => {
  axios
    .get(`http://worldclockapi.com/api/json/utc/now`)
    .then((res) => {
      let data = res.data.currentDateTime;
      oggi = data;

      let today = new Date(oggi);

      const newToday = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour24: "true",
        timeZone: "America/Sao_paulo",
        timeZoneName: "long",
      }).format(today);
      console.log(newToday);

      oreBr.innerText = newToday;

      const newToday2 = new Intl.DateTimeFormat("it-IT", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        // second: "2-digit",
        hour24: "true",
        timeZone: "Europe/Rome",
        timeZoneName: "long",
      }).format(today);
      oreIt.innerText = newToday2;
      console.log(newToday2);
    })
    .catch((err) => console.log(err));
};

// const date = new Date('2018-07-19T22:07:00.000-03:00')

// const day = date.getDate().toString().padStart(2, '0')
// const month = (date.getMonth() + 1).toString().padStart(2, '0')
// const year = date.getFullYear()

// const formatted = `${day}/${month}/${year}`

// console.log(formatted)
getOra();

getDolar();

getEuro();

// const newToday = new Intl.DateTimeFormat("pt-BR", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit",
//   weekday: "long",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour24: "true",
//   timeZone: "America/Sao_paulo",
//   timeZoneName: "long",
// }).format(data);

// const newToday2 = new Intl.DateTimeFormat("it-IT", {
//   year: "numeric",
//   month: "long",
//   day: "2-digit",
//   weekday: "long",
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
//   hour24: "true",
//   timeZone: "Europe/Rome",
//   timeZoneName: "long",
// }).format(data);
