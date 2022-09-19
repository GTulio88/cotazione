const urlBase = "http://economia.awesomeapi.com.br/json/last"

const btn = document.querySelector('#btnSum')
const inp = document.querySelector('#input1')
const inp2 = document.querySelector('#input2')
const p = document.querySelector('.pEuro')
const pDo = document.querySelector('.pDolar')
const sel = document.querySelector('.select1')
const sel2 = document.querySelector('.select2')

const h2final = document.querySelector('#h2final')



const getEuro = () => {

     axios.get(`${urlBase}/EUR-BRL`)
        .then(res => {
            const data = `${Number(res.data.EURBRL.bid).toFixed(2)}`
            p.textContent = `EUR € | R$ ${data.replace('.',',')}`
            // const opt = p
            btn.addEventListener('click', (e) => {
                e.preventDefault()
            
                if (sel.value === 'brl' && sel2.value === 'eur' ) {
                    const hh = inp.value / data
                    h2final.innerText = '€'+ hh.toFixed(2).replace('.',',')
                    // h2final.innerHTML = ''
                }if (sel.value === 'eur' && sel2.value === 'brl' ) {
                    const hh = inp.value * data
                    h2final.innerText = 'R$'+ hh.toFixed(2).replace('.',',')
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
           pDo.textContent = `USD $ | R$ ${data.replace('.',',')}`
           console.log(data)
           // const opt = p
           btn.addEventListener('click', (e) => {
               e.preventDefault()
          
               if (sel.value === 'brl' && sel2.value === 'usd' ) {
                const hh = inp.value / data
                h2final.innerText = '$'+ hh.toFixed(2).replace('.',',')
                // h2final.innerHTML = ''
            }if (sel.value === 'usd' && sel2.value === 'brl' ) {
                const hh = inp.value * data
                h2final.innerText = 'R$'+ hh.toFixed(2).replace('.',',')
                // h2final.innerHTML = ''
            }                
            
           }

           )

       })
       .catch(err => console.log(err));

}




getDolar()

getEuro()

