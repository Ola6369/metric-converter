let input = document.getElementById('input')
let result = document.getElementById('result')
let resultType = document.getElementById('resultType')
let inputType = document.getElementById('inputType')


function solve() {
    if (inputType.value=='kilometer' && resultType.value== 'miles') {
        result.value = Number(input.value) / 1.609 + 'km'
    }
    if (inputType.value=='miles' && resultType.value== 'kilometer') {
        result.value = Number(input.value) / 0.621 + 'mile'
    }
    if (inputType.value=='centimeter' && resultType.value== 'inches') {
        result.value = Number(input.value) / 2.54 + 'inches'
    }
    if (inputType.value=='inches' && resultType.value== 'centimeter') {
        result.value = Number(input.value) * 2.54 + 'cm'
    }
    if (inputType.value=='pounds' && resultType.value== 'kilogram') {
        result.value = Number(input.value) / 2.205 + 'kg'
    }
    if (inputType.value=='kilogram' && resultType.value== 'pounds') {
        result.value = Number(input.value) * 2.205 + 'pounds'
    }
}

function change() {
    input.value = ''
    result.value=''
}