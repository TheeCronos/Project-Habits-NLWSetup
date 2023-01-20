const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
    run: ['01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26'],
    takePills: ['01-20', '01-23'],
    journal: ['01-21', '01-22', '01-24']
}

nlwSetup.setData(data)
nlwSetup.load()