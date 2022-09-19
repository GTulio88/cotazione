const urlBase = "http://economia.awesomeapi.com.br/json/last"

const btn = document.querySelector('#btnSum')
const inp = document.querySelector('#input1')
const p = document.querySelector('.pEuro')
const pDo = document.querySelector('.pDolar')
const sel = document.querySelector('.select1')

const h2final = document.querySelector('#h2final')



const getEuro = () => {

     axios.get(`${urlBase}/EUR-BRL`)
        .then(res => {
            const data = `${Number(res.data.EURBRL.bid).toFixed(2)}`
            p.textContent = `EUR | € ${data.replace('.',',')}`
            // const opt = p
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            
                if (sel.value === 'real') {
                    const hh = inp.value * data
                    h2final.innerText = 'R$'+ hh
                    // h2final.innerHTML = ''
                }
            }

            )

        })
        .catch(err => console.log(err));

}



const getDolar = () => {

    axios.get(`${urlBase}/USD-BRL`)
       .then(res => {
           const data = `${Number(res.data.USDBRL.bid).toFixed(2)}`
           pDo.textContent = `USD | $ ${data.replace('.',',')}`
           console.log(data)
           // const opt = p
           btn.addEventListener('click', (e) => {
               e.preventDefault()
          
               if (sel.value === 'dolar') {
                   const hh = inp.value * data
                    console.log(inp.value)
                   h2final.innerHTML = 'R$'+ hh.toFixed(2)
                   console.log(h2final)// h2final.innerHTML = ''
               }
           }

           )

       })
       .catch(err => console.log(err));

}




getDolar()

getEuro()

